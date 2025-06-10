import React from 'react';
import NewArrivalCarousel from './NewArrivalCarousel';


const NewArrivals = () => {
    return (
        <div className='py-12 lg:py-24 container mx-auto'>
            <h1 className='text-6xl font-bold text-[#1F2937] text-center py-6'>New Arrivals</h1>
            <h5 className='text-2xl font-semibold text-black text-center py-3'>Check out the newest books just added to our library!</h5>

            <div className="carousel py-24 bg-green-500">
                <NewArrivalCarousel/>
            </div>
        </div>
    );
};

export default NewArrivals;