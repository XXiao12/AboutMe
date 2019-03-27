import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Typed from 'typed.js';
import generateuuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import logo from '../../img/React/logo.svg';
import './splash.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Splash extends Component {
  // componentDidMount() {
  //   const options = {
  //     strings: ["my name is Shirley Xiao", "if you have come to learn more about me", "you have arrived at the correct url"],
  //     typeSpeed: 40,
  //     backSpeed: 40
  //   }
    
  //   this.typed = new Typed(this.el, options);
  // }
  render() {
    const { classes } = this.props;
    const homeLink = props => <Link to="/home" {...props} />

    return (
      <div key={generateuuid()} className="Splash">
        <div className="Splash-overlay" />
        <div className="Splash-header">
          <div className="content">
          <p>Shirley Xiao</p>
          <div className="nav">
            <Button
              variant="outlined"
              href="https://github.com/XXiao12"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              Github
            </Button>
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit" className={classes.button}>
              LinkedIn
            </Button>
            <Button variant="outlined" component={homeLink} color="primary" className={classes.button}>
              Enter Site
            </Button>
          </div>
            {/* <div className="type-wrap">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
              />
            </div> */}
          </div>
        </div>
        <div className="Splash-footer">
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
