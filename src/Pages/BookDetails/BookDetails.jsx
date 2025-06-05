import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Modal from "react-modal";

const BookDetails = () => {
  const data = useLoaderData();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [books, setBooks] = useState(data);
  const [returnDate, setReturnDate] = useState(null);

  const { user } = useAuth();

  // MODAL RELATED FUNC
  const openModal = () => {
    setModalIsOpen(true);
  };
  //after modal opne later if needed

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // MODAL RELATED FUNC ENDS

  const {
    _id,
    title,
    imageUrl,
    quantity,
    content,
    rating,
    description,
    category,
    author,
  } = books;

  const handleBorrowBook = () => {
    const borrowBook = {
      bookId: _id,
      userEmail: user?.email,
    };
    if (!returnDate) {
      Swal.fire({
        icon: "error",
        title: "Please Select A Return Date",
        text: "You must need to select a return date to borrow a book .",
        theme: "dark",
      });
      return;
    }

    //SAVE BORROW BOOK IN TO THE DB
    axios
      .post(`http://localhost:3000/borrow-books/${_id}`, borrowBook)
      .then((res) => {
        toast.success("Book is Added To BorrowBook List.", {
          className: "w-[300px] h-[100px] text-xl font-bold z-[999]",
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
        console.log(res.data);
        setBooks((prev) => {
          return { ...prev, quantity: prev.quantity - 1 };
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Borrow book error occured");
      });
  };
  return (
    <div className="py-24">
      <h2 className="text-6xl font-bold text-center text-pink-600">
        Book Details of : {title}
      </h2>
      <div className="container mx-auto py-24">
        <img className="mx-auto" src={imageUrl} alt="" />
        <h1 className="text-3xl font-bold text-center text-pink-600">
          {title}
        </h1>
        <h2 className="text-2xl font-bold text-blue-600">
          Quantity : {quantity}
        </h2>
        <h2>Rating : {rating}</h2>
        <h2>Author : {author}</h2>
        <h2>Category : {category}</h2>
        <p>Description : {description}</p>
        <p>Content of Books : {content}</p>
        <div className="text-center">
          <button
            onClick={openModal}
            className={`w-9/12 mt-6 btn btn-info text-black font-bold `}
            disabled={quantity<=0}
          >
            Borrow
          </button>
        </div>
      </div>

      {/* modal start */}

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="fixed inset-0 bg-black/30 flex justify-center items-center"
        className="w-8/12 bg-gradient-to-br from-[#1a0830] to-[#00163d] h-6/12"
      >
        <h1 className="text-3xl font-bold text-pink-600 text-center">
          WELCOME TO BORROW A BOOK
        </h1>
        <button
          onClick={closeModal}
          className="btn btn-warning text-black font-bold"
        >
          close
        </button>
        <DatePicker
          onChange={(date) => {
            const formattedDate = date.toISOString().split("T")[0];
            setReturnDate(formattedDate);
          }}
          // value={new Date()}
          selected={returnDate}
          placeholderText="Select a date between today and 5 days in the future"
          className="w-full lg:py-3 text-white px-5 lg:text-xl lg:font-bold"
        />
        <input className="input bg-pink-500 text-white font-bold rounded-2xl w-9/12 mx-auto flex justify-center" type="text" name="" defaultValue={user?.displayName} readOnly/>
        <input className="input bg-pink-500 text-white font-bold rounded-2xl w-9/12 mx-auto flex justify-center" type="email" name="" defaultValue={user?.email} readOnly />
        <input disabled={quantity<=0} onClick={handleBorrowBook} type="submit" value="Submit" className={`btn btn-success font-bold text-black text-2xl `} />
      </Modal>

      {/* modal end */}
    </div>
  );
};

export default BookDetails;
