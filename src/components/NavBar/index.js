import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__contents">
            <Link to="/">
                <h1 className="link">Shirley Xiao</h1>
            </Link>
            <div className="navbar__contents__link">
                <Link className="link" to="/portfolio">
                    Portfolio
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
            </div>
                <img className="navbar__menubutton" src={menuIcon} alt="Menu Icon" />
            </div>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;