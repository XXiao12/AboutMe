import React from "react";
import inProgress from "../../media/gifs/inProgress.gif";
import preloadImg from "../../utils/preload";

import "./styles.css";

const InProgress = () => {
  preloadImg([inProgress]);

  return (
      <img id="inProgress" src={inProgress} alt="motion graphic" />
  );
};

export default InProgress;
