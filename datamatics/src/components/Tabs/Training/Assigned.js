import ThumbCard from "./ThumbCard";

import classes from "./Training.module.css";

const Assigned = () => {
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
  );
};

export default Assigned;
