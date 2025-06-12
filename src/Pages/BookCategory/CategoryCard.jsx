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
    <div className="flex flex-col h-full p-6 shadow-2xl rounded-xl">
      <div className="imgs w-full mb-6 lg:mb-8">
        <img className="w-[200px] mx-auto" src={imageUrl} alt="" />
      </div>
      <div className="cntent text-center">
        <h2 className="text-2xl my-3 text-[#111111] font-bold">{title}</h2>
        <h3 className="text-xl text-[#1F2937] font-semibold my-3">By : {author}</h3>
        <h2 className="text-[#1F2937] text-xl font-bold my-4">Category: {category}</h2>
        <h5 className="text-[#4da94d] font-bold text-xl">Quantity : {quantity}</h5>
        
      </div>
      {/* RATING COMPONENT */}
      {/* <h2 className="text-xl font-bold text-pink700">
        THIS IS COMPONENT OF RATING:
      </h2> */}
      <div className="rtign text-center my-6">
        <Rating
          initialRating={rating}
          emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
          fullSymbol={<FaStar className="text-3xl text-[#ff9b04]" />}
          fractions={2}
          readonly
        />
      </div>
      {/* RATING COMPONENT ENDS */}
      <div className=" text-center">
        <Link
        to={`/all-books/${_id}`}
        className="btn btn-success font-bold text-black text-center"
      >
        View Details
      </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
