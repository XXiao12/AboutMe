import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
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
            mail_notification: {
                success: "Email Successfully Sent!",
                fail: "Oh no! The email has could not be sent.",
                other: "",
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
            mail_notification,
        } = this.state;
        const {
            mailSent,
            mailSentError,
            notification
        } = this.props;
        if (notification !== '') {
            this.setState({
                hideModal: false,
                modalMessage: notification,
            });
            setTimeout(() => {
                this.setState({
                    hideModal: true,
                    modalMessage: ""
                });
            }, 5000);
        } else if (mailSent) {
            this.setState({
                hideModal: false,
                modalMessage: mail_notification.success,
            });

            setTimeout(() => {
                this.setState({
                    hideModal: true,
                    modalMessage: ""
                });
            }, 5000);
        } else if (mailSentError) {
            this.setState({
                hideModal: false,
                modalMessage: mail_notification.fail,
            });
            setTimeout(() => {
                this.setState({
                    hideModal: true,
                    modalMessage: ""
                });
            }, 5000);
        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            pathname
        } = this.props.location

        if (pathname === '/about' && (prevProps != this.props)) {
            this.updateAndNotify()
        }
    }

    render() {
        const {
            hideNav,
            hideModal,
            modalMessage
        } = this.state;
        const { children } = this.props;

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
    onClick: PropTypes.func,
    mailSent: PropTypes.bool,
    mailSentError: PropTypes.string,
    notification: PropTypes.string
};

export default withRouter(WrapperComponent);