import React from "react";
import Slider from "../../Components/Slider/Slider";
import BookCategories from "./BookCategories";

import Testimonial from "../../Components/Testimonial/Testimonial";

import NewArrivals from "../../Components/NewArrivalSection/NewArrivals";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <NewArrivals />
      <BookCategories></BookCategories>

      <Testimonial></Testimonial>



   


    </div>
  );
};

export default Home;
