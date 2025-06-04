import React from "react";
import img from "../../assets/BookCatImg/categoryBg.png";
import { Link } from "react-router";

const BookCategories = () => {
  return (
    <div className="py-12 lg:py-24">
      <h1 className="mb-6 lg:mb-16 text-6xl font-bold text-center text-pink-600">
        Book Categories
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 lg:py-16">
        {/* cat-1 */}
        <Link to="www.google.com">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="relative group w-full bg-no-repeat bg-cover bg-top py-24 lg:py-32 rounded-2xl shadow-2xl"
          >
            {/* overlay */}
            <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
            <h1 className="z-10 relative text-2xl font-semibold text-white text-center">
              Computer & Programming
            </h1>
          </div>
        </Link>

        {/* cat-2 */}
        <Link to="www.google.com">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="relative group w-full bg-no-repeat bg-cover bg-top py-24 lg:py-32 rounded-2xl shadow-2xl"
          >
            {/* overlay */}
            <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
            <h1 className="z-10 relative text-2xl font-semibold text-white text-center">
              Science-Fiction
            </h1>
          </div>
        </Link>

        {/* cat-3 */}
        <Link to="www.google.com">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="relative group w-full bg-no-repeat bg-cover bg-top py-24 lg:py-32 rounded-2xl shadow-2xl"
          >
            {/* overlay */}
            <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
            <h1 className="z-10 relative text-2xl font-semibold text-white text-center">
              Sports & Games
            </h1>
          </div>
        </Link>

        {/* cat-4 */}
        <Link to="www.google.com">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="relative group w-full bg-no-repeat bg-cover bg-top py-24 lg:py-32 rounded-2xl shadow-2xl"
          >
            {/* overlay */}
            <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
            <h1 className="z-10 relative text-2xl font-semibold text-white text-center">
              Self-Development & Meditation
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCategories;
