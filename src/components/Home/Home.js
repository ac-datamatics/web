import React, { useState, useEffect, useRef } from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"
import Queries from "../../functions/Queries"

export function Home({ username }) {
  const { data, rateData, sliderData, GetGraphData } = Queries()
  useEffect(() => {GetGraphData(username)}, [])

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
  const { data, rateData, GetGraphData } = Queries()
  useEffect(() => {GetGraphData(username)}, [])

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

