import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="bg-blue-400 py-3">
            <div>
                <NavLink to="/home"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Home</span></NavLink>
                <NavLink to="/consultants"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Consultants</span></NavLink>
                <NavLink to="/technology"><span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">Technology</span></NavLink>
            </div>

            {/* Login Register buttons */}
            {   !user.email ?
                <div className="md:mt-4 sm:mt-1 text-right md:mb-4">
                    <Link to="/login">
                        <span className="md:text-3xl font-bold text-green-600 hover:text-white md:mr-6 sm:mr-2 hover:bg-green-500 md:p-2 sm:p-1 rounded-lg shadow-inner bg-green-100">Login</span>
                    </Link>

                    <Link to="/register">
                        <span className="md:text-3xl font-bold text-green-600 hover:text-white md:mr-6 sm:mr-2 hover:bg-green-500 md:p-2 sm:p-1 rounded-lg shadow-inner bg-green-100">Register</span>
                    </Link>
                </div>
                :
                <div className="md:mt-4 sm:mt-1 text-right md:mb-4">
                    <span className="md:text-3xl font-bold text-white md:mr-6 sm:mr-2 hover:bg-blue-500 p-1 rounded-lg">{user.displayName}</span>
                    <button onClick={logout} className="md:text-3xl font-bold text-green-600 hover:text-white md:mr-6 sm:mr-2 hover:bg-green-500 md:p-2 sm:p-1 rounded-lg shadow-inner bg-green-100">Log Out</button>
                </div>
            }
        </div>
    );
};

export default Header;