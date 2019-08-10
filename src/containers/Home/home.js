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
    position: 'absolute',
    bottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: theme.spacing.unit,
    fontSize: '12px',
    fontFamily: 'helvetica',
    textTransform: 'none',
    fontWeight: 600,
    backgroundColor: 'white',
    color: '#6b0707'
  },
  buttond: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    bottom: 10,
    margin: theme.spacing.unit,
    fontSize: '12px',
    fontFamily: 'helvetica',
    textTransform: 'none',
    fontWeight: 600,
    backgroundColor: 'white',
    color: '#ea4c89'
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
          <div className="home__container">
            <div className="home__container--content">
              <p className="home__old"><span className="color"><FontAwesomeIcon icon={faClock} /> <b>Old Work</b></span>Art done in my spare time, design projects/assignments, jobs, and from school club activities. The works were completed from highschool and throughout my time in university.
              <Button
                  href="https://shirley.portfoliobox.net/graphicdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={classes.button}>
                  See old work
                </Button></p>
              <p className="home__dribbble"><span className="color"><FontAwesomeIcon icon={faDribbble} /> <b>Dribbble</b></span><span>UI challenges from a website called <a id="link" href="https://www.dailyui.co/"> Daily UI</a>. I try to complete some in my spare time.</span>
                <Button
                  href="https://dribbble.com/shirley_x"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={classes.buttond}>
                  See Dribbble work
            </Button></p>
              <p className="home__private"><span className="color"><FontAwesomeIcon icon={faUserShield} /> Private Projects</span>There are 2 ongoing projects that are not allowed to be displayed on the internet. I would gladly show these projects in an in-person meeting or interview.</p>
            </div>
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
