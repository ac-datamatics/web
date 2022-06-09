import ReactPlayer from "react-player";
import Assigned from "./Assigned";
import {useState} from "react";
import ThumbCard from "./ThumbCard";
import { FiSearch } from "react-icons/fi";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";

export const Training = () => {
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

export function TrainingSUPERV ()  {
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

  const [query, setQuery] = useState("");

  return (
    <div className={classes.newWrap}>
      <div className={classes.search}>
        < FiSearch color="white" size="20px"/>
        <input className={classes.searchBar} placeholder="Search..." onChange={event => setQuery(event.target.value)} />
      </div>
      <div className={classes.exampleDiv}>
        <p className={classes.example}>Date Format: DD/MM/YYYY</p>
      </div>
      <TrainingTabs labels={["General"]}>
        <div className={classes.contentWrap}>
          {videoInfo.filter(video => {
            if(query === '') {
              return video;
            } else if (video.videoTopic.toLowerCase().includes(query.toLowerCase())) {
              return video;
            } else if (video.assignedDate.toLowerCase().includes(query.toLowerCase())) {
              return video;
            } else if (video.supervisorName.toLowerCase().includes(query.toLowerCase())) {
              return video;
            } 
          }).map((video, key) => {
            return <ThumbCard video={video} key={key} />;
          })}
          {/* <Assigned /> */}
        </div>
      </TrainingTabs>
    </div>

  );
};

