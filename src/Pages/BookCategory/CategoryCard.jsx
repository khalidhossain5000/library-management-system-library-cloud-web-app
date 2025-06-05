import React from 'react';
import { Link } from 'react-router';

const CategoryCard = ({singleBook}) => {
    const {
      _id,
  title,
  imageUrl,
  quantity,
  author,
  category,
  rating, 
//    --->dynamic rating will be added later
} = singleBook;

    return (
        <div className=''>
            <img className='w-48 h-48' src={imageUrl} alt="" />
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h2>Category: {category}</h2>
            <h5>Quantity : {quantity}</h5>
            <h5>Rating : {rating}</h5> 
            <Link to={`/all-books/${_id}`} className='btn btn-success font-bold text-black'>View Details</Link>
        </div>
    );
};

export default CategoryCard;