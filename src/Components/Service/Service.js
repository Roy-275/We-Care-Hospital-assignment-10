import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, shortDetails, key } = props.service;
    return (
        <div className="my-6 md:flex md:p-5 justify-between md:justify-evenly items-center text-left">
            <div className="sm:w-2/3 md:w-1/3 mx-5">
                <img src={image} alt="" />
            </div>
            <div className="md:w-1/3 md:mx-5 text-justify py-5">
                <h1 className="md:text-4xl sm:text-xl font-bold text-pink-800 sm:p-2 ">{name}</h1>
                <p className="p-2">
                    {shortDetails}
                </p>
                <Link to={`/services/${key}`}>
                    <button className="border-2 mx-2 p-2 rounded-lg bg-yellow-500 text-red-700 font-bold text-base">Book {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;