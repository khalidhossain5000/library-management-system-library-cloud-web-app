
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoryCard from './CategoryCard';

const BookCategory = () => {
    const {name}=useParams()
    const allBooks=useLoaderData()
    

    const categoryBooks=allBooks.filter((book)=>book?.category?.toLowerCase() === name)
   
    
    
    return (
        <div className='py-12 lg:py-24'>
            <h1 className='text-6xl font-bold text-center text-pink-600'>Welcome To {name} Categories</h1>

        <div className='container mx-auto py-12 lg:py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center'>
            {
                categoryBooks.map((singleBook)=><CategoryCard
                singleBook={singleBook}
                key={singleBook._id}
                ></CategoryCard>)
            }
        </div>

        </div>
    );
};

export default BookCategory;