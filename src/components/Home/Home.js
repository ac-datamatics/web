import React, { useState, useEffect, useRef } from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"
import Queries from "../../functions/Queries"

export function Home({ username }) {

  const todayDate = new Date();

  const todayDateZeroHours = todayDate;
  todayDateZeroHours.setHours(0);
  todayDateZeroHours.setMinutes(0);
  todayDateZeroHours.setMilliseconds(0);

  const todayDateLastSecond = todayDate;
  todayDateLastSecond.setHours(23);
  todayDateLastSecond.setMinutes(59);
  todayDateLastSecond.setMilliseconds(59);

  const [data, setData] = useState([]);
  const [rateData, setRateData] = useState([])
  let badRate = 0;
  let avgRate = 0;
  let goodRate = 0;

  let url =
    "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video";
  url =
    url +
    "?agentUsername=" +
    username +
    "&=" +
    todayDateZeroHours.toISOString() +
    "&=" +
    todayDateLastSecond.toISOString();

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((_data) => {
        setData(_data);
        console.debug(_data)

        for (const element of _data) {
          if (element.rating < -2) {
            badRate++;
          } else if (element.rating < 2) {
            console.debug(avgRate)
            avgRate++;
          } else {
            goodRate++;
          }
        }
        setRateData([badRate, avgRate, goodRate])
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {console.debug(data)}, [data])

  return (
    <div className="Home">
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Welcome username={username} data={{ count: data.length, info: rateData }} />
        <Donut data={rateData} />
      </div>
      <Streams data={data} />
    </div>
  );
};



export function HomeSUPERV({ username }) {

  const todayDate = new Date();

  const todayDateZeroHours = todayDate;
  todayDateZeroHours.setHours(0);
  todayDateZeroHours.setMinutes(0);
  todayDateZeroHours.setMilliseconds(0);

  const todayDateLastSecond = todayDate;
  todayDateLastSecond.setHours(23);
  todayDateLastSecond.setMinutes(59);
  todayDateLastSecond.setMilliseconds(59);

  const [data, setData] = useState([]);
  const [rateData, setRateData] = useState([])
  let badRate = 0;
  let avgRate = 0;
  let goodRate = 0;

  let url =
    "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video";
  url =
    url +
    "?agentUsername=" +
    username +
    "&=" +
    todayDateZeroHours.toISOString() +
    "&=" +
    todayDateLastSecond.toISOString();

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((_data) => {
        setData(_data);
        console.debug(_data)

        for (const element of _data) {
          if (element.rating < -2) {
            badRate++;
          } else if (element.rating < 2) {
            console.debug(avgRate)
            avgRate++;
          } else {
            goodRate++;
          }
        }
        setRateData([badRate, avgRate, goodRate])
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Home">
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Welcome username={username} data={{ count: data.length, info: rateData }} />
        <Donut data={[badRate, avgRate, goodRate]} />
      </div>
      <Streams data={data} />
    </div>
  );
};

