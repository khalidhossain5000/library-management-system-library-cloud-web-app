import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [filterBooks,setFilterBooks]=useState(allBooks)
  console.log("this is fiter",filterBooks);

  const handleFilterBooks=()=>{
    const availableBooks=filterBooks.filter((books)=>books.quantity>0)
    
    setFilterBooks(availableBooks)
  }
  return (
    <div className="py-12 lg:py-24">
      <h2 className="mb-6 lg:mb-16 text-6xl font-bold text-center text-[#1F2937]">
        All Books : {filterBooks.length}
      </h2>

      {/* filter sidebar */}
<section className="bg-red-200">
      <section className="lg:flex filter-container container mx-auto py-12 lg:py-24 gap-6">
        <div className="w-[20%] bg-green-300 shadow-2xl rounded-4xl">
          <aside className="text-center mt-12">
            <button onClick={handleFilterBooks} className="btn btn-warning btn-bold text-xl text-black">
              Show Available Books
            </button>
          </aside>
        </div>

        <div className="bg-blue-300 shadow-2xl rounded-xl p-6 w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 ">
          {filterBooks.map((book) => (
            <AllBooksCard key={book._id} book={book}></AllBooksCard>
          ))}
        </div>
      </section>


      </section>
    </div>
  );
};

export default AllBooks;
