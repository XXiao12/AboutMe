import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProjectButton from '../../components/ProjectButton';
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

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <WrapperComponent>
        <div className="home">
          <div>
            <Button
              variant="outlined"
              href="https://shirley.portfoliobox.net/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              className={classes.button}>
              Old site
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
          <div className="projects">
            <ProjectButton
              name="Colliding Scopes Theatre"
              descriptionTag="CST"
              location="Queen's University"
              link="/colliding_scopes_theatre"
            />
          </div>
        </div >
      </WrapperComponent>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
