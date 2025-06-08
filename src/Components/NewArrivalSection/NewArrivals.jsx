import React from 'react';
import NewArrivalCarousel from './NewArrivalCarousel';


const NewArrivals = () => {
    return (
        <div className='py-24 container mx-auto'>
            <h1 className='text-5xl font-bold text-blue-700 text-center pt-12'>New Arrivals</h1>
            <h5 className='text-2xl font-semibold text-black text-center py-3'>Check out the newest books just added to our library!</h5>

            <div className="carousel border">
                <NewArrivalCarousel/>
            </div>
        </div>
    );
};

export default NewArrivals;