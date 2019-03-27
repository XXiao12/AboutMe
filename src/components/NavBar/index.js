import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import githubMark from '../../img/GitHub-Mark/PNG/GitHubLight64px.png';
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
        {window.location.pathname === '/'
        ? <div className="navbar__contents" />
        : <div className="navbar__contents">
            <Link to="/home">
                <h2 className="link">Shirley Xiao</h2>
            </Link>
            <div className="navbar__contents__link">
                <Link className="link" to="/resume">
                    Resume
                </Link>
                <Link className="link" to="/home">
                    Design
                </Link>
                <Link className="link" to="/home">
                    Guestbook
                </Link>
                <a
                    href='https://github.com/XXiao12'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="navbar__socialbutton">
                        <img className="navbar__buttonicon" src={githubMark} alt="Github Logo" />
                    </button>
                </a>
            </div>
                <img className="navbar__menubutton" src={menuIcon} alt="Menu Icon" />
            </div>
        }
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;