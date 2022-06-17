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
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (selectedOption) {
      GetGraphData(selectedOption.label, date);
    }
  }, [selectedOption, date]);

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

  const handleDate = (date) => {
    setDate(date);
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
          date={date}
          handleDate={handleDate}
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
