import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileNav from '../MobileNav';
import NavBar from '../NavBar';

import './styles.css';

class WrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            hidden: this.props.hidden ? this.props.hidden : true
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { hidden } = this.state;
        if (hidden) {
            this.setState({ hidden: false });
        }
        else {
            this.setState({ hidden: true });
        }
    }

    render() {
        const { children, hidden } = this.state;

        return (
            <div>
                <MobileNav 
                hidden={hidden}
                onClick={this.onClick} 
                />
                <div className="wrapper">
                    <NavBar onClick={this.onClick} />
                    {children}
                </div >
            </div>
        );
    };
}

WrapperComponent.propTypes = {
    hidden: PropTypes.bool,
    children: PropTypes.element,
    onClick: PropTypes.func
};

export default WrapperComponent;