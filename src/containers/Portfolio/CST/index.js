import React from 'react';
import ProjectWrapper from '../../../components/ProjectWrapper';
import Gallery from '../../../components/Gallery';
import plan1 from '../../../img/CST/IMG_2549.jpg';
import plan1S from '../../../img/CST/IMG_2549s.jpg';
import plan2 from '../../../img/CST/IMG_2550.jpg';
import plan2S from '../../../img/CST/IMG_2550s.jpg';
import plan3 from '../../../img/CST/IMG_2551.jpg';
import plan3S from '../../../img/CST/IMG_2551s.jpg';
import plan4 from '../../../img/CST/IMG_2552.jpg';
import plan4S from '../../../img/CST/IMG_2552s.jpg';
import plan5 from '../../../img/CST/IMG_2553.jpg';
import plan5S from '../../../img/CST/IMG_2553s.jpg';
import logo from '../../../img/CST/logo.jpg';
import logoS from '../../../img/CST/logos.jpg';
import posterO from '../../../img/CST/posterO.png';
import posterOS from '../../../img/CST/posterOs.png';
import posterN from '../../../img/CST/posterN.png';
import posterNS from '../../../img/CST/posterNs.png';
import bannerO from '../../../img/CST/bannerO.jpg';
import bannerOS from '../../../img/CST/bannerOs.jpg';
import bannerN from '../../../img/CST/bannerN.png';
import bannerNS from '../../../img/CST/bannerNs.png';

import './styles.css';

const CST = (props = {}) => {
    return (
        <ProjectWrapper projectkey="CST">
            <h3>Planning</h3>
            <div>
                <p>Premiliniary note taking from meetings with the board and ensemble. I went every week to listen in to their discussions about the play to get ideas for the graphics/props I will need to design.</p>
                <div className="CST__images">
                    <Gallery
                        images={[
                            {
                                src: plan1,
                                thumbnail: plan1S
                            },
                            {
                                src: plan2,
                                thumbnail: plan2S
                            },
                            {
                                src: plan3,
                                thumbnail: plan3S
                            },
                            {
                                src: plan4,
                                thumbnail: plan4S
                            },
                            {
                                src: plan5,
                                thumbnail: plan5S
                            },
                        ]}
                    />
                </div>
                <p>I try to create as many different types of compositions whether it be a poster or logo. I would then narrow it down to the top 3 or 4 composiitons I like the best. From there I will continue refining the top selections and prepare them to be presented to the rest of the board and ensemble.</p>
            </div>
            <div>
                <h3>Final Product</h3>
                <p>This is the final choice made by the theatre group.</p>
                <div className="CST__images">
                    <Gallery
                        images={[
                            {
                                src: logo,
                                thumbnail: logoS
                            },
                            {
                                src: posterO,
                                thumbnail: posterOS
                            },
                            {
                                src: bannerO,
                                thumbnail: bannerOS
                            }
                        ]}
                    />
                </div>
            </div>
            <div>
                <h3>Revisions</h3>
                <p>Looking back at the graphics created I was not happy with what I did and made some revisions to the poster and banner.</p>
                <div className="CST__images">
                <Gallery
                        images={[
                            {
                                src: posterN,
                                thumbnail: posterNS
                            },
                            {
                                src: bannerN,
                                thumbnail: bannerNS
                            }
                        ]}
                    />
                </div>
            </div>
        </ProjectWrapper>
    );
};

CST.propTypes = {};

export default CST;