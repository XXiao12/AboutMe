import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import descriptions from './descriptions';

import './styles.css';

const ProjectButton = (props = {}) => {
    const {
        link = "/404",
        name,
        descriptionTag,
        location = null,
    } = props;

    return (
        <div className="project">
            <Link to={link}>
                <div className="project--button">
                    <div>
                        <h3 className="project--button-title">{name}</h3>
                        <p className="project--button-location">{location}</p>
                    </div>
                    <p className="project--button-description">{descriptions[descriptionTag]}</p>
                </div>
            </Link>
        </div >
    );
};

ProjectButton.propTypes = {};

export default ProjectButton;