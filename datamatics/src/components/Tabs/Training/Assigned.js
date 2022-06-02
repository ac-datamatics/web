import { useEffect, useState } from "react";
import ThumbCard from "./ThumbCard";

import classes from "./Training.module.css";

const Assigned = () => {
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
  ];

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video?Contact_ID=[Contact_ID]"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [])

  return (
    <div className={classes.thumbnailCard}>
      {videoInfo.map((video, key) => {
        return <ThumbCard video={video} key={key} />;
      })}
    </div>
  );
};

export default Assigned;
