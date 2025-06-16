/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "motion/react";
import circle from "../../assets/Circle/engine-circle.svg"
const AnimatedCircleii = () => {
    return (
        <div>
            <motion.img
            animate={{rotate:360}}
            className='w-[300px] '
            transition={{
                repeat:Infinity,
                ease:'linear',
                duration:10
            }}
            src={circle} alt="" />
            
        </div>
    );
};

export default AnimatedCircleii;