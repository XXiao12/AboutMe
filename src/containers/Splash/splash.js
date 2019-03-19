import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import generateuuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import logo from '../../img/React/logo.svg';
import NavBar from '../../components/NavBar/index';
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
  componentDidMount() {
    const options = {
      strings: ["My name is Shirley Xiao."],
      typeSpeed: 40,
      backSpeed: 40
    }
    
    this.typed = new Typed(this.el, options);
  }
  render() {
    const { classes } = this.props;
    const homeLink = props => <Link to="/home" {...props} />

    return (
      [
      <NavBar key={generateuuid()} />,
      <div key={generateuuid()} className="Splash">
        <div className="Splash-overlay" />
        <div className="Splash-header">
          <div className="content">
          <p>Welcome!</p>
            <div className="type-wrap">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
              />
            </div>
            <p id="info">Click enter to find out more about me.</p>
            <Button
              component={homeLink}
              variant="contained"
              color="primary"
              className={classes.button}>
              Enter
            </Button>
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
      ]
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
