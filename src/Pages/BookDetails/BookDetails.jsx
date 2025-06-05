import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const [books,setBooks]=useState(data)
  const {user}=useAuth()
  const { _id,title, imageUrl,quantity,content,rating,description,category,author } = books;
  
  const handleBorrowBook=()=>{
    // if(user?.email ===)
    const borrowBook={
      bookId:_id,
      userEmail:user?.email
    }
    //SAVE BORROW BOOK IN TO THE DB
    axios.post(`http://localhost:3000/borrow-books/${_id}`,borrowBook)
    .then((res)=>{
        toast.success("Book is Added To BorrowBook List.", {
                className: "w-[300px] h-[100px] text-xl font-bold",
                removeDelay: 1000,
                iconTheme: {
                  primary: "#16061e",
                  secondary: "#ef54e2",
                },
                style: {
                  border: "1px solid black",
                  color: "white",
                  backgroundImage: "linear-gradient(to bottom,#16061e, #ef54e2)",
                },
        });
      console.log(res.data)
      setBooks(prev=>{
        return {...prev,quantity:prev.quantity-1}
      })
    })
    .catch(error=>{
      console.log(error);
      alert("Borrow book error occured")
    })
  }
  return (
    <div className="py-24">
      <h2 className="text-6xl font-bold text-center text-pink-600">
        Book Details of : {title}
      </h2>
      <div className="container mx-auto py-24">
        <img className="mx-auto" src={imageUrl} alt="" />
        <h1 className="text-3xl font-bold text-center text-pink-600">{title}</h1>
        <h2 className="text-2xl font-bold text-blue-600">Quantity : {quantity}</h2>
        <h2>Rating : {rating}</h2>
        <h2>Author : {author}</h2>
        <h2>Category : {category}</h2>
        <p>Description : {description}</p>
        <p>Content of Books : {content}</p>
        <div className="text-center">
            <button onClick={handleBorrowBook} className="w-9/12 mt-6 btn btn-info text-black font-bold ">Borrow</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
