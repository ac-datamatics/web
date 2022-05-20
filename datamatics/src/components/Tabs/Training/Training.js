import ReactPlayer from "react-player";
import Assigned from "./Assigned";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";

const Training = () => {
  return (
    <TrainingTabs labels={["Assigned", "General"]}>
      <div className={classes.contentWrap}>
        <Assigned />
      </div>
    </TrainingTabs>
  );
};

export default Training;
