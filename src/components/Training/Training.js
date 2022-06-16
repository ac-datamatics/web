import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

import ThumbCard from "./ThumbCard";
import ThumbCardSuper from "./ThumbCardSuper";
import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";

export const Training = ({ videoInfo }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [query, setQuery] = useState("");

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              color: "white",
              fontFamily: "Rubik",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: "40px",
              }}
            >
              <p style={{ paddingRight: "8px" }}>From: </p>
              <DatePicker
                selected={startDate}
                onChange={(startDate) => setStartDate(startDate)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: "40px",
              }}
            >
              <p style={{ paddingRight: "8px" }}>To: </p>
              <DatePicker
                selected={endDate}
                onChange={(endDate) => setEndDate(endDate)}
              />
            </div>
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
          </div>
        </TrainingTabs>
      </div>
    </>
  );
};

export function TrainingSUPERV({ agent, videoInfo }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <>
      {/* <div className={classes.newWrap}> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={classes.search}>
          <FiSearch color="white" size="20px" />
          <input
            className={classes.searchBar}
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              color: "white",
              fontFamily: "Rubik",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: "40px",
              }}
            >
              <p style={{ paddingRight: "8px" }}>From: </p>
              <DatePicker
                selected={startDate}
                onChange={(startDate) => setStartDate(startDate)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: "40px",
              }}
            >
              <p style={{ paddingRight: "8px" }}>To: </p>
              <DatePicker
                selected={endDate}
                onChange={(endDate) => setEndDate(endDate)}
              />
            </div>
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
                return <ThumbCardSuper video={video} key={key} />;
              })}
          </div>
        </TrainingTabs>
      </div>
    </>
  );
}
