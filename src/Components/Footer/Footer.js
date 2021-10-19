import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.ico';

const Footer = () => {
    return (
        <div className="bg-purple-800 text-blue-200 mt-6 grid md:grid-cols-3 md:gap-4 sm:gap-2 p-6 mb-4">

            {/* first column */}
            <div className="flex md:justify-around sm:justify-between items-center">
                <div className="flex justify-around items-center">
                    <img className="md:h-36 sm:h-24" src={logo} alt="" />
                </div>
                <div>
                    <h3 className="md:text-3xl sm:text-lg font-bold">We care hospital</h3>
                    <h5 className="md:text-lg sm:text-sm">Health care made easy</h5>
                    <h5 className="md:text-lg sm:text-sm text-white">Call Us: <a href="tel:123-456-7890">123-456-7890</a></h5>
                    <h5 className="md:text-lg sm:text-sm text-white">Email Us: <a href="mailto:wecareh@gov.bd">wecareh@gov.bd</a></h5>
                </div>
            </div>

            {/* 2nd column  */}
            <div className="flex justify-around items-center">
                <p className="md:text-xl sm:text-base font-thin text-yellow-200">
                    This website is for information purpose and not intended as medical advice or a substitude of a consultation with a professional healthcare provider. If there is any kind of emergency please contact with our proffessional doctors.
                </p>
            </div>

            {/* third column  */}
            <div className="flex justify-around">
                <div className="text-left">
                    <h2 className="md:text-2xl sm:text-base font-bold sm:mt-4 md:mt-0">Quick Links</h2>
                    <div className="font-medium mt-4">
                        <Link to="/home">Home</Link> <br />
                        <Link to="/consultants">Consultants</Link> <br />
                        <Link to="/technology">Technology</Link> <br />
                        <Link to="/home">Services</Link> <br />
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="md:text-2xl sm:text-base font-bold sm:mt-4 md:mt-0">Social Media</h2>
                    <div className="font-medium mt-4">
                        <Link to="/home">Facebook</Link> <br />
                        <Link to="/consultants">Twitter</Link> <br />
                        <Link to="/technology">Research Gate</Link> <br />
                        <Link to="/home">LinkedIn</Link> <br />
                    </div>
                </div>
            </div>
            <p><small>&copy; All right reserved by <i>Anik Roy</i></small></p>
        </div>
    );
};

export default Footer;