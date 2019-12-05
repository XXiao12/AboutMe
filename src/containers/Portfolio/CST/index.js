import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import ProjectWrapper from "../../../components/ProjectWrapper";
import preloadImg from "../../../utils/preload";
import CSTImages from "../../../img/CST/index";
import Gallery from "../../../components/Gallery";

import "./styles.css";

const CST = () => {
  preloadImg(CSTImages);

  return (
    <ProjectWrapper
      projectkey="CST"
      backgroundSrc={CSTImages.banner}
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
                  src: CSTImages.plan1,
                  width: 3,
                  height: 4
                },
                {
                  src: CSTImages.plan2,
                  width: 3,
                  height: 4
                },
                {
                  src: CSTImages.plan3,
                  width: 3,
                  height: 4
                },
                {
                  src: CSTImages.plan4,
                  width: 3,
                  height: 4
                },
                {
                  src: CSTImages.plan5,
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
                  src: CSTImages.logo,
                  width: 4,
                  height: 3
                },
                {
                  src: CSTImages.posterO,
                  width: 4,
                  height: 6
                },
                {
                  src: CSTImages.bannerO,
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
                  src: CSTImages.posterN,
                  width: 4,
                  height: 6
                },
                {
                  src: CSTImages.bannerN,
                  width: 3,
                  height: 1
                },
                {
                  src: CSTImages.logo2,
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
