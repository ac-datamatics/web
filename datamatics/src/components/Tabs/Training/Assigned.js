import { useEffect, useState } from "react";
import ThumbCard from "./ThumbCard";

import classes from "./Training.module.css";

const Assigned = ({ agentUsername }) => {
  const videoInfo = [
    {
      id: "test/outChillAnime",
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      id: "test/outChillAnime",
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      id: "test/outChillAnime",
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      id: "test/outChillAnime",
      thumbnailUrl: "/Images/logo.png",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
    {
      thumbnailUrl: "/Images/logo.png",
      videoUrl: "/Videos/Rec1.mp4",
      supervisorName: "Juan",
      videoTopic: "Account Recovery",
      assignedDate: "16/05/2022",
    },
  ];

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video?agentUsername=" +
  //       agentUsername.current
  //   )
  //     .then((response) => response.json())
  //     .then((_data) => setData(_data));
  // }, []);

  return (
    <div className={classes.thumbnailCard}>
      {videoInfo.map((video, key) => {
        return <ThumbCard video={video} key={key} />;
      })}
    </div>
  );
};

export default Assigned;
