import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function Donut({ data, selectedName }) {
  const [donutData, setDonutData] = useState({
    datasets: [
      {
        data: [1, 1, 1],
        backgroundColor: [
          "rgba(207, 66, 66, 1)",
          "rgba(229, 161, 19 ,1)",
          "green",
        ],
        borderColor: "black",
      },
    ],

    labels: ["1-0 stars calls", "3-2 stars calls", "5-4 stars calls"],
  });

  useEffect(() => {
    setDonutData({
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(207, 66, 66, 1)",
            "rgba(229, 161, 19 ,1)",
            "green",
          ],
          borderColor: "black",
        },
      ],

      labels: ["Low", "Average", "High"],
    });
  }, [data]);

  return (
    <div
      style={{
        width: "50%",
        maxHeight: "520px",
        display: "flex",
        backgroundColor: "rgb(46,46,46)",
        border: "none !important",
        borderRadius: "1rem",
        padding: "10px",
        margin: "1px",
        alignItems: "center",
        marginTop: "7px",
        flexDirection: "column",
        color: "white",
      }}
    >
      <h1>{selectedName ? selectedName + "'s Ratings" : "Ratings"}</h1>
      <Doughnut
        data={donutData}
        style={{ maxHeight: "90%", maxWidth: "90%" }}
      />
    </div>
  );
}

export default Donut;
