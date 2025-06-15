import React from "react";
import sliderImg1 from "../../assets/SliderImg/new-img.jpg"
import sliderImg2 from "../../assets/SliderImg/reading-img.jpg";
import sliderImg3 from "../../assets/SliderImg/slider-img.jpg";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div className="">
      <Swiper
      
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
       
      >
        {/* slider -1 */}
        <SwiperSlide>
          <div className="relative h-[100vh] lg:h-[100vh] w-full">
            <img
              className="w-full h-[100vh] lg:max-h-[100vh]"
              src={sliderImg2}
              alt=""
            />
            {/* text and black overlay */}
            <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">
              
                <h2 className="lg:text-6xl font-bold text-cyan-300">
                  Welcome To LibraryCloud:A Library Management System.
                </h2>
              
              <h5 className="lg:text-2xl font-medium text-cyan-100 w-full lg:w-6/12 mx-auto mt-9">
                LibraryCloud is an awesome library management system.It is a platform where people can discover thousands of books,can borrow the books by creating an account and return it.
                
              </h5>
            </div>
          </div>
        </SwiperSlide>
        {/* slider - 2 */}
        <SwiperSlide>
          <div className="relative h-[100vh] w-full">
            <img
              className="w-full h-[100vh] lg:max-h-[100vh]"
              src={sliderImg3}
              alt=""
            />
            {/* text and black overlay */}
            <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">
              
                <h2 className="lg:text-6xl font-bold text-cyan-300">
                  Unlock The World Of Knowledge.
                </h2>
              
              <h5 className="lg:text-xl font-medium text-cyan-100 w-full lg:w-6/12 mx-auto mt-9">
                Explore thousands of books on our website.Efficient, fast, and user-friendly system for modern libraries.
              </h5>
            </div>
          </div>
        </SwiperSlide>
        {/* slider - 3 */}
        <SwiperSlide>
          <div className="relative h-[100vh] w-full">
            <img
              className="w-full h-[100vh] lg:max-h-[100vh]"
              src={sliderImg1}
              alt=""
            />
            {/* text and black overlay */}
            <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">
              
                <h2 className="lg:text-6xl font-bold text-cyan-300">
                  Smart and Faster Library Management System
                </h2>
           
              <h5 className="lg:text-xl font-medium text-cyan-100 w-full lg:w-6/12 mx-auto mt-9">
                Experience an awesome library management system at your fingerprints.Real time book tracking,member management smarter and faster library.
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;