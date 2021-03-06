import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/banner_error_404.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex flex-col mt-4">
                <img className="mb-6" src={notFound} alt="" />
                <Link to="/home"><span className="bg-blue-400 sm:p-2 md:p-4 rounded-3xl font-bold sm:text-xl md:text-3xl text-white">Go To Home</span></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;