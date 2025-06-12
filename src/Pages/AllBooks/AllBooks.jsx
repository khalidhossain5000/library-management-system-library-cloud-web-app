import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import AllBooksCard from "./AllBooksCard";
import AllBooksTable from "./AllBooksTable";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const AllBooks = () => {
  // const allBooks = useLoaderData();
  const [allBooks,setAllBooks]=useState([])
  // const [filterBooks, setFilterBooks] = useState(allBooks);
  const [view, setView] = useState("card");
  //AVOIDING LOADER() METHOD AND FETCHING DATA USING USEEFFECT
  const {user}=useAuth()
  useEffect(()=>{
    axios('http://localhost:3000/allBooks',{
      headers:{
        authorization:`Bearer ${user?.accessToken}`
      }
    })
    .then((res)=>{
      const data=res.data;
      setAllBooks(data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[user?.accessToken])
  // console.log(allBooks);
  //AVOIDING LOADER() METHOD AND FETCHING DATA USING USEEFFECT ends here
  const handleFilterBooks = () => {
    // const availableBooks = filterBooks.filter((books) => books.quantity > 0);
    const availableBooks = allBooks.filter((books) => books.quantity > 0);
    setAllBooks(availableBooks);
  };
  return (
    <div className="py-12 lg:py-24">
      <h2 className="mb-6 lg:mb-16 text-6xl font-bold text-center text-[#1F2937]">
        All Books : {allBooks.length}
      </h2>

      {/* filter sidebar */}
      <section className="bg-red-200">
        <section className="lg:flex filter-container container mx-auto py-12 lg:py-24 gap-6">
          <div className="w-[20%] bg-green-300 shadow-2xl rounded-4xl">
            <aside className="text-center mt-12">
              <button
                onClick={handleFilterBooks}
                className="btn btn-warning btn-bold text-xl text-black"
              >
                Show Available Books
              </button>
              {/* select  VIEW*/}
              <select
                defaultValue="Card View"
                className="select select-md mt-6 w-9/12 text-black text-xl font-bold"
                onChange={(e) => setView(e.target.value)}
              >
                <option disabled={true}>Select Books View</option>
                <option value="card">Card View</option>
                <option value="table">Table View</option>
              </select>
            </aside>
          </div>

          {/* CARD VIEW CONTAINER  */}
          {view == "card" && (
            <div className="bg-blue-300 shadow-2xl rounded-xl p-6 w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 ">
              {allBooks.map((book) => (
                <AllBooksCard key={book._id} book={book}></AllBooksCard>
              ))}
            </div>
          )}

          {/* TABLE VIEW CONTAINER */}

          {view === "table" && (
            <div className="bg-blue-300 shadow-2xl rounded-xl p-6 w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
              <table className="table border-1 border-pink-600 table-auto w-full">
                {/* head */}
                <thead className="">
                  <tr className="border-b-1 border-b-pink-600 text-[#feeeff] text-xl font-normal">
                    <th className="">#</th>
                    <th className="border-x-1 border-x-pink-300">Book Image</th>
                    <th className="border-x-1 border-x-pink-300">Book Name</th>
                    <th className="border-x-1 border-x-pink-300">Author</th>
                    <th className="border-x-1 border-x-pink-300">Category</th>
                    <th className="border-x-1 border-x-pink-300">Quantity</th>
                    <th className="border-x-1 border-x-pink-300">Rating</th>
                    <th className="border-x-1 border-x-pink-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allBooks.map((books, index) => <AllBooksTable key={index} allBooks={books} index={index}
                    ></AllBooksTable>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default AllBooks;
