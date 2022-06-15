import ReactPlayer from "react-player";
import Assigned from "./Assigned";
import {useEffect} from "react";
import ThumbCardSuper from "./ThumbCardSuper";
import ThumbCard from './ThumbCard';
import { FiSearch } from "react-icons/fi";

import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

export const Training = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [query, setQuery] = useState("");
  const [videoInfo, setVideoInfo] = useState([]);

  return (
    <div className={classes.newWrap}>
      <div className={classes.search}>
        < FiSearch color="white" size="20px"/>
        <input className={classes.searchBar} placeholder="Search..." onChange={event => setQuery(event.target.value)} />
      </div>
      <TrainingTabs labels={["Assigned", "General"]}>
        <div className={classes.contentWrap}>
          {videoInfo.filter(video => {
            if(query === '') {
              return video;
            // } else if (video.videoTopic.toLowerCase().includes(query.toLowerCase())) {
            //   return video;
            // } else if (video.assignedDate.toLowerCase().includes(query.toLowerCase())) {
            // return video;
            } else if (video.agentUsername.toLowerCase().includes(query.toLowerCase()) && 
            (Date(video.uploadDate).getTime() >= startDate.getTime()) && 
            (Date(video.uploadDate).getTime() <= endDate.getTime())) {
              return video;
            }}).map((video, key) => {
              return <ThumbCard video={video} key={key} />;
          })}
          {/* <Assigned /> */}
        </div>
      </TrainingTabs>
    </div>
  );
};

export function TrainingSUPERV ()  {
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
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className={classes.search}>
          < FiSearch color="white" size="20px"/>
          <input className={classes.searchBar} placeholder="Search..." onChange={event => setQuery(event.target.value)} />
        </div>
        <div style={
          {display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'right',
          color: 'white',
          fontFamily: "Rubik",
          paddingTop: '20px'}}>
          <div style={{display: 'flex', flexDirection: 'row', paddingRight: '40px'}}>
            <p style={{paddingRight: '8px'}}>From: </p>
            <DatePicker selected={startDate} onChange={(startDate) => setStartDate(startDate)} />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', paddingRight: '40px'}}>
            <p style={{paddingRight: '8px'}}>To: </p>
            <DatePicker selected={endDate} onChange={(endDate) => setEndDate(endDate)} />
          </div>
        </div>
      </div>
      <TrainingTabs labels={["General"]}>
        <div className={classes.contentWrap}>
          {videoInfo.filter(video => {
            if(query === '') {
              return video;
            // } else if (video.videoTopic.toLowerCase().includes(query.toLowerCase())) {
            //   return video;
            // } else if (video.assignedDate.toLowerCase().includes(query.toLowerCase())) {
            // return video;
            } else if (video.agentUsername.toLowerCase().includes(query.toLowerCase()) && 
            (Date(video.uploadDate).getTime() >= startDate.getTime()) && 
            (Date(video.uploadDate).getTime() <= endDate.getTime())) {
              return video;
            } 
          }).map((video, key) => {
            return <ThumbCardSuper video={video} key={key} />;
          })}
          {/* <Assigned /> */}
        </div>
      </TrainingTabs>
    </div>
    </>
  );
};

