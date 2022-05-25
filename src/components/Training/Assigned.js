import ThumbCard from "./ThumbCard";

import classes from "./Training.module.css";

const Assigned = () => {
  const videoInfo = [
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Password Change",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo1.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
  ];

  return (
    <div className={classes.thumbnailCard}>
      {videoInfo.map((video, key) => {
        return <ThumbCard video={video} key={key} />;
      })}
    </div>
  );
};

export default Assigned;
