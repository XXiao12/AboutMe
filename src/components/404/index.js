import React from 'react';
// import PropTypes from 'prop-types';
import WrapperComponent from '../Wrapper';

import './styles.css';

const Error = () => {
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
            </div>
        </WrapperComponent>
    );
};

Error.propTypes = {};

export default Error;