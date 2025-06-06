import React from 'react';

const BorrowedBooksCard = ({book}) => {
    const {title,imageUrl,rating,author,quantity,category}=book;
    console.log(book);
    return (
        <div>
            <div className="card- py-24">
                <img src={imageUrl} alt="" />
                <h1 className="text-center text-2xl font-bold text-pink-700 py-6">{title}</h1>

                <h2>Rating : {rating}</h2>
                <h2>Author : {author}</h2>
                <h2>Quantity : {quantity}</h2>
                <h2>Category : {category}</h2>

            </div>
        </div>
    );
};

export default BorrowedBooksCard;