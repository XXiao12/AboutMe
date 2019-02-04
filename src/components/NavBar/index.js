import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import githubMark from '../../img/GitHub-Mark/PNG/GitHubLight64px.png';
import menuIcon from '../../img/menu/hamburger2x.png';

import './styles.css';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const NavBar = (props = {}) => {
    const {
        classes
    } = props;

    return (
        <div className="navbar">
            <button className="navbar__menubutton">
                <img className="navbar__menubutton__icon" src={menuIcon} alt="Menu Icon" />
            </button>
            <div className="navbar__contents">
                <p>Shirley Xiao</p>
                <p>Resume</p>
                <p>Design</p>
                <p>Guestbook</p>
                <IconButton
                    target="_blank"
                    href="https://github.com/XXiao12"
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                    <img className="githubLogo" src={githubMark} alt="Github Logo" />
                </IconButton>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);