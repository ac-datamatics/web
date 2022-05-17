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

const temp = (
  <ReactPlayer
    url={""}
    width="100%"
    pip={true}
    controls={true}
    light={"/Images/logo.png"}
  />
);
