import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="md:h-96 banner my-4 md:mx-10 md:rounded-lg text-left md:p-6">
            <div className="bg-blue-200 md:bg-opacity-50 sm:bg-opacity-75 rounded-lg">
                <h1 className="md:text-6xl sm:text-3xl font-bold text-yellow-700 p-5 ">Looking for a reliable Hospital ? </h1>
                <h2 className="md:text-4xl sm:text-xl font-bold text-pink-700 p-5 ">Visit our website and see the facilities and choose what is best</h2>
            </div>
            <div className="sm:hidden md:block text-xl bg-indigo-500 bg-opacity-70 rounded-md text-pink-800 font-bold my-6 w-3/6 mx-auto">
                <ul className="list-disc ml-6">
                    <li>Best doctors from all over the worlds</li>
                    <li>Best technologies implemented</li>
                    <li>Best Environment for patient to heal</li>
                    <li>Best Facilities given throughout the year</li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;