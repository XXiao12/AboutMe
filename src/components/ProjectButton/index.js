import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const ProjectButton = (props = {}) => {
    const {
        link = "/404",
        name,
        descriptionTag,
        company = null,
    } = props;

    return (
        <div className="project">
            <Link className="links--themeblack" to={link}>
                <div className="project__button">
                    <span id="project__img" />
                    <div>
                        <h3 className="project__buttontitle">{name}</h3>
                        <p className="project__buttonlocation">{company}</p>
                    </div>
                </div>
            </Link>
        </div >
    );
};

ProjectButton.propTypes = {};

export default ProjectButton;