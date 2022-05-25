import ReactPlayer from "react-player";
import Assigned from "./Assigned";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";

const Training = () => {
  return (
    <div className={classes.newWrap}>
    <TrainingTabs labels={["Assigned", "General"]}>
      <div className={classes.contentWrap}>
        <Assigned />
      </div>
    </TrainingTabs>
    </div>
  );
};

export default Training;
