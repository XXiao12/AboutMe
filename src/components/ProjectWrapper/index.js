import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Wrapper from '../Wrapper';
import routeProjects from './routeProjects';

import './styles.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const ProjectWrapper = (props = {}) => {
    const {
        projectkey,
        children
    } = props;

    const project = _.chain(routeProjects)
        .reduce((acc, value, key) => key === projectkey ? value : acc, {})
        .value();
    console.log('project: ', project);

    return (
        <Wrapper>
            <div className="projectwrapper">
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.location} | {project.timerange}</p>
                </div>

                {children}

                <div className="projectwrapper__buttoncontainer">
                    <Link
                        className="links--themeblack"
                        to={project.linkL}>
                        {project.btntextL}
                    </Link>
                    <Link
                        className="links--themeblack"
                        to="/portfolio">
                        Portfolio
                    </Link>
                    <Link
                        className="links--themeblack"
                        to={project.linkR}>
                        {project.btntextR}
                    </Link>
                </div>
            </div >
        </Wrapper>
    );
};

ProjectWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectWrapper);