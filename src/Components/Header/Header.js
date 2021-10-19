import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-blue-400 py-3">
            <div>
                <NavLink to="/home"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Home</span></NavLink>
                <NavLink to="/consultants"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Consultants</span></NavLink>
                <NavLink to="/technology"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Technology</span></NavLink>
                <NavLink to="/techno"><span className="sm:hidden md:inline md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Not found</span></NavLink>
            </div>

            {/* Login Register buttons */}
            <div className="md:mt-4 sm:mt-1 text-right md:mb-4">
                <Link to="/login">
                    <span className="md:text-3xl font-bold text-green-600 hover:text-white md:mr-6 sm:mr-2 hover:bg-green-500 md:p-2 sm:p-1 rounded-lg shadow-inner bg-green-100">Login</span>
                </Link>

                <Link to="/register">
                    <span className="md:text-3xl font-bold text-green-600 hover:text-white md:mr-6 sm:mr-2 hover:bg-green-500 md:p-2 sm:p-1 rounded-lg shadow-inner bg-green-100">Register</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;