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

  const { user } = useAuth();

  const handleReturnBook = (bookId) => {
    //UPDATE QUANTITY API
    axios
      .patch(
        `https://assignment-11-server-five-lake.vercel.app/all-books/quantity/${bookId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
      .then(() => {})
      .catch((error) => {
        console.log(error);
        alert("Reutrn error");
      });

    //DELETE BORROW BOOK API
    axios
      .delete(
        `https://assignment-11-server-five-lake.vercel.app/borrowed-books/${_id}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
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
      <div className="p-3 rounded-2xl shadow-2xl bg-gradient-to-br from-[#3e1f91] via-[#121218] to-[#340436]">
        <div className="p-2 rounded-xl" >
      <img className="w-56 h-56 mx-auto " src={imageUrl} alt="" />
      </div>
        <div className="cntent space-y-6" >
          <h1 className="text-2xl font-bold text-[#fce6fa]">{title}</h1>
        <h2 className="font-bold text-white ">
          Return Date: <span className="text-xl font-bold text-cyan-300">{returnDate}</span>
        </h2>
        <h3 className="font-bold text-white">Quantity : <span className="text-xl font-bold text-cyan-300">{quantity}</span> </h3>
      <h3 className="font-semibold text-white">Author : <span className=" font-bold text-cyan-300">{author}</span></h3>
      <h3 className="font-semibold text-white">Category :<span className="font-bold text-cyan-300">{category}</span> </h3>
        </div>

        <div className="rtign my-3 flex items-center gap-3">
          <span className="text-xl font-bold text-cyan-300 ">Rating:</span>
          <Rating
            initialRating={rating}
            emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
            fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
            fractions={2}
            readonly
          />
        </div>
        
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
