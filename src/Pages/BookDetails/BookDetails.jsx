import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Modal from "react-modal";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const BookDetails = () => {
  // const data = useLoaderData();
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [returnDate, setReturnDate] = useState(null);

  const { user } = useAuth();
  //data loading use effect starts here
  useEffect(() => {
    axios(`https://assignment-11-server-five-lake.vercel.app/allBooks/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => {
        const data = res.data;
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  //data loading use effect ends
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
      returnDate: returnDate,
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
      .post(
        `https://assignment-11-server-five-lake.vercel.app/borrow-books/${_id}`,
        borrowBook,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
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
        }
        setBooks((prev) => {
          return { ...prev, quantity: prev.quantity - 1 };
        });
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Already Borrowed!",
            text: "You have already borrowed this book. Return it first to borrow again.",
            theme: "dark",
          });
        } else {
          console.log("Borrow error occurred");
        }
        // alert("Borrow book error occured");
      });
  };
  return (
    <div className="py-24 bg-gradient-to-tr from-[#010313] to-[#0f7366]">
      <h2 className="text-6xl font-bold text-[#1F2937] text-center py-6">
        Book Details of : {title}
      </h2>

      <div className="container mx-auto py-24 flex  justify-center gap-12">
        <div className="imgs border border-pink-200 rounded-2xl p-6 !h-full bg-pink-600">
          <img className="" src={imageUrl} alt="" />
        </div>

        <div className="contnt border border-amber-300 rounded-2xl  p-9 w-full space-y-2">
          <h1 className="text-3xl font-bold text-[#fdfffe]">{title}</h1>
          <h2 className="text-xl font-semibold text-pink-300 py-6">
            By : {author}
          </h2>
          <h2 className="text-xl font-semibold text-pink-300 ">
            Category : {category}
          </h2>
          <div className="rtign">
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
              fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
              fractions={2}
              readonly
            />
          </div>
          <p className="text-xl font-semibold text-white ">
            Description : {description}
          </p>
          <h2 className="text-2xl font-bold text-fuchsia-500">
            Quantity : {quantity}
          </h2>
          <p className="text-3xl font-semibold text-pink-100 ">
            Content of Books : {content}
          </p>
          <div className="text-center">
            <button
              onClick={openModal}
              className={`w-9/12 mt-6 btn btn-info text-black font-bold text-2xl py-8`}
              disabled={quantity <= 0}
            >
              Borrow
            </button>
          </div>
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
        <input
          className="input bg-pink-500 text-white font-bold rounded-2xl w-9/12 mx-auto flex justify-center"
          type="text"
          name=""
          defaultValue={user?.displayName}
          readOnly
        />
        <input
          className="input bg-pink-500 text-white font-bold rounded-2xl w-9/12 mx-auto flex justify-center"
          type="email"
          name=""
          defaultValue={user?.email}
          readOnly
        />
        <input
          disabled={quantity <= 0}
          onClick={handleBorrowBook}
          type="submit"
          value="Submit"
          className={`btn btn-success font-bold text-black text-2xl `}
        />
      </Modal>

      {/* modal end */}
    </div>
  );
};

export default BookDetails;
