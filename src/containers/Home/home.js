import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProjectButton from "../../components/ProjectButton";
import WrapperComponent from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

import cstDisplayPic from "../../img/CST/cstDisplay.jpg";

import "./styles.css";

const styles = theme => ({
  button: {
    position: "absolute",
    bottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#d8d7d7",
    color: "black"
  },
  buttond: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    bottom: 10,
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#ffd6e8",
    color: "#da1460",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#ffe3ef"
    }
  },
  buttonp: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    bottom: 10,
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#4a9ff3",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#82c1ff"
    }
  },
  input: {
    display: "none"
  }
});

function Home(props = {}) {
  useEffect(() => {
    new Image().src = cstDisplayPic;
  }, []);
  const { classes } = props;
  const Process = props => <Link to="/process" {...props} />;

  return (
    <WrapperComponent>
      <div className="home">
        <div className="home__container">
          <div className="recent__projects">
            {/* <h1>Recent Works</h1> */}
            <ProjectButton
              name="The King in Yellow"
              descriptionTag="CST"
              imgSrc={cstDisplayPic}
              company="Colliding Scope Theatre"
              link="/colliding_scopes_theatre"
            />
          </div>
          <div className="home__container--content">
            <p className="home__private">
              <span className="color">
                <FontAwesomeIcon icon={faUserShield} /> Private Projects
              </span>
              There are ongoing projects that are not allowed to be displayed on
              the internet. I would gladly show these projects in an in-person
              meeting or interview.
              <Button
                component={Process}
                rel="noopener noreferrer"
                color="inherit"
                className={classes.buttonp}
              >
                See design process
              </Button>
            </p>
            <p className="home__dribbble">
              <span className="color">
                <FontAwesomeIcon icon={faDribbble} /> <b>Dribbble</b>
              </span>
              <span>
                UI challenges from a website called{" "}
                <a id="link" href="https://www.dailyui.co/">
                  {" "}
                  Daily UI
                </a>
                . I try to complete some in my spare time.
              </span>
              <Button
                href="https://dribbble.com/shirley_x"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.buttond}
              >
                See Dribbble work
              </Button>
            </p>
            <p className="home__old">
              <span className="color">
                <FontAwesomeIcon icon={faClock} /> <b>Old Work</b>
              </span>
              Art done in my spare time, design projects/assignments, jobs, and
              from school club activities. The works were completed from
              highschool and throughout my time in university.
              <Button
                varient="contained"
                href="https://shirley.portfoliobox.net/graphicdesign"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.button}
              >
                See old work
              </Button>
            </p>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
