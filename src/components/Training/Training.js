import ReactPlayer from "react-player";
import Assigned from "./Assigned";
import { useEffect } from "react";
import ThumbCard from "./ThumbCard";
import { FiSearch } from "react-icons/fi";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

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

export function TrainingSUPERV() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
    <>
      <div className={classes.newWrap}>
        <div className={classes.search}>
          < FiSearch color="white" size="20px" />
          <input className={classes.searchBar} placeholder="Search..." onChange={event => setQuery(event.target.value)} />
          <div className={classes.picker}>
            <DatePicker selected={startDate} onChange={(startDate) => setStartDate(startDate)} />
            <DatePicker selected={endDate} onChange={(endDate) => setEndDate(endDate)} />
          </div>
        </div>
        <TrainingTabs labels={["General"]}>
          <div className={classes.contentWrap}>
            {videoInfo.filter(video => {
              if (video.agentUsername.toLowerCase().includes(query.toLowerCase())) {
                if (!startDate && !endDate) {
                  return video
                } if (startDate && endDate) {
                  if ((Date(video.uploadDate) >= startDate.getTime()) && (Date(video.uploadDate) <= endDate.getTime())) {
                    return video
                  }
                } else if (!startDate) {
                  if (Date(video.uploadDate) == endDate) { //Check this equal
                    return video;
                  }
                } else if (!endDate) {
                  if (Date(video.uploadDate) == startDate) { //Check this equal
                    return video
                  }
                }
              }
            }).map((video, key) => {
              return <ThumbCard video={video} key={key} />;
            })}
            {/* <Assigned /> */}
          </div>
        </TrainingTabs>
      </div>
    </>
  );
};

