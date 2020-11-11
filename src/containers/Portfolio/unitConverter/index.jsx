import React from "react";
import ProjectWrapper from "../../../components/ProjectWrapper/index";
import InProgress from "../../../components/InProgress/index";

import "./styles.css";

const UnitConverter = () => {
  return (
    <ProjectWrapper
      projectkey="unitConverter"
      backgroundSrc=""
      bannerFontColor=""
    >
      <div className="unitConverter__header" id="tempIntro">
        <InProgress />
        <h1>UnitConverter</h1>
      </div>
      <div className="unitConverter__contents">
        <h3>Project</h3>
        <p>
          Want to explore using React Native. Currently working on creating a
          unit converter app that can be used in mobile and on your computer.
        </p>
      </div>
    </ProjectWrapper>
  );
};

export default UnitConverter;
