import ReactPlayer from "react-player";

import ThumbCard from "./ThumbCard";
import classes from "./Training.module.css";

const Training = () => {
  const videoInfo = [
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
  ];

  return (
    <div>
      <h1 className={classes.titleColor}>Training</h1>
      <div className={classes.thumbnailCard}>
        {videoInfo.map((video, key) => {
          return (
            <ThumbCard
              thumbnailUrl={video.thumbnailUrl}
              supervisorName={video.supervisorName}
              videoTopic={video.videoTopic}
              assignedDate={video.assignedDate}
              key={key}
            />
          );
        })}
      </div>
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
