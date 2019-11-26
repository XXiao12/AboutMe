import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import ProjectWrapper from "../../../components/ProjectWrapper";
import Gallery from "../../../components/Gallery";
import plan1 from "../../../img/CST/IMG_2549.jpg";
import plan2 from "../../../img/CST/IMG_2550.jpg";
import plan3 from "../../../img/CST/IMG_2551.jpg";
import plan4 from "../../../img/CST/IMG_2552.jpg";
import plan5 from "../../../img/CST/IMG_2553.jpg";
import logo from "../../../img/CST/logo.jpg";
import logo2 from "../../../img/CST/cstDisplay.jpg";
import posterO from "../../../img/CST/posterO.jpg";
import posterN from "../../../img/CST/posterN.png";
import bannerO from "../../../img/CST/bannerO.jpg";
import bannerN from "../../../img/CST/bannerN.png";
import banner from "../../../img/CST/bannerBlank.png";

import "./styles.css";

const CST = (props = {}) => {
  return (
    <ProjectWrapper
      projectkey="CST"
      backgroundSrc={banner}
      bannerFontColor="--white"
    >
      <div className="CST__summary">
        <div>
          <h3>Overview</h3>
          <p>
            Colliding Scopes Theatre is a student-run organization at Queen's
            University. Every year they create a team and a theme for what kind
            of play the theatre group would like to create. My year was a play
            based of works by H. P. Lovecraft. Everybody would read works by H.
            P. Lovecraft so people can get inspired for what role the are in for
            this play.
          </p>
        </div>
        <div>
          <h3>My Role</h3>
          <p>
            I was the graphic designer for the 2015-2016 school year. I help
            manage advertising and product designs. I also worked with the cast
            and members to create posters, tickets, banner, and props required
            for theatrical work.
          </p>
        </div>
      </div>
      <div className="CST__achievements">
        <div>
          <FontAwesomeIcon icon={faChartLine} />
          <p>
            The deliverables that circulated in the community resulted in a 10%
            increase in sales.
          </p>
        </div>
      </div>
      <div className="CST__contents">
        <div className="CST__contents--section">
          <div>
            <h3>Planning</h3>
            <p>
              Premiliniary note taking from meetings with the board and
              ensemble. I went every week to listen in to their discussions
              about the play to get ideas for the graphics/props I will need to
              design. I try to create as many different types of compositions
              whether it be a poster or logo. I would then narrow it down to the
              top 3 or 4 compositions I like the best. From there I will
              continue refining the top selections and prepare them to be
              presented to the rest of the board and ensemble.
            </p>
          </div>
          <div className="CST__images">
            <Gallery
              images={[
                {
                  src: plan1,
                  width: 3,
                  height: 4
                },
                {
                  src: plan2,
                  width: 3,
                  height: 4
                },
                {
                  src: plan3,
                  width: 3,
                  height: 4
                },
                {
                  src: plan4,
                  width: 3,
                  height: 4
                },
                {
                  src: plan5,
                  width: 3,
                  height: 4
                }
              ]}
            />
          </div>
        </div>
        <div className="CST__contents--section">
          <h3>Final Product</h3>
          <p>
            This is the final group of deliverables made by the theatre group.
            There are others but mostly variations of the banner. On different
            days, they would want banners with different types of text on them.
          </p>
          <div className="CST__images">
            <Gallery
              images={[
                {
                  src: logo,
                  width: 4,
                  height: 3
                },
                {
                  src: posterO,
                  width: 4,
                  height: 6
                },
                {
                  src: bannerO,
                  width: 3,
                  height: 1
                }
              ]}
            />
          </div>
        </div>
        <div className="CST__contents--section">
          <h3>Revisions</h3>
          <p>
            Looking back at the graphics created I was not happy with what I did
            and made some revisions to the poster and banner.
          </p>
          <div className="CST__images">
            <Gallery
              images={[
                {
                  src: posterN,
                  width: 4,
                  height: 6
                },
                {
                  src: bannerN,
                  width: 3,
                  height: 1
                },
                {
                  src: logo2,
                  width: 4,
                  height: 3
                }
              ]}
            />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

CST.propTypes = {};

export default CST;
