import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <NavLink to="/home"><span className=" md:text-3xl">Home</span></NavLink>
        </div>
    );
};

export default Header;