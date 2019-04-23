import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WrapperComponent from '../Wrapper';

import './styles.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const Error = (props = {}) => {
    const {
        classes
    } = props;

    return (
        <WrapperComponent>
            <div className="error">
                <div className="error--container">
                    <h2>404</h2>
                    <div>
                        <p>Oh no! </p>
                        <p>The page you are looking for does not exist.</p>
                    </div>
                </div>
                <div className="error--container error--buttons">
                    <Button
                        variant="outlined"
                        href="https://dribbble.com/shirley_x"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        className={classes.button}>
                        go back
                    </Button>
                    <Button
                        variant="outlined"
                        href="https://dribbble.com/shirley_x"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        className={classes.button}>
                        portfolio
                        </Button>
                    <Button
                        variant="outlined"
                        href="https://dribbble.com/shirley_x"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        className={classes.button}>
                        about
                    </Button>
                </div>
            </div>
        </WrapperComponent>
    );
};

Error.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Error);