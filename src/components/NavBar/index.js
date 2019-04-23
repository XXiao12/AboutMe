import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__contents">
            <Link className="links--themeblack" to="/">
                <h1>Shirley Xiao</h1>
            </Link>
            <div className="navbar__links">
                <Link className="links--themeblack navbar__links--space" to="/">
                    Portfolio
                </Link>
                <Link className="links--themeblack navbar__links--space" to="/about">
                    About
                </Link>
            </div>
                <img className="navbar__button" src={menuIcon} alt="Menu Icon" />
            </div>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;