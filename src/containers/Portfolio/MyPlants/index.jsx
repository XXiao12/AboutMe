import React from "react";
import ProjectWrapper from "../../../components/ProjectWrapper/index";
import InProgress from "../../../components/InProgress/index";

import "./styles.css";

const MyPlants = () => {
  return (
    <ProjectWrapper projectkey="myPlants" backgroundSrc="" bannerFontColor="">
      <div className="myPlants" id="tempIntro">
        <InProgress />
        <h1>MyPlants</h1>
        <div className="myPlants__contents">
          <h3>Problem</h3>
          <p>
            I have taken care of many plants but I have never been able to take
            care of a plant successfully. The longest I've had a plant for is 2
            years. After trying out different apps for plants, I have not found
            an app that was simple and easy to use.
          </p>
          <h3>Objective</h3>
          <p>
            My goal for this project is to design a plant helper app to help
            people take care of their household plants no matter how experienced
            they are.
          </p>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default MyPlants;
