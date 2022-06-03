import ReactPlayer from "react-player";
import Assigned from "./Assigned";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";

const Training = ({ agentUsername }) => {
  return (
    <TrainingTabs labels={["Assigned", "General"]}>
      <div className={classes.contentWrap}>
        <Assigned agentUsername={agentUsername} />
      </div>
    </TrainingTabs>
  );
};

export default Training;
