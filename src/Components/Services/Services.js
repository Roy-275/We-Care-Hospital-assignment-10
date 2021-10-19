import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="bg-purple-200 my-5">
            <h1 className="md:text-6xl sm:text-2xl font-bold text-yellow-700 md:p-5 sm:p-1 ">Our services</h1>
            <div>
                {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;