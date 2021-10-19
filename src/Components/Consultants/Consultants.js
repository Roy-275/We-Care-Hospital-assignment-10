import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Image from '../Image/Image';

const Consultants = () => {
    const [consultants, setConsultants] = useState([]);

    useEffect(() => {
        fetch('./Consultants.JSON')
            .then(res => res.json())
            .then(data => setConsultants(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h1 className="md:text-6xl sm:text-2xl font-bold text-yellow-700 md:p-5 sm:p-1 ">See Some of Our Consultants</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 md:p-5">
                {
                    consultants.map(consultant => <Image key={consultant.key} url={consultant.img} caption={consultant.name}></Image>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Consultants;