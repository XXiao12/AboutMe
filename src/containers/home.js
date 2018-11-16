import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import './about.css';

class Home extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="Home">
        <p>Shirley Xiao</p>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Home);
