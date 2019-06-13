import React from 'react';
// import PropTypes from 'prop-types';
import close from '../../img/menu/close.svg';

import './styles.css';

const Modal = (props = {}) => {
    const {
        message = "",
        onClose,
        hidden
    } = props;

    return hidden ? null :
        <div className="modal">
            <div className="paper">
                <div className="modal--header">
                    <p>{message}</p>
                    <button id="close" onClick={onClose}><img src={close} alt="close" /></button>
                </div>
            </div>
        </div>
    
};

Modal.propTypes = {};

export default Modal;