import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../../assets/logo/librarycloudlogo.png"
const NavBar = () => {
  const { user ,logOutUser} = useAuth();


  const handleLogOut=()=>{
      logOutUser()
      .then(()=>{
        toast.success(`Log Out Successfull`, {
            className: "w-[300px] h-[100px] text-xl font-bold ",
            removeDelay: 1000,
            iconTheme: {
              primary: "#16061e",
              secondary: "#ef54e2",
            },
            style: {
              border: "1px solid black",
              color: "white",
              backgroundImage:
                "linear-gradient(to bottom right,#4B5563,#9333EA, #3B82F6)",
            },
          });
      })
      
    }
      const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books (p)</NavLink>
      </li>
      <li>
        <NavLink to="/add-books">Add Book (p)</NavLink>
      </li>
      <li>
        <NavLink to="/borrowed-books/:email">Borrowed Book (p)</NavLink>
      </li>

      {user ? (
        <> 
          <div
            className="tooltip tooltip-bottom"
            data-tip={`${user.displayName}`}
          >
            <img
              className="w-16 h-16 rounded-full cursor-pointer"
              src={user.photoURL}
              alt=""
            />
          </div> 
          <button onClick={handleLogOut} className="btn btn-warning text-black font-bold ">
            Sign Out
          </button>
        </>
      ) : (
        <>
          
          <li>
            <NavLink to="/login">Login (c)</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register (c)</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" text-black w-full bg-gradient-to-r from-[#ffffff] to-[#e0f7ff] ">
      <div className="navbar container mx-auto items-center">
        <div className="flex items-center justify-between w-full lg:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 text-white p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img className="max-w-[150px] lg:max-w-[250px] h-[90px]" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-5 px-1 font-bold">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
