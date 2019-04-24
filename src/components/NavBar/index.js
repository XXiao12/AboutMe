import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__contents">
            <Link className="links--themeblack" to="/portfolio">
                <h1>Shirley Xiao</h1>
            </Link>
            <div className="navbar__links">
                <NavLink
                    activeClassName="active"
                    className="links--themeblack navbar__links--space"
                    to="/portfolio">
                    Portfolio
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="links--themeblack navbar__links--space"
                    to="/about">
                    About
                </NavLink>
            </div>
                <img className="navbar__button" src={menuIcon} alt="Menu Icon" />
            </div>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;