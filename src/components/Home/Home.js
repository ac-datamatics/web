import React from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"
import Assigned from "../Training/Assigned";
import classes from "../Training/Training.module.css";
import TrainingTabs from "../Training/TrainingTabs";

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



export function HomeSUPERV() {
  return (
    <div className="Home">
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Welcome />
        <Donut />
      </div>
      <Streams />
    </div>
  );
};

