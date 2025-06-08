import React from "react";
import Slider from "../../Components/Slider/Slider";
import BookCategories from "./BookCategories";
import NewArrivals from "../../Components/NewArrivalSection/NewArrivals";




const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BookCategories></BookCategories>
      <NewArrivals></NewArrivals>
      
      
    </div>
  );
};

export default Home;
