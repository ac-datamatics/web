import { useState, useEffect } from "react";

export default function Queries() {
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
    const [rateData, setRateData] = useState([])
    const [sliderData, setSliderData] = useState([])

    let url = "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video";

    return {
        data,
        rateData,
        sliderData,
        GetGraphData: (username) => {
            url = url +
                "?agentUsername=" +
                username +
                "&=" +
                todayDateZeroHours.toISOString() +
                "&=" +
                todayDateLastSecond.toISOString();

            let badRate = 0;
            let avgRate = 0;
            let goodRate = 0;

            fetch(url, { method: "GET" })
                .then((response) => response.json())
                .then((_data) => {
                    setData(_data)
                    for (const element of _data) {
                        if (element.rating < -2) {
                            badRate++;
                        } else if (element.rating < 2) {
                            avgRate++;
                        } else {
                            goodRate++;
                        }
                    }
                    setRateData([badRate, avgRate, goodRate])
                })
                .catch((err) => console.error(err));
        }
    }
}
