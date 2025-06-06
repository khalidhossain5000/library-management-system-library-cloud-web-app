import React from "react";
import { Link } from "react-router";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const CategoryCard = ({ singleBook }) => {
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
    <div className="">
      <img className="w-48 h-48" src={imageUrl} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h2>Category: {category}</h2>
      <h5>Quantity : {quantity}</h5>
      <h5>Rating : {rating}</h5>
      {/* RATING COMPONENT */}
      <h2 className="text-xl font-bold text-pink700">
       
        THIS IS COMPONENT OF RATING:
      </h2>
      <div className="rtign">
        <Rating
        initialRating={rating}
        emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
        fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
        fractions={2}
        readonly
      />
      </div>
      {/* RATING COMPONENT ENDS */}
      <Link
        to={`/all-books/${_id}`}
        className="btn btn-success font-bold text-black"
      >
        View Details
      </Link>
    </div>
  );
};

export default CategoryCard;
