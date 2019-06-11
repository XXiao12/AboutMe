import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileNav from '../MobileNav';
import NavBar from '../NavBar';
import Modal from '..//Modal/index';

import './styles.css';

class WrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideNav: this.props.hideNav ? this.props.hideNav : true,
            hideModal: this.props.hideModal ? this.props.hideModal : true,
            modalMessage: "",
            modalName: "",
            mail: {
                success: "Email Successfully Sent!",
                fail: "Oh no! The email has could not be sent.",
            }
        };
        this.onCloseNav = this.onCloseNav.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.updateAndNotify = this.updateAndNotify.bind(this);
    }

    onCloseModal() {
        const { hideModal } = this.state;
        if (hideModal) {
            this.setState({ hideModal: false });
        }
        else {
            this.setState({ hideModal: true });
        }
    }

    onCloseNav() {
        const { hideNav } = this.state;
        if (hideNav) {
            this.setState({ hideNav: false });
        }
        else {
            this.setState({ hideNav: true });
        }
    }

    updateAndNotify() {
        const {
            mail,
        } = this.state;
        const {
            mailSent,
            mailSentError
        } = this.props;

        if (mailSent) {
            this.setState({
                hideModal: false,
                modalMessage: mail.success,
                modalName: "Success"
            });

            setTimeout(() => {
                this.setState({
                    hideModal: true
                });
            }, 5000);
        } else if (mailSentError) {
            this.setState({
                hideModal: false,
                modalMessage: mail.success,
                modalName: "Failed"
            });
            setTimeout(() => {
                this.setState({
                    hideModal: true
                });
            }, 5000);
        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps != this.props) {
            this.updateAndNotify()
        }
    }

    render() {
        const {
            hideNav,
            hideModal,
            // modalName,
            modalMessage,
            mail
        } = this.state;
        const { children } = this.props;
        console.log('render this.state: ', this.state);

        return (
            <div>
                <Modal
                    message={modalMessage}
                    onClose={this.onCloseModal}
                    hidden={hideModal}
                />
                <MobileNav
                    hidden={hideNav}
                    onClick={this.onCloseNav}
                />
                <div className="wrapper">
                    <NavBar onClick={this.onCloseNav} />
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