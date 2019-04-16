import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from '../../components/NavBar/index';
import generateuuid from 'uuid';

import './styles.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    const resumeLink = props => <Link to="/resume" {...props} />

    return (
      [
        <NavBar key={generateuuid()} />,
        <div key={generateuuid()} className="Home">
          <p>Hi there!</p>
          <p>I am a recent graduate from Queen's University with a B.A Honours in Computing and Creative Arts Specialization.
            I have work experience as a Jr. Graphic Designer and front-end developer. 
            One of the most important motivators is the type of work I will be doing. 
            I want to be doing meaningful work that makes a difference for the company and its customers.</p>
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
            <Button
              variant="outlined"
              href="https://dribbble.com/shirley_x"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              Dribbble
            </Button>
        </div>
      ]
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
