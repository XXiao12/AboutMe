import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar--contents">
            <Link to="/">
                <h1 className="navbar--links-themeblack">Shirley Xiao</h1>
            </Link>
            <div className="navbar--links">
                <Link className="navbar--links-themeblack" to="/">
                    Portfolio
                </Link>
                <Link className="navbar--links-themeblack" to="/about">
                    About
                </Link>
            </div>
                <img className="navbar--button" src={menuIcon} alt="Menu Icon" />
            </div>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;