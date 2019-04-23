import React from 'react';
// import PropTypes from 'prop-types';
import NavBar from '../NavBar';

import './styles.css';

const WrapperComponent = (props = {}) => {
    const {
        children
    } = props;

    return (
        <div className="wrapper">
            <NavBar />
            {children}
        </div >
    );
};

WrapperComponent.propTypes = {};

export default WrapperComponent;