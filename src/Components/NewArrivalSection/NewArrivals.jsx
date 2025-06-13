import React from "react";
// import ScrollLinked from "../../Components/Motion/ScrollLinked";
// import img1 from "../../assets/BookImg/786aad002_41022.jpg";

import img1 from "../../assets/BookImg/NewArrival/ভিনগ্রহের প্রাণী এলিয়েন.jpg";
import img2 from "../../assets/BookImg/NewArrival/লোলার জগৎ.jpg";
import img3 from "../../assets/BookImg/NewArrival/The Old Man and The Sea.jpg";
import img4 from "../../assets/BookImg/NewArrival/লুকিং ফর দ্য এনিমি.jpg";
import img5 from "../../assets/BookImg/NewArrival/সেরা সাত সায়েন্স ফিকশন.jpg";
import img6 from "../../assets/BookImg/NewArrival/ডিটেকটিভ রাহাদ.jpg";
import img7 from "../../assets/BookImg/NewArrival/প্রথম প্রহর.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
const NewArrivals = () => {
  return (
    <div className="bg-gradient-to-br from-[#c0e3f7] via-[#dfc7ea] to-[#c0e3f7] py-12 lg:py-24">
      <h1 className="text-6xl font-bold text-[#1F2937] text-center py-6">
        New Arrivals
      </h1>

      <h5 className="text-2xl font-semibold text-black text-center py-3 mb-6 lg:mb-12">
        Check out the newest books just added to our library!
      </h5>
      <div className="container mx-auto py-12 ">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          initialSlide={2}
          speed={600}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 350,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor={true}
          spaceBetween={80}
          slidesPerView={3}
          pagination={{ clickable: true }}
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
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img1} alt="" />
              </div>
              <div className="content">
                <h3 className="hind-siliguri lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  ভিনগ্রহের প্রাণী এলিয়েন
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By{" "}
                  <span className="hind-siliguri font-bold text-blue-600">
                    শামসুজ্জামান শামস
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* slider -2 */}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img2} alt="" />
              </div>
              <div className="content">
                <h3 className="hind-siliguri lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  লোলার জগৎ
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By
                  <span className="hind-siliguri font-bold text-blue-600">
                    মোহাম্মদ সাইফূল ইসলাম
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>          
        {/* slider -3 */}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img3} alt="" />
              </div>
              <div className="content">
                <h3 className="lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  The Old Man and The Sea (Award-Winning Authors' Books)
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By 
                  <span className="mx-2 font-bold text-blue-600">
                   Ernest Hemingway
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>        
          {/* slider -4*/}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img4} alt="" />
              </div>
              <div className="content">
                <h3 className="lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  লুকিং ফর দ্য এনিমি
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By 
                  <span className="mx-2 font-bold text-blue-600">
                   বেটি ড্যাম,মো.আবু বকর সিদ্দীক(অনুবাদক)
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>          
        {/* slider -5*/}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img5} alt="" />
              </div>
              <div className="content">
                <h3 className="hind-siliguri lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  সেরা সাত সায়েন্স ফিকশন
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By 
                  <span className="hind-siliguri mx-2 font-bold text-blue-600">
                   হুমায়ূন আহমেদ
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>       
         {/* slider -6*/}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img6} alt="" />
              </div>
              <div className="content">
                <h3 className="hind-siliguri lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  ডিটেকটিভ রাহাদ
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By 
                  <span className="hind-siliguri mx-2 font-bold text-blue-600">
                   আল আমিন
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>         
        {/* slider -6*/}
          <SwiperSlide>
            <div className="relative p-6 lg:p-12 shadow-2xl rounded-md text-center flex flex-col items-center space-y-12 bg-gradient-to-bl from-[#ffffff] via-[#cef6ef30] to-[#e5dbff]">
              <div className="shadow-xl rounded-xl ">
                <img className="w-56 p-2" src={img7} alt="" />
              </div>
              <div className="content">
                <h3 className="hind-siliguri lg:text-2xl rounded-xl font-bold text-[#1F2937] text-center">
                  প্রথম প্রহর
                </h3>
                <h5 className="lg:text-[18px] pt-3 font-medium">
                  By 
                  <span className="hind-siliguri mx-2 font-bold text-blue-600">
                   হুমায়ূন আহমেদ
                  </span>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
