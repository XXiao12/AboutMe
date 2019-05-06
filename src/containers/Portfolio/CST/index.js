import React from 'react';
import ProjectWrapper from '../../../components/ProjectWrapper';
import plan1 from '../../../img/CST/IMG_2549.jpg';
import plan2 from '../../../img/CST/IMG_2550.jpg';
import plan3 from '../../../img/CST/IMG_2551.jpg';
import plan4 from '../../../img/CST/IMG_2552.jpg';
import plan5 from '../../../img/CST/IMG_2553.jpg';
import logo from '../../../img/CST/logo.jpg';
import posterO from '../../../img/CST/posterO.png';
import posterN from '../../../img/CST/posterN.png';
import bannerO from '../../../img/CST/bannerO.jpg';
import bannerN from '../../../img/CST/bannerN.png';

import './styles.css';

const CST = (props = {}) => {
    return (
        <ProjectWrapper projectkey="CST">
            <h3>Planning</h3>
            <div>
                <p>Premiliniary note taking from meetings with the board and ensemble. I went every week to listen in to their discussions about the play to get ideas for the graphics/props I will need to design.</p>
                <div className="CST__images">
                    <img src={plan1} alt="plan1" width="100px" height="140px" />
                    <img src={plan2} alt="plan2" width="100px" height="140px" />
                    <img src={plan3} alt="plan3" width="100px" height="140px" />
                    <img src={plan4} alt="plan4" width="100px" height="140px" />
                    <img src={plan5} alt="plan5" width="100px" height="140px" />
                </div>
                <p>I try to create as many different types of compositions whether it be a poster or logo. I would then narrow it down to the top 3 or 4 composiitons I like the best. From there I will continue refining the top selections and prepare them to be presented to the rest of the board and ensemble.</p>
            </div>
            <div>
                <h3>Final Product</h3>
                <p>This is the final choice made by the theatre group.</p>
                <div className="CST__images">
                    <img src={logo} alt="logo" width="130px" height="100px" />
                    <img src={posterO} alt="old poster" width="100px" height="140px" />
                    <img src={bannerO} alt="old banner" width="350px" height="140px" />
                </div>
            </div>
            <div>
                <h3>Revisions</h3>
                <p>Looking back at the graphics created I was not happy with what I did and made some revisions to the poster and banner.</p>
                <div className="CST__images">
                    <img src={posterN} alt="new poster" width="100px" height="140px" />
                    <img src={bannerN} alt="new banner" width="350px" height="140px" />
                </div>
            </div>
        </ProjectWrapper>
    );
};

CST.propTypes = {};

export default CST;