import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BorrowedBooksCard from "./BorrowedBooksCard";
import { Helmet } from "react-helmet-async";
import Loading from "../../Components/Loading/Loading";

const BorrowedBooks = () => {
  //{borrowBookData.length}
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const { user,loading } = useAuth();
  console.log(loading);
  useEffect(() => {
    if(loading) return <Loading/>
    axios(
      `https://assignment-11-server-five-lake.vercel.app/borrowed-books/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((result) => {
        const data = result.data;
        setBorrowedBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);
  return (
    <div className="py-36 bg-gradient-to-br from-[#c0e3f7] via-[#dfc7ea] to-[#c0e3f7]">
      <div className="d-title">
        <Helmet>
          <title>LibraryCloud | Borrowed-Books</title>
        </Helmet>
      </div>
      <h1 className="text-6xl font-bold text-[#1F2937] text-center py-6">
        Total Borrowed Books : {borrowedBooks.length}{" "}
      </h1>

      <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 container mx-auto">
        {borrowedBooks.map((book) => (
          <BorrowedBooksCard
            key={book._id}
            book={book}
            DeleteBorrowBook={(deleteId) => {
              const remainingBooks = borrowedBooks.filter(
                (book) => book.bookId !== deleteId
              );
              setBorrowedBooks(remainingBooks);
            }}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
