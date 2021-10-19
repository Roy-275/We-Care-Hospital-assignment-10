import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Image from '../Image/Image';

const Technology = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        fetch('./Technology.JSON')
            .then(res => res.json())
            .then(data => setTechnologies(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="md:text-6xl sm:text-2xl font-bold text-yellow-700 md:p-5 sm:p-1 ">See Some of Technology</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 md:p-5">
                {
                    technologies.map(technologie => <Image key={technologie.key} url={technologie.img} caption={technologie.name}></Image>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Technology;