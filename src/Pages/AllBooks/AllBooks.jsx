import React from 'react';
import { useLoaderData } from 'react-router';
import AllBooksCard from './AllBooksCard';

const AllBooks = () => {
    const allBooks=useLoaderData()
    console.log(allBooks);
    return (
        <div className='py-12 lg:py-24'>
            <h2 className='text-6xl font-bold text-center text-pink-600'>All Books : {allBooks.length}</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 container mx-auto gap-6 py-12 lg:py-24'>
                {
                    allBooks.map((book)=><AllBooksCard
                    key={book._id}
                    book={book}
                    ></AllBooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;