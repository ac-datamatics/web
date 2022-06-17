import React, { useEffect, useState } from "react";
import Streams from "../Streams";
import Donut from "../Donut";
import "./Home.css";
import Welcome from "./Welcome";
import WelcomeSuperv from "./WelcomeSuperv";
import Queries from "../../functions/Queries";

export function Home({ username, videoInfo }) {
  const { data, rateData, sliderData, GetGraphData } = Queries();
  useEffect(() => {
    GetGraphData(username);
  }, []);

  return (
    <div className="Home">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Welcome
          username={username}
          data={{ count: data.length, info: rateData }}
        />
        <Donut data={rateData} />
      </div>
      <div>
        <Streams data={{ count: data.length, info: sliderData }} />
      </div>
    </div>
  );
}

export function HomeSUPERV({ username, videoInfo }) {
  const { data, rateData, sliderData, GetGraphData } = Queries();
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (selectedOption) {
      GetGraphData(selectedOption.label);
    }
  }, [selectedOption]);

  useEffect(() => {
    let agentNames = [];
    videoInfo.map((element, index) => {
      if (!agentNames.includes(element.agentUsername)) {
        agentNames.push(element.agentUsername);
      }
    });

    setOptions(
      agentNames.map((element, index) => {
        return { id: index, name: element };
      })
    );
  }, [videoInfo]);

  const handleSelectedOption = (option) => {
    setSelectedOption(option[0]);
  };

  return (
    <div className="Home">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <WelcomeSuperv
          username={username}
          options={options}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
          data={{ count: data.length, info: rateData }}
        />
        <Donut selectedName={selectedOption?.label} data={rateData} />
      </div>
      <Streams
        selectedName={selectedOption?.label}
        data={{ count: data.length, info: sliderData }}
      />
    </div>
  );
}
