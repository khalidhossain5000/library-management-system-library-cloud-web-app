import axios from "axios";

import Swal from "sweetalert2";

const BorrowedBooksCard = ({ book,DeleteBorrowBook }) => {
    
    
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
  const handleReturnBook = (bookId) => {
    //UPDATE QUANTITY API
    console.log("handle",bookId);
    axios
      .patch(`http://localhost:3000/all-books/quantity/${bookId}`)
      .then(() => {
        
        // console.log(res.data);
        
      })
      .catch((error) => {
        console.log(error);
        alert("Reutrn error");
      });

    //DELETE BORROW BOOK API
    axios
      .delete(`http://localhost:3000/borrowed-books/${_id}`)
      .then((res) => {
        const data = res.data;
        if (data.deletedCount) {
          Swal.fire({
            title: "Book Returned!",
            text: "You Returned The Book SuccessFully!Thanks",
            icon: "success",
            theme: "dark",
          });
          DeleteBorrowBook(bookId)
          
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
