import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
import generateuuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from '../../components/NavBar/index';
import ProjectButton from '../../components/ProjectButton';

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
    console.log('classes: ', classes.button);

    return (
      [
        <NavBar key={generateuuid()} />,
        <div
          key={generateuuid()}
          className="home"
        >
          <div className="home__banner"/>
          <ProjectButton
            name="ENIN 240 - 
            Explorations in Creativity"
            descriptionTag="creativity"
            location="Queen's University"
          />
          <ProjectButton
            name="ENIN 140 - Design Thinking"
            descriptionTag="design_thinking"
            location="Queen's University"
          />
           <ProjectButton
            name="Living in Technicolour"
            descriptionTag="LIT"
            location="Queen's University"
          />
          <ProjectButton
            name="Colliding Scopes Theatre"
            descriptionTag="CST"
            location="Queen's University"
          />

          <h2>Other works</h2>
          <div>
            <Button
              variant="outlined"
              href="https://dribbble.com/shirley_x"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              Photography
            </Button>
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              Development
            </Button>
          </div>
        </div >
      ]
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
