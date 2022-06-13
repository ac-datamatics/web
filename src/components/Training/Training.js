import { useEffect } from "react";
import ThumbCard from "./ThumbCard";
import { FiSearch } from "react-icons/fi";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

export const Training = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((_data) => {
        setData(_data.videos)
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className={classes.newWrap}>
      <TrainingTabs labels={["Assigned"]}>
        <div className={classes.contentWrap}>
          <div className={classes.thumbnailCard}>
            {data.map((video, key) => {
              return <ThumbCard video={video} key={key} />;
            })}
          </div>
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
    fetch(
      "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((_data) => {
        setVideoInfo(_data.videos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={classes.newWrap}>
        <div className={classes.search}>
          <FiSearch color="white" size="20px" />
          <input
            className={classes.searchBar}
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className={classes.picker}>
            <DatePicker
              selected={startDate}
              onChange={(startDate) => setStartDate(startDate)}
            />
            <DatePicker
              selected={endDate}
              onChange={(endDate) => setEndDate(endDate)}
            />
          </div>
        </div>
        <TrainingTabs labels={["General"]}>
          <div className={classes.contentWrap}>
            {videoInfo
              .filter((video) => {
                let uploadDate = new Date(video.uploadDate);
                if (
                  video.agentUsername
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  if (!startDate && !endDate) {
                    return video;
                  }
                  if (startDate && endDate) {
                    if (
                      uploadDate.getDate() >= startDate.getDate() &&
                      uploadDate.getDate() <= endDate.getDate()
                    ) {
                      return video;
                    }
                  } else if (!startDate) {
                    if (uploadDate.getDate() === endDate.getDate()) {
                      //Check this equal
                      return video;
                    }
                  } else if (!endDate) {
                    if (uploadDate.getDate() === startDate.getDate()) {
                      //Check this equal
                      return video;
                    }
                  }
                }
              })
              .map((video, key) => {
                return <ThumbCard video={video} key={key} />;
              })}
            {/* <Assigned /> */}
          </div>
        </TrainingTabs>
      </div>
    </>
  );
}
