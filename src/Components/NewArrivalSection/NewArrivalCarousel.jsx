import React from "react";
import img1 from "../../assets/BookImg/786aad002_41022.jpg";
import img2 from "../../assets/BookImg/Dhusor_Mayajal-Mahabub_Abir-48ef3-444187.jpg";
import img3 from "../../assets/BookImg/Jotsnan-.jpg";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";


const NewArrivalCarousel = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Autoplay,]}
        spaceBetween={80}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {/* slider -1 */}
        <SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="">
              <img src={img1} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Video Gaming
              </h3>
            </div>
          </div>
        </SwiperSlide>
        {/* slider -2 */}
        <SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img2} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                PhotoGraphy
              </h3>
            </div>
          </div>
        </SwiperSlide>
        {/* slider -3 */}
        <SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="relative text-center flex flex-col items-center space-y-12">
            <div className="w-7/12 h-7/12  mx-auto">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">
                Running
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewArrivalCarousel;
