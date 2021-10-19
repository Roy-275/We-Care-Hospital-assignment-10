import React from 'react';

const About = () => {
    return (
        <div className="bg-green-300 my-6 bg-opacity-70">
            <h1 className="md:text-6xl sm:text-4xl font-bold text-yellow-700 md:p-5 sm:p-1 ">Info About Us</h1>
            <div className="md:grid grid-cols-2 gap-12">
                <div className="p-2">
                    <h1 className="md:text-4xl sm:text-3xl font-bold text-indigo-700 md:p-5 sm:p-1 ">Our History</h1>
                    <div className="bg-gray-200 rounded text-left p-1">
                        <p className="text-xl font-medium text-justify p-2">
                            The history of our emerging is so great. At first we care was only a volunteer organization which helped people from different area by giving them first aid and providing transportation to the nearest hospital. At that time our founder saw the suffering of people and decided to do something for them. He collected fund for a year to build this hospital. He could only afford to build a clinic at that time. After the completion his graduation when he joined WHO, then he saved so much money for this hospital. At last he could manage to build We Care Hospital. After that in 5 years we care spread through the country. There is now a we care hospital in every district of bangladesh.
                        </p>
                    </div>
                </div>
                <div className="p-2">
                    <h1 className="md:text-4xl sm:text-3xl font-bold text-indigo-700 md:p-5 sm:p-1 ">Our Vission</h1>
                    <div className="bg-gray-200 rounded text-left p-1">
                        <ul className="list-disc ml-6 text-xl font-medium">
                            <li>Eradicate deaths because of not getting proper treatment</li>
                            <li>Provide healtcare at the best way possible and provide all over the country</li>
                            <li>Researc for new ways of treatment and make a difference in recent time</li>
                            <li>Give service at the cheapest price all over the country and provide them to poor people for free</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;