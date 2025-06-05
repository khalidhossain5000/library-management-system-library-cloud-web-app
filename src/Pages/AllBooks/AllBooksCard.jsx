import React from 'react';

const AllBooksCard = ({book}) => {
    const {
  title,
  imageUrl,
  quantity,
  author,
  category,
//   description,
  rating, 
  //content  //--->dynamic rating will be added later
} = book;
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h1>{title}</h1>
            <h3>Quantity : {quantity}</h3>
            <h3>Author : {author}</h3>
            <h3>Category : {category}</h3>
            <h3>Rating : {rating}</h3>
        </div>
    );
};

export default AllBooksCard;