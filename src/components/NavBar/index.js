import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = (props = {}) => {
    const {
        onClick
    } = props;

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
                <button className="navbar__button" onClick={onClick} >
                    <img src={menuIcon} alt="Menu Icon" />
                </button>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    onClick: PropTypes.func
};

export default NavBar;