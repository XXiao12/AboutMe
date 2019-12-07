import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const ProjectButton = (props = {}) => {
  const {
    link,
    // name,
    // descriptionTag,
    imgSrc,
    company
  } = props;

  return (
    <div className="project">
      <Link className="links--themeblack" to={link}>
        <div className="project__button">
          {imgSrc === "" ? (
            <div className="project__img">
              <FontAwesomeIcon icon={faImages} />
            </div>
          ) : (
            <img
              className="project__img"
              src={imgSrc}
              alt="project_displayPic"
              width="250px"
            />
          )}
          <div>
            <p className="project__buttonlocation">{company}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProjectButton.propTypes = {
  link: PropTypes.string,
  //   name: PropTypes.string,
  imgSrc: PropTypes.string,
  company: PropTypes.string
};

ProjectButton.defaultProps = {
  link: "/404",
  //   name: "",
  imgSrc: "",
  company: ""
};

export default ProjectButton;
