import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileNav from '../MobileNav';
import NavBar from '../NavBar';

import './styles.css';

class WrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: this.props.hidden ? this.props.hidden : true
        }
        this.onClickNav = this.onClickNav.bind(this);
    }

    onClickNav() {
        const { hidden } = this.state;
        if (hidden) {
            this.setState({ hidden: false });
        }
        else {
            this.setState({ hidden: true });
        }
    }

    render() {
        const { hidden } = this.state;
        const { children } = this.props;

        return (
            <div>
                <MobileNav
                    hidden={hidden}
                    onClick={this.onClickNav}
                />
                <div className="wrapper">
                    <NavBar onClick={this.onClickNav} />
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