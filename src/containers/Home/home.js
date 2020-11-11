import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProjectButton from "../../components/ProjectButton";
import WrapperComponent from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";
import preloadImg from "../../utils/preload";

import cstDisplayPic from "../../media/imgs/CST/cstDisplay.jpg";

import "./styles.css";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#d8d7d7",
    color: "black",
  },
  buttond: {
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#ffd6e8",
    color: "#da1460",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#ffe3ef",
    },
  },
  buttonp: {
    margin: theme.spacing.unit,
    fontSize: "12px",
    fontFamily: "helvetica",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "#4a9ff3",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#82c1ff",
    },
  },
  input: {
    display: "none",
  },
});

const Home = (props = {}) => {
  const { classes } = props;
  const Process = (props) => <Link to="/process" {...props} />;
  preloadImg([cstDisplayPic]);

  return (
    <WrapperComponent>
      <div className="home">
        <div className="home__container">
          <div className="recent__projects">
            <ProjectButton
              name="The King in Yellow"
              descriptionTag="CST"
              imgSrc={cstDisplayPic}
              company="Colliding Scope Theatre"
              link="/colliding_scopes_theatre"
            />
            <ProjectButton
              name="unitConverter"
              descriptionTag="unitConverter"
              company="Unit Converter"
              link="/unit_converter"
            />
            {/* <ProjectButton
              name="myPlants"
              descriptionTag="myPlants"
              company="MyPlants (archived)"
              link="/my_plants"
            /> */}
          </div>
          <div className="home__container--content">
            <div className="home__private home--buttons">
              <span className="color">
                <FontAwesomeIcon icon={faGithub} /> Github
              </span>
              <div>
                <p>
                  Projects and assignments I have worked on through university,
                  for fun, and interview tasks.
                </p>
                <Button
                  href="https://github.com/XXiao12"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={classes.buttonp}
                >
                  Shirley's Github
                </Button>
              </div>
            </div>
            <div className="home__dribbble home--buttons">
              <span className="color">
                <FontAwesomeIcon icon={faDribbble} /> <b>Dribbble</b>
              </span>
              <div>
                <p>
                  UI challenges from a website called{" "}
                  <a id="link" href="https://www.dailyui.co/">
                    {" "}
                    Daily UI
                  </a>
                  . I try to complete some in my spare time.
                </p>
                <Button
                  href="https://dribbble.com/shirley_x"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={classes.buttond}
                >
                  See Dribbble work
                </Button>
              </div>
            </div>
            <div className="home__old home--buttons">
              <span className="color">
                <FontAwesomeIcon icon={faClock} /> <b>Old Work</b>
              </span>
              <div>
                <p>
                  Art done in my spare time, design projects/assignments, jobs,
                  and from school club activities. The works were completed from
                  highschool and throughout my time in university.
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
