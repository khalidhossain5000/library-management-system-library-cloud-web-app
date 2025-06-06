import React from "react";
import Slider from "../../Components/Slider/Slider";
import BookCategories from "./BookCategories";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BookCategories></BookCategories>
      <h2 className="py-36">this is rating</h2>
      
      
    </div>
  );
};

export default Home;
