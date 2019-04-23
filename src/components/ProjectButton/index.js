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
            <Link className="links--themeblack" to={link}>
                <div className="project__button">
                    <div>
                        <h3 className="project__buttontitle">{name}</h3>
                        <p className="project__buttonlocation">{location}</p>
                    </div>
                    <p className="project__buttondescription">{descriptions[descriptionTag]}</p>
                </div>
            </Link>
        </div >
    );
};

ProjectButton.propTypes = {};

export default ProjectButton;