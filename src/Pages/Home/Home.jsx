import React from "react";
import Slider from "../../Components/Slider/Slider";
import BookCategories from "./BookCategories";

import Testimonial from "../../Components/Testimonial/Testimonial";

import NewArrivals from "../../Components/NewArrivalSection/NewArrivals";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <div className="d-title">
        <Helmet>
          <title>LibraryCloud | Home</title>
        </Helmet>
      </div>

      <Slider></Slider>
      <BookCategories></BookCategories>
      <NewArrivals />

      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
