import React from "react";
import { Link } from "react-router";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
const AllBooksCard = ({ book }) => {
  const {
    title,
    imageUrl,
    quantity,
    author,
    category,
    //   description,
    rating,
    _id,
    //content  //--->dynamic rating will be added later
  } = book;

  //THIS IS OPTIONAL LWILL BE DELETED SOON
  // const handleDelete = () => {
  //   fetch(
  //     `https://assignment-11-server-five-lake.vercel.app/allBooks-delete/${_id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((result) => {
  //       alert("deleted");
  //       console.log(result);
  //     })
  //     .then((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="flex flex-col justify-between h-full p-3 rounded-2xl shadow-2xl bg-gradient-to-br from-[#3e1f91] via-[#121218] to-[#340436]">

      <div className="imgs shadow-xl p-2 border border-blue-300 rounded-xl">
        <img className="w-56 h-56 " src={imageUrl} alt="" />
      </div>

      <div className="cntstn py-3 lg:py-5 space-y-3">
        <h1 className="text-2xl font-bold text-[#fce6fa]">{title}</h1>
        <h3 className="font-bold text-white">
          Quantity :{" "}
          <span className="text-xl font-bold text-cyan-300">{quantity}</span>{" "}
        </h3>
        <h3 className="font-semibold text-white">
          Author : <span className=" font-bold text-cyan-300">{author}</span>
        </h3>
        <h3 className="font-semibold text-white">
          Category :<span className="font-bold text-cyan-300">{category}</span>{" "}
        </h3>
      </div>

      <div className="text-center py-3 lg:py-6 mt-auto rtign space-y-6 lg:space-y-12">
        <Rating
          initialRating={rating}
          emptySymbol={<FaRegStar className="text-3xl text-yellow-400" />}
          fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
          fractions={2}
          readonly
        />

        <Link
          to={`/update-book/${_id}`}
          className=" bg-gradient-to-tr from-[#C3DDFD] to-[#FFF9C4] hover:from-[#7b1892] hover:to-[#131207] hover:text-white text-xl text-black font-bold py-3 px-6 rounded-md shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default AllBooksCard;
