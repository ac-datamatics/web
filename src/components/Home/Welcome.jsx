import React from "react";

function Welcome({ username }) {
  const state = {
    curTime: new Date().toLocaleString(),
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
      <h1>Welcome, {username?.current}!</h1>

      <div style={{ marginTop: "10px" }}>
        <p>Current Time : {state.curTime}</p>
      </div>

      <div style={{ marginTop: "70px" }}>
        <h2>Total calls: 37</h2>
        <ColoredLine color="rgb(227, 151, 64)" />
        <div style={{ marginTop: "40px", fontFamily: "Arial" }}>
          <h3>Calls of 5-4 stars: 23</h3>
          <h3 style={{ marginTop: "10px" }}>Calls of 2-3 stars: 10</h3>
          <h3 style={{ marginTop: "10px" }}>Calls of 1-0 stars: 4</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
