import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Typed from 'typed.js';
import generateuuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import logo from '../../img/React/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './splash.css';

const styles = theme => ({
  enterButton: {
    backgroundColor: '#0080ff',
    color: 'white',
    border: 'none',
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Splash extends Component {
  render() {
    const { classes } = this.props;
    const homeLink = props => <Link to="/portfolio" {...props} />

    return (
      <div key={generateuuid()} className="Splash">
        <div className="Splash-overlay" />
        <div className="Splash-header">
          <div className="header">
            <h1>Shirley Xiao</h1>
          </div>
          <div className="content">
            <p>UI/UX Designer & Developer </p>
            <p>Everything starts with a story.</p>
            <Button
              variant="outlined"
              component={homeLink}
              color="primary"
              className={classes.enterButton}>
              Enter Site
            </Button>
          </div>
        </div>
        <div className="Splash-footer">
          <div className="socialMedia">
            <IconButton
              variant="outlined"
              href="https://github.com/XXiao12"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton
              variant="outlined"
              href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit" className={classes.button}>
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
              variant="outlined"
              href="https://dribbble.com/shirley_x"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              <FontAwesomeIcon icon={faDribbble} />
            </IconButton>
          </div>
          <p>
            Created with &nbsp;
            <a
              className="Splash-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            > React </a>
            <img src={logo} className="Splash-logo" alt="logo" />
          </p>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
