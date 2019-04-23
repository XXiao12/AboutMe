import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WrapperComponent from '../../components/Wrapper';

import './styles.css';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
     <WrapperComponent>
        <div className="about">
          <div className="about--container">
            <div className="about--content">
              <div>
                <p>Hi there!</p>
                <p>I am a recent graduate from Queen's University with a B.A Honours in the Computing and Creative Arts Specialization. I have experience as a graphic designer and front-end developer.
                </p>
              </div>
            </div>

            <h2>What I am up to and my future plans</h2>
            <ul>
              <li>seeking a full-time job as a front end developer or as a ui/ux designer</li>
              <li>continue to update and find ways to improve this portfolio site</li>
              <li>continue to take courses with IDF (Interactive Design Foundation)</li>
              <li>working to gather people to create a "company" to solve solutions we would like to tackle</li>
            </ul>

            <p>Feel free to contact me at: 647 909 3876 or shirley.xiao1996@gmail.com</p>
          </div>
          <div className="about--links">
            <div className="about--header">
              <h2>You can also find me on</h2>
            </div>
            <div className="about--buttons">
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
          </div>
        </div>
      </WrapperComponent>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
