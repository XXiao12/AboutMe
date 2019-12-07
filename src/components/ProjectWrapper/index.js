import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Wrapper from "../Wrapper";
import routeProjects from "./routeProjects";

import "./styles.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const ProjectWrapper = (props = {}) => {
  const { projectkey, children, backgroundSrc, bannerFontColor } = props;

  const project = _.chain(routeProjects)
    .reduce((acc, value, key) => (key === projectkey ? value : acc), {})
    .value();
    const leftLink = project.linkL === "" ? "links--disabled" : "";
    const rightLink = project.linkR === "" ? "links--disabled" : "";

  return (
    <Wrapper classname="projectwrapper">
      <div className={projectkey}>
        {backgroundSrc === "" ? null : (
          <div
            className={`projectwrapper__header${bannerFontColor}`}
            style={{
              background: `url(${backgroundSrc}) no-repeat`
            }}
          >
            <h1>{project.title}</h1>
            <p>{project.location}</p>
            <p>{project.timerange}</p>
          </div>
        )}
        <div className="projectwrapper__contents">{children}</div>
        <div className="projectwrapper__buttoncontainer">
          <Link
            className={`links--themeblack ${leftLink}`}
            to={project.linkL || "/404"}
          >
            {project.btntextL}
          </Link>
          <Link className="links--themeblack" to="/portfolio">
            Back to Portfolio
          </Link>
          <Link
            className={`links--themeblack ${rightLink}`}
            to={project.linkR || "/404"}
          >
            {project.btntextR}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

ProjectWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundSrc: PropTypes.string.isRequired,
  bannerFontColor: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectWrapper);
