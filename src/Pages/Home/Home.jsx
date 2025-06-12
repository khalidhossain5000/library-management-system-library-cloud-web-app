import React from "react";
import Slider from "../../Components/Slider/Slider";
import BookCategories from "./BookCategories";
import NewArrivals from "../../Components/NewArrivalSection/NewArrivals";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BookCategories></BookCategories>
      <NewArrivals></NewArrivals>
      <Testimonial></Testimonial>
      
    </div>
  );
};

export default Home;
