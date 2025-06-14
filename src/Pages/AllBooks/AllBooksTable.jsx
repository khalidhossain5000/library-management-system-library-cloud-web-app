import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router";

const AllBooksTable = ({ allBooks, index }) => {
  const {
    _id,
    title,
    imageUrl,
    quantity,
    author,
    category,
    rating,
    
  } = allBooks;


  
  return (
    
      
       
        <tr className="border-b-1 border-b-pink-600 border-r-1 text-[17px] font-normal">
          <td className="text-pink-100">{index+1}</td>
          <td className="border-x-1 border-x-pink-300 text-pink-100">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask rounded-2xl h-12 w-12 lg:w-20 lg:h-20">
                  <img
                    className=""
                    src={imageUrl}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </td>
          <td className="border-x-1 border-x-pink-300 text-pink-100">{title}</td>
          <td className="border-x-1 border-x-pink-300 text-pink-100">{quantity}</td>
          <td className="border-x-1 border-x-pink-300 text-pink-100">{author}</td>
          <td className="border-x-1 border-x-pink-300 text-pink-100">{category}</td>
          <td className="border-x-1 border-x-pink-300 text-pink-100"><div className="rtign text-center my-6">
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
              fullSymbol={<FaStar className="text-3xl text-[#ff9b04]" />}
              fractions={2}
              readonly
            />
          </div></td>
          
          <th>
            <div className="space-y-3">
              <Link
                      to={`/update-book/${_id}`}
                      // className=" btn btn-warning font-bold text-black "
                      className=" bg-gradient-to-tr from-[#C3DDFD] to-[#FFF9C4] text-xl text-black font-bold py-3 px-6 rounded-md shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      Update
                    </Link>
              
            </div>
          </th>
        </tr>
      
   
  );
};

export default AllBooksTable;
