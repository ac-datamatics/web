import { useState } from "react";

export default function Queries() {
  const [data, setData] = useState([]);
  const [rateData, setRateData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [videoAgentInfo, setVideoAgentInfo] = useState([]);
  const [videoSupervInfo, setVideoSupervInfo] = useState([]);

  let url =
    "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video";

  return {
    data,
    rateData,
    sliderData,
    videoSupervInfo,
    videoAgentInfo,
    GetVideosData: (agentQueues) => {
      const queues = agentQueues.map((queue) => {
        return queue.name;
      });
      fetch(
        "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((_data) => {
          console.debug(_data);
          let agentInfo = [];
          let supervInfo = [];
          for (const element of _data.videos) {
            if (queues.includes(element.queue_name)) {
              supervInfo.push(element);
              if (element.is_assigned === "true") {
                agentInfo.push(element);
              }
            }
          }

          setVideoAgentInfo(agentInfo.reverse());
          setVideoSupervInfo(supervInfo.reverse());
        })
        .catch((err) => console.error(err));
    },
    GetGraphData: (username, date) => {
      const todayDateZeroHours = new Date(date);
      todayDateZeroHours.setHours(0);
      todayDateZeroHours.setMinutes(0);
      todayDateZeroHours.setMilliseconds(0);

      const todayDateLastSecond = new Date(date);
      todayDateLastSecond.setHours(23);
      todayDateLastSecond.setMinutes(59);
      todayDateLastSecond.setMilliseconds(59);

      url =
        url +
        "?agentUsername=" +
        username +
        "&minDate=" +
        todayDateZeroHours.toISOString() +
        "&maxDate=" +
        todayDateLastSecond.toISOString();
      let badRate = 0;
      let avgRate = 0;
      let goodRate = 0;
      const slider = [
        { hour: "00h", calls: 0 },
        { hour: "01h", calls: 0 },
        { hour: "02h", calls: 0 },
        { hour: "03h", calls: 0 },
        { hour: "04h", calls: 0 },
        { hour: "05h", calls: 0 },
        { hour: "06h", calls: 0 },
        { hour: "07h", calls: 0 },
        { hour: "08h", calls: 0 },
        { hour: "09h", calls: 0 },
        { hour: "10h", calls: 0 },
        { hour: "11h", calls: 0 },
        { hour: "12h", calls: 0 },
        { hour: "13h", calls: 0 },
        { hour: "14h", calls: 0 },
        { hour: "15h", calls: 0 },
        { hour: "16h", calls: 0 },
        { hour: "17h", calls: 0 },
        { hour: "18h", calls: 0 },
        { hour: "19h", calls: 0 },
        { hour: "20h", calls: 0 },
        { hour: "21h", calls: 0 },
        { hour: "22h", calls: 0 },
        { hour: "23h", calls: 0 },
      ];
      fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((_data) => {
          setData(_data);
          for (const element of _data) {
            const endDate = new Date(element.callEndUTCDate);
            slider[parseInt(endDate.getHours())].calls++;
            if (element.rating < -2) {
              badRate++;
            } else if (element.rating < 2) {
              avgRate++;
            } else {
              goodRate++;
            }
          }
          setRateData([badRate, avgRate, goodRate]);
          setSliderData(slider);
        })
        .catch((err) => console.error(err));
    },
  };
}
