import axios from "axios";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const BorrowedBooksCard = ({ book, DeleteBorrowBook }) => {
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
  
  const {user}=useAuth()

  const handleReturnBook = (bookId) => {
    //UPDATE QUANTITY API
    axios
      .patch(`http://localhost:3000/all-books/quantity/${bookId}`,{
        headers:{
        authorization:`Bearer ${user?.accessToken}`
      }
      })
      .then(() => {
       
      })
      .catch((error) => {
        console.log(error);
        alert("Reutrn error");
      });

    //DELETE BORROW BOOK API
    axios
      .delete(`http://localhost:3000/borrowed-books/${_id}`,{
      headers:{
        authorization:`Bearer ${user?.accessToken}`
      }
    })
      .then((res) => {
        const data = res.data;
        if (data.deletedCount) {
          Swal.fire({
            title: "Book Returned!",
            text: "You Returned The Book SuccessFully!Thanks",
            icon: "success",
            theme: "dark",
          });
          DeleteBorrowBook(bookId);
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="card- py-24 shadow-2xl p-6 rounded-2xl bg-slate-200 h-full">
        <div className="img border border-pink-600 p-2 rounded-xl mx-auto">
          <img src={imageUrl} alt="" />
        </div>
        <h1 className="text-2xl font-bold text-[#1F2937]  py-6">
          {title}
        </h1>
        <h2 className="text-xl font-medium text-[#1F2937] ">
          Return Date: {returnDate}
        </h2>
        <div className="rtign my-3">
          <Rating
            initialRating={rating}
            emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
            fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
            fractions={2}
            readonly
          />
        </div>
        <h2 className="text-[#1F2937] font-medium text-xl mt-5">Author : {author}</h2>
        <h2 className="text-[#1F2937] font-medium text-xl my-3">Quantity : {quantity}</h2>
        <h2 className="text-[#1F2937] font-medium text-xl my-3">Category : {category}</h2>
        <div className="mt-6 ">
          <button
          onClick={() => handleReturnBook(bookId)}
          // className="btn btn-xl btn-warning text-2xl font-bold text-black m-6"
          className="bg-gradient-to-tr from-[#C3DDFD] to-[#FFF9C4] text-[#0A0A23] font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full cursor-pointer"
          
        >
          Return
        </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
