import React from 'react';
import './Header.css';
import logo from './my-fitness-club.png' ;

const Header = () => {
    return (
        <div className='header'>
            <div className='company-logo'>
                <img src={logo} alt="no pic fount"/>
            </div>
            <div className='company-name'>
                My Fitness club
            </div>
        </div>
    );
};

export default Header;