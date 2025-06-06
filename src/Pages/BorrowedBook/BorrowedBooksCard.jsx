import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const BorrowedBooksCard = ({ book }) => {
  const {
    bookId,
    title,
    imageUrl,
    rating,
    author,
    quantity,
    category,
    returnDate,
    _id,
  } = book;
  console.log("book id", bookId);
  const handleReturnBook = (bookId) => {
    //UPDATE QUANTITY API
    axios
      .patch(`http://localhost:3000/all-books/quantity/${bookId}`)
      .then((res) => {
        console.log(res.data);
        alert("Quantity Update and book returned");
      })
      .catch((error) => {
        console.log(error);
        alert("Reutrn error");
      });

    //DELETE BORROW BOOK API
    axios.delete(`http://localhost:3000/borrowed-books/${_id}`)
    .then((res) => {
      const data = res.data;
      console.log(data);
      Swal.fire({
        title: "Deleted!",
        text: "You Returned The Book SuccessFully!Thanks",
        icon: "success",
        theme:'dark'
      });
    })
    .catch(error=>{
        console.log(error);
    })
  };
  return (
    <div className="container mx-auto">
      <div className="card- py-24">
        <img src={imageUrl} alt="" />
        <h1 className="text-center text-2xl font-bold text-pink-700 py-6">
          {title}
        </h1>
        <h2 className="text-3xl font-bold text-cyan-600">
          Return Date: {returnDate}
        </h2>
        <h2>Rating : {rating}</h2>
        <h2>Author : {author}</h2>
        <h2>Quantity : {quantity}</h2>
        <h2>Category : {category}</h2>
        <button
          onClick={() => handleReturnBook(bookId)}
          className="btn btn-xl btn-warning text-2xl font-bold text-black m-6"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
