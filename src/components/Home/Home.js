import React, {useState} from "react";
import { FiSearch } from "react-icons/fi";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome"
import WelcomeSuperv from "./WelcomeSuperv"

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
    <>
      <div className="Home">
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <WelcomeSuperv username={username} />
          <Donut />
        </div>
        <Streams />
    </div>
    </>
  );
};

