/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import img1 from "../../assets/TestimonialImg/latest/anther-l.jpg";
import img2 from "../../assets/TestimonialImg/latest/vg-s.jpg";
import img3 from "../../assets/TestimonialImg/latest/ii-n.jpg";
import img4 from "../../assets/TestimonialImg/latest/v-ltstst.jpg";
import img5 from "../../assets/TestimonialImg/latest/v-lt.jpg";
import img6 from "../../assets/TestimonialImg/latest/lst-vih.jpg";
import AnimatedCircle from "./AnimatedCircle";

const Testimonial = () => {
  return (
    <div className="py-24 relative">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#99dff9,transparent)]"></div>
      </div>

    

      <motion.h1
        animate={{
          color: [
            "#111827",
            "#1f2937",
            "#374151",
            "#4b5563",
            "#0f172a",
            "#334155",
            "#3b0764",
            "#7c3aed",
            "#131206",
          ],
          transition: { duration: 5, repeat: Infinity },
        }}
        className="text-6xl font-bold text-[#1F2937] text-center py-6"
      >
        Testimonials
      </motion.h1>
      <h5 className="text-2xl font-semibold text-black text-center pt-6">
        Check out What our user's says about our library!
      </h5>

      
<div className="crlces absolute top-0 -left-48 py-6 hidden lg:block bg-gradient-to-br ">
      <AnimatedCircle/>
    </div>
    
    <div className="crlces absolute top-0 -right-48 py-6 hidden lg:block bg-gradient-to-br ">
      <AnimatedCircle/>
    </div>

      <div className="mar-container pt-24 pb-24 relative">
        <Marquee
          gradient
          gradientColor="#31b8ea30"
          pauseOnHover={true}
          speed={190}
        >
          {/* card-1*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#0e7566",
                "#262c33",
                "#b116e0",
                "#101203",
                "#1c073a",
                "#163349",
                "#59113e",
                "#0e7566",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                It's intuitive, responsive, and has streamlined our workflow. We especially appreciate the clear organization of information and the powerful search functionality
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img1}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  Anna Schmidt
                </h2>
                <h5 className="text-white md:text-xl">Professor</h5>
                <h5 className="text-white md:text-xl">Munich Technical University</h5>
              </div>
            </div>
          </motion.div>{" "}
          {/* card-2*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#1f092b",
                "#262c33",
                "#6d2699",
                "#101203",
                "#59113e",
                "#b116e0",
                "#163349",
                "#1c073a",
                "#aa0ae4",
                "#1f092b",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                The library is a great resource for our community. It provides access to a wide range of materials and services.It's user-friendly and efficient for daily operations.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img2}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  Giovanni Bianchi
                </h2>
                <h5 className="text-white md:text-xl">Student</h5>
                <h5 className="text-white md:text-xl">Universidad de Buenos Aires</h5>
              </div>
            </div>
          </motion.div>{" "}
          {/* card-3*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#2e1a29",
                "#0e7566",
                "#101203",
                "#b116e0",
                "#1c073a",
                "#262c33",
                "#6c1681",
                "#59113e",
                "#e32971",
                "#2e1a29",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                The library's system makes it easy to manage my loans and access my account online.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img3}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  Pavel Novak
                </h2>
                <h5 className="text-white md:text-xl">Professor</h5>
                <h5 className="text-white md:text-xl">Melbourne University</h5>
              </div>
            </div>
          </motion.div>{" "}
          {/* card-4*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#120d03",
                "#101203",
                "#878787",
                "#b116e0",
                "#1c073a",
                "#262c33",
                "#163349",
                "#59113e",
                "#441539",
                "#120d03",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                The customer service has been fantastic. Any questions we have are answered quickly and thoroughly.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img4}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  William Harris
                </h2>
                <h5 className="text-white md:text-xl">Library IT Specialist</h5>
                <h5 className="text-white md:text-xl">Buenos Aires City Library</h5>
              </div>
            </div>
          </motion.div>{" "}
          {/* card-5*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#6050fd",
                "#b116e0",
                "#1c073a",
                "#101203",
                "#ca4505",
                "#59113e",
                "#439934",
                "#163349",
                "#bc22d6",
                "#6050fd",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                Since using LibraryCloud, we've saved a significant amount of time managing our library resources. It's made our daily tasks much more efficient.
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img5}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  James Whitman
                </h2>
                <h5 className="text-white md:text-xl">Library Operations Manager</h5>
                <h5 className="text-white md:text-xl">Lisbon Central Library</h5>
              </div>
            </div>
          </motion.div>          
          {/* card-6*/}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0],
              backgroundColor: [
                "#b116e0",
                "#0e7566",
                "#262c33",
                "#101203",
                "#59113e",
                "#ffc100",
                "#1c073a",
                "#0e7566",
                "#163349",
                "#b116e0",
              ],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="my-12 lg:my-24 w-[350px] h-[400px]  md:w-[500px] mx-6 p-6  rounded-2xl shadow-2xl relative "
          >
            <div className="text-8xl font-bold text-white">❝</div>
            <div className="content">
              <p className="text-pink-200 md:text-xl md:py-2 py-3">
                The system is very flexible and allows us to grow and expand our collection as needed. The support team is always helpful and responsive to our questions
              </p>
            </div>
            <div className="im flex items-center justify-center gap-6 lg:gap-12">
              <img
                className="md:w-22 md:h-22 w-14 h-14 rounded-full"
                src={img6}
                alt=""
              />

              <div className="info py-6">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  Robert Mathews
                </h2>
                <h5 className="text-white md:text-xl">Asst.Professior</h5>
                <h5 className="text-white md:text-xl">Westbridge University</h5>
              </div>
            </div>
          </motion.div>
        </Marquee>
      </div>

      
    </div>
  );
};

export default Testimonial;
