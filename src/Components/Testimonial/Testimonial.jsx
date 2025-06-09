/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
const Testimonial = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-blue-700 text-center pt-12">
        Testimonials
      </h1>
      <h5 className="text-2xl font-semibold text-black text-center py-3">
        Check out What our user's says about our library!
      </h5>

      <div className="mar-container py-48">
        <Marquee speed={60}>
          {/* card-1 */}
          <div className="w-[500px] mx-6 p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#4b06e1] to-[#11072a] ">
            <div className="content">
              <p className="text-pink-200 text-xl py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                perspiciatis error commodi maiores ex voluptates esse laborum.
                Quae saepe voluptas repudiandae nihil, similique non hic
                perferendis accusamus quas, necessitatibus pariatur.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6">
              <img
                className="w-22 h-22 rounded-full"
                src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png"
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-2xl font-semibold">
                  Jhankar Mahbubs
                </h2>
                <h5 className="text-white text-xl">Designation</h5>
                <h5 className="text-white text-xl">Other info HEre</h5>
              </div>
            </div>
          </div>

          {/* card-2 */}
          <div className="w-[500px] mx-6 p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#4b06e1] to-[#11072a] ">
            <div className="content">
              <p className="text-pink-200 text-xl py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                perspiciatis error commodi maiores ex voluptates esse laborum.
                Quae saepe voluptas repudiandae nihil, similique non hic
                perferendis accusamus quas, necessitatibus pariatur.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6">
              <img
                className="w-22 h-22 rounded-full"
                src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png"
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-2xl font-semibold">
                  Jhankar Mahbubs
                </h2>
                <h5 className="text-white text-xl">Designation</h5>
                <h5 className="text-white text-xl">Other info HEre</h5>
              </div>
            </div>
          </div>

          {/* card-3 */}
          <div className="w-[500px] mx-6 p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#670c68] to-[#b40af1] ">
            <div className="content">
              <p className="text-pink-200 text-xl py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                perspiciatis error commodi maiores ex voluptates esse laborum.
                Quae saepe voluptas repudiandae nihil, similique non hic
                perferendis accusamus quas, necessitatibus pariatur.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6">
              <img
                className="w-22 h-22 rounded-full"
                src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png"
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-2xl font-semibold">
                  Jhankar Mahbubs
                </h2>
                <h5 className="text-white text-xl">Designation</h5>
                <h5 className="text-white text-xl">Other info HEre</h5>
              </div>
            </div>
          </div>
          


          {/* card-3 */}
          <motion.div 
          
          className="w-[500px] mx-6 p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#670c68] to-[#b40af1] ">
            <div className="content">
              <p className="text-pink-200 text-xl py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                perspiciatis error commodi maiores ex voluptates esse laborum.
                Quae saepe voluptas repudiandae nihil, similique non hic
                perferendis accusamus quas, necessitatibus pariatur.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6">
              <img
                className="w-22 h-22 rounded-full"
                src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png"
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-2xl font-semibold">
                  Jhankar ANimated Card
                </h2>
                <h5 className="text-white text-xl">Designation</h5>
                <h5 className="text-white text-xl">Other info HEre</h5>
              </div>
            </div>
          </motion.div>













          {/* card-4 */}
          <div className="w-[500px] mx-6 p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-[#2a1464] to-[#ff4b78] ">
            <div className="content">
              <p className="text-pink-200 text-xl py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                perspiciatis error commodi maiores ex voluptates esse laborum.
                Quae saepe voluptas repudiandae nihil, similique non hic
                perferendis accusamus quas, necessitatibus pariatur.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6">
              <img
                className="w-22 h-22 rounded-full"
                src="https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png"
                alt=""
              />

              <div className="info">
                <h2 className="text-white text-2xl font-semibold">
                  Jhankar Mahbubs
                </h2>
                <h5 className="text-white text-xl">Designation</h5>
                <h5 className="text-white text-xl">Other info HEre</h5>
              </div>
            </div>
          </div>

          
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
