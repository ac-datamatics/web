import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import streamsChart from "functions/Queries";

function Streams({ username }) {
  const todayDate = new Date();

  const todayDateZeroHours = todayDate;
  todayDateZeroHours.setHours(0);
  todayDateZeroHours.setMinutes(0);
  todayDateZeroHours.setMilliseconds(0);

  const todayDateLastSecond = todayDate;
  todayDateLastSecond.setHours(23);
  todayDateLastSecond.setMinutes(59);
  todayDateLastSecond.setMilliseconds(59);

  const [data, setData] = useState([]);

  let url =
    "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video";
  url =
    url +
    "?agentUsername=" +
    username +
    "&=" +
    todayDateZeroHours.toISOString() +
    "&=" +
    todayDateLastSecond.toISOString();

  console.debug(url);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((_data) => {
        setData(_data);
      })
      .catch((err) => console.error(err));
  }, []);

  const sliderData = [];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Calls</h4>
          <h1>{data?.length}</h1>
        </div>
        <div className="slider">
          <div className="services">
            {sliderData.map(({ image, serviceName }) => {
              return (
                <div className="service" key={serviceName}>
                  <img src={image} alt={serviceName} />
                  <h6>{serviceName}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--primary-color)"
                  stopOpacity={0.4}
                />
                <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />

            <Area
              type="monoto  ne"
              dataKey="calls"
              stroke="var(--primary-color)"
              strokeWidth={2}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />

            <XAxis dataKey="hour" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  max-width: 100%;
  height: 320px;
  margin: 1px;
  background-color: rgb(46, 46, 46);

  .title-container {
    display: flex;
    justify-content: space-between;

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
    .slider {
      .services {
        display: flex;
        gap: 1rem;
        .service {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          min-width: 5rem;
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  .chart {
    height: 13rem;
    margin: 10px;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .title {
        text-align: center;
      }
      .slider {
        .services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .service {
            gap: 0.5rem;
            min-width: 1rem;
          }
        }
      }
    }
  }
`;

export default Streams;
