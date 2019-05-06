import React from 'react';
// import PropTypes from 'prop-types';
import plan1 from '../../../src/img/CST/IMG_2549.jpg';
// import plan2 from '../../../src/img/CST/IMG_2550.jpg';
// import plan3 from '../../../src/img/CST/IMG_2551.jpg';
// import plan4 from '../../../src/img/CST/IMG_2552.jpg';
// import plan5 from '../../../src/img/CST/IMG_2553.jpg';

import './styles.css';

class PhotoComponent extends React.Component {
    state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('cliked');
    };
  
    render() {
      return (
        <div>
          <img
            className="small"
            src={plan1}
            onClick={this.handleShowDialog}
            alt="portfolio"
            width="100px"
            height="140px"
          />
          {this.state.isOpen && (
            <dialog
              className="dialog"
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image"
                src={plan1}
                onClick={this.handleShowDialog}
                alt="portfolio"
                width="600px"
                height="640px"
              />
            </dialog>
          )}
        </div>
      );
    }
  }

  PhotoComponent.propTypes = {};

export default PhotoComponent;