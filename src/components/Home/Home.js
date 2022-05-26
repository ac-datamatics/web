import React from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"

export default function Home ()  {
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