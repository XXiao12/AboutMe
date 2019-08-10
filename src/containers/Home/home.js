import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProjectButton from '../../components/ProjectButton';
import WrapperComponent from '../../components/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

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
            <p className="home__old"><span><FontAwesomeIcon icon={faClock} /> <b>Old Work</b></span><br />Art done in my spare time, design projects/assignments, jobs, and from school club activities. The works were completed from highschool and throughout my time in university.</p>
            <p className="home__dribbble"><span><FontAwesomeIcon icon={faDribbble} /> <b>Dribbble</b></span><br />UI challenges from a website called <a href="https://www.dailyui.co/"> Daily UI</a>. I try to complete some in my spare time.</p>
            <p className="home__private"><span><FontAwesomeIcon icon={faUserShield} /> Private Projects</span><br />There are 2 ongoing projects that are not allowed to be displayed on the internet. I would gladly show these projects in an in-person meeting or interview.</p>
          </div>
          <div className="home__button">
            <Button
              variant="outlined"
              href="https://shirley.portfoliobox.net/graphicdesign"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.button}>
              Old Work
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
