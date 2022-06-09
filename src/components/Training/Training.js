import ReactPlayer from "react-player";
import Assigned from "./Assigned";
import {useState, useEffect} from "react";
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
  const [query, setQuery] = useState("");
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    fetch("https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((_data) => {
        setVideoInfo(_data.videos)
      })
      .catch((err) => console.error(err));
  }, []);

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
            // } else if (video.videoTopic.toLowerCase().includes(query.toLowerCase())) {
            //   return video;
            // } else if (video.assignedDate.toLowerCase().includes(query.toLowerCase())) {
            //   return video;
            } else if (video.agentUsername.toLowerCase().includes(query.toLowerCase())) {
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

