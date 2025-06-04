
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookCategory = () => {
    const {name}=useParams()
    const allBooks=useLoaderData()
    
    const categoryBooks=allBooks.filter((book)=>book.category.toLowerCase() === name)
    console.log(categoryBooks);
    return (
        <div className='py-12 lg:py-24'>
            <h1 className='text-6xl font-bold text-center text-pink-600'>Welcome To {name} Categories</h1>


git
        </div>
    );
};

export default BookCategory;