import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Details = () => {
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    useEffect(() => {
        fetch('../Services.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    const { serviceKey } = useParams();

    useEffect(() => {
        const serviceDetails = details.find(element => element.key === parseInt(serviceKey));
        console.log(serviceDetails)
        setSingleDetails(serviceDetails);
    }, [details]);


    return (
        <div>
            <Header></Header>
            <div className="flex justify-center my-6 w-3/6 mx-auto">
                <img src={singleDetails?.image} alt="" />
            </div>
            <h2 className="md:text-6xl sm:text-2xl font-bold text-yellow-700 md:p-5 sm:p-1 ">{singleDetails?.name}</h2>
            <p>{singleDetails?.shortDetails}</p>
            <Footer></Footer>
        </div>
    );
};

export default Details;