import React, { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";

import classes from "./WelcomeSuperv.module.css";

function WelcomeSuperv({
  username,
  selectedOption,
  handleSelectedOption,
  options,
  data,
  date,
  handleDate,
}) {
  const state = {
    curDate: new Date().toDateString(),
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 2,
        marginTop: "30px",
        borderColor: color,
      }}
    />
  );

  return (
    <div
      style={{
        width: "49%",
        height: "520px",
        backgroundColor: "rgb(46,46,46)",
        border: "none !important",
        borderRadius: "1rem",
        padding: "40px",
        margin: "1px",
        marginRight: "10px",
        marginBottom: "10px",
        marginTop: "7px",
        color: "white",
      }}
    >
      <h1>Welcome, {username}!</h1>
      <div style={{ marginTop: "10px" }}>
        <p>Current Date : {state.curDate}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "250px",
            marginTop: "30px",
            backgroundColor: "white",
          }}
        >
          <Select
            style={{ color: "black" }}
            options={options.map((item, index) => {
              return { value: item.id, label: item.name };
            })}
            values={selectedOption}
            onChange={(value) => handleSelectedOption(value)}
          />
        </div>
        <div
          style={{
            marginTop: "30px",
            height: "100%",
            paddingLeft: "10px",
          }}
        >
          <DatePicker
            wrapperClassName={classes.datePicker}
            selected={date}
            onChange={(value) => handleDate(value)}
          />
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Total calls: {data.count}</h2>
        <ColoredLine color="rgb(227, 151, 64)" />
        <div style={{ marginTop: "40px", fontFamily: "Arial" }}>
          <h3>High rated calls: {data.info[2]}</h3>
          <h3 style={{ marginTop: "10px" }}>
            Average rated calls: {data.info[1]}
          </h3>
          <h3 style={{ marginTop: "10px" }}>Low rated calls: {data.info[0]}</h3>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSuperv;
