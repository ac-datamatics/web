import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from "recharts";

function Streams() {
  const data = [
    {
      hour: '01:00',
      calls: 0,
    },
    {
      hour: '02:00',
      calls: 0,
    },
    {
      hour: '03:00',
      calls: 0,
    },
    {
      hour: '04:00',
      calls: 0,
    },
    {
      hour: '05:00',
      calls: 0,
    },
    {
      hour: '06:00',
      calls: 0,
    },
    {
      hour: '07:00',
      calls: 0,
    },
    {
      hour: '08:00',
      calls: 1,
    },
    {
      hour: '9:00',
      calls: 3,
    },
    {hour: '10:00',
      calls: 1,
    },
    {
      hour: '11:00',
      calls: 4,
    },
    {
      hour: '12:00',
      calls: 6,
    },
    {hour: '13:00',
      calls: 2,
    },
    {
      hour: '14:00',
      calls: 4,
    },
    {
      hour: '15:00',
      calls: 5,
    },
    {
      hour: '16:00',
      calls: 2,
    },
    {
      hour: '17:00',
      calls: 3,
    },
    {
      hour: '18:00',
      calls: 5,
    },
    {
      hour: '19:00',
      calls: 1,
    },
    {
      hour: '20:00',
      calls: 1,
    },
    {
      hour: '21:00',
      calls: 0,
    },
    {
      hour: '22:00',
      calls: 0,
    },
    {
      hour: '23:00',
      calls: 0,
    },
    {
      hour: '00:00',
      calls: 0,
    },
  ];
  const sliderData = [
  
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Calls</h4>
          <h1>37</h1>
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
          <AreaChart

            data={data}
          >
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
  width: 100%;
  height: 320px;
  margin: 1px;
  background-color: rgb(46,46,46);

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
