import ReactPlayer from "react-player";
import Assigned from "./Assigned";

import TrainingTabs from "./TrainingTabs";

const Training = () => {
  return (
    <div>
      <TrainingTabs labels={["Assigned", "General"]}>
        <Assigned />
      </TrainingTabs>
    </div>
  );
};

export default Training;
