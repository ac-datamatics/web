import React from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"

export function Home({ username }) {
  return (
    <div className="Home">
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Welcome username={username} />
        <Donut />
      </div>
      <Streams />
    </div>
  );
};



export function HomeSUPERV({ username }) {
  return (
    <div className="Home">
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Welcome username={username} />
        <Donut />
      </div>
      <Streams />
    </div>
  );
};

