/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import img1 from "../../assets/TestimonialImg/1.jpg"
import img2 from "../../assets/TestimonialImg/img-ii.jpg"
import img3 from "../../assets/TestimonialImg/img-ig.jpg"
import img4 from "../../assets/TestimonialImg/img-in.jpg"
import img5 from "../../assets/TestimonialImg/img-vh.jpg"
const Testimonial = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] "><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>  

      {/* <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}

      <h1 className="text-6xl font-bold text-[#1F2937] text-center py-6">
        Testimonials
      </h1>
      <h5 className="text-2xl font-semibold text-black text-center pt-6">
        Check out What our user's says about our library!
      </h5>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="text-5xl font-bold"
      >
        Remote{" "}
        <motion.span
          animate={{
            color: ["#ff5733", "#33ff33", "#8a33ff"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          Jobs
        </motion.span>{" "}
        For you!
      </motion.h1>

      <div className="mar-container py-48 relative">
        <Marquee
          gradient
          gradientColor="#bb0af950"
          pauseOnHover={true}
          speed={190}
        >
          

          {/* card-1*/}
          <div className="w-[350px] h-[500px] md:w-[500px] md:h-[500px] mx-6 p-6 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-bl from-[#101203] via-[#211317] to-[#5b1371] relative">
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-6 py-3">
                This library system has streamlined how we manage books, track users, and handle overdue items. It's user-friendly and incredibly efficient for daily operations.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img1}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">Alexandra Clark</h2>
                <h5 className="text-white md:text-xl">Librarian</h5>
                <h5 className="text-white md:text-xl">City Central Library</h5>
              </div>
            </div>
          </div>

            {/* card-2*/}
          <div className="w-[350px] h-[500px] md:w-[500px] md:h-[500px] mx-6 p-6 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-bl from-[#101203] via-[#340436] to-[#5b1371] ">
             <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-6 py-3">
                Managing our institution's library is so much easier now. The interface is clean, and issuing books takes just seconds with this modern tool.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img2}
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-xl md:text-2xl font-semibold">Rezaul Karim</h2>
                <h5 className="text-white md:text-xl">Assistant Professor</h5>
                <h5 className="text-white md:text-xl">Green Hill College</h5>
              </div>
            </div>
          </div>

            {/* card-3*/}
          <div className="w-[350px] h-[500px] md:w-[500px] md:h-[500px] mx-6 p-6 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#5c351a] via-[#422519] to-[#160a1d] ">
             <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-6 py-3">
                "This system reduced our paper dependency drastically. Book returns and new additions are now systematic and fully recorded."
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img3}
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-xl md:text-2xl font-semibold">Nasir Uddin</h2>
                <h5 className="text-white md:text-xl">Operations Manager</h5>
                <h5 className="text-white md:text-xl">ReadSmart Foundation</h5>
              </div>
            </div>
          </div>
          {/* card-4*/}
          <div className="w-[350px] h-[500px] md:w-[500px] md:h-[500px] mx-6 p-6 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#135656] via-[#102a34] to-[#111327] ">
             <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-6 py-3">
                "One of the best decisions we made. The system is fast, reliable, and makes our job 10x easier every day."
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img4}
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-xl md:text-2xl font-semibold">Aminul Hoque</h2>
                <h5 className="text-white md:text-xl">Library In-Charge</h5>
                <h5 className="text-white md:text-xl">NextGen School</h5>
              </div>
            </div>
          </div>
          {/* card-5*/}
          <div className="w-[350px] h-[500px] md:w-[500px] md:h-[500px] mx-6 p-6 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#2a0d69] via-[#190946] to-[#120626] ">
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-6 py-3">
                "No more spreadsheets or manual tracking. This library management app has transformed our resource tracking process completely."
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img5}
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-xl md:text-2xl font-semibold">Faisal Chowdhury</h2>
                <h5 className="text-white md:text-xl">Media & Library Staff</h5>
                <h5 className="text-white md:text-xl">Global English Institute</h5>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
