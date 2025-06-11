import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BorrowedBooksCard from "./BorrowedBooksCard";


const BorrowedBooks = () => {
    //{borrowBookData.length}
    const[borrowedBooks,setBorrowedBooks]=useState([])
    
   
    const {user}=useAuth()
    useEffect(()=>{
        axios(`http://localhost:3000/borrowed-books/${user?.email}`)
        .then((result)=>{
            const data=result.data; 
            setBorrowedBooks(data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[user])
    return (
        <div className="py-36">
            <h1 className='text-6xl font-bold text-center text-pink-600'>Total Borrowed Books : {borrowedBooks.length} </h1>

            <div className="py-12 grid grid-cols-5 container mx-auto">
                
                {
                    borrowedBooks.map((book)=><BorrowedBooksCard
                    key={book._id}
                    book={book}
                    DeleteBorrowBook={(deleteId)=>{
                        const remainingBooks=borrowedBooks.filter((book)=>book.bookId !== deleteId)
                        setBorrowedBooks(remainingBooks)
                    }}
                    ></BorrowedBooksCard>)
                }
                
            </div>
        </div>
    );
};

export default BorrowedBooks;