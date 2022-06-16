import { useState } from "react";

export default function Queries() {
    const todayDateZeroHours = new Date();
    todayDateZeroHours.setHours(0);
    todayDateZeroHours.setMinutes(0);
    todayDateZeroHours.setMilliseconds(0);

    const todayDateLastSecond = new Date();
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
                "&minDate=" +
                todayDateZeroHours.toISOString() +
                "&maxDate=" +
                todayDateLastSecond.toISOString();
            let badRate = 0;
            let avgRate = 0;
            let goodRate = 0;
            const slider = [
                { hour: "00:00", calls: 0 },
                { hour: "01:00", calls: 0 },
                { hour: "02:00", calls: 0 },
                { hour: "03:00", calls: 0 },
                { hour: "04:00", calls: 0 },
                { hour: "05:00", calls: 0 },
                { hour: "06:00", calls: 0 },
                { hour: "07:00", calls: 0 },
                { hour: "08:00", calls: 0 },
                { hour: "09:00", calls: 0 },
                { hour: "10:00", calls: 0 },
                { hour: "11:00", calls: 0 },
                { hour: "12:00", calls: 0 },
                { hour: "13:00", calls: 0 },
                { hour: "14:00", calls: 0 },
                { hour: "15:00", calls: 0 },
                { hour: "16:00", calls: 0 },
                { hour: "17:00", calls: 0 },
                { hour: "18:00", calls: 0 },
                { hour: "19:00", calls: 0 },
                { hour: "20:00", calls: 0 },
                { hour: "21:00", calls: 0 },
                { hour: "22:00", calls: 0 },
                { hour: "23:00", calls: 0 }
            ]
            fetch(url, { method: "GET" })
                .then((response) => response.json())
                .then((_data) => {
                    setData(_data)
                    for (const element of _data) {
                        slider[parseInt(element.callEndUTCDate.substring(11, 13))].calls++
                        if (element.rating < -2) {
                            badRate++;
                        } else if (element.rating < 2) {
                            avgRate++;
                        } else {
                            goodRate++;
                        }
                    }
                    setRateData([badRate, avgRate, goodRate])
                    setSliderData(slider)
                })
                .catch((err) => console.error(err));
        }
    }
}
// [
//   { hour: "01:00", calls: 0},
//   { hour: "02:00", calls: 0},
//   { hour: "03:00", calls: 0},
//   { hour: "04:00", calls: 0},
//   { hour: "05:00", calls: 0},
//   { hour: "06:00", calls: 0},
//   { hour: "07:00", calls: 0},
//   { hour: "08:00", calls: 1},
//   { hour: "09:00", calls: 3},
//   { hour: "10:00", calls: 1},
//   { hour: "11:00", calls: 4},
//   { hour: "12:00", calls: 6},
//   { hour: "13:00", calls: 2},
//   { hour: "14:00", calls: 4},
//   { hour: "15:00", calls: 5},
//   { hour: "16:00", calls: 2},
//   { hour: "17:00", calls: 3},
//   { hour: "18:00", calls: 5},
//   { hour: "19:00", calls: 1},
//   { hour: "20:00", calls: 1},
//   { hour: "21:00", calls: 0},
//   { hour: "22:00", calls: 0},
//   { hour: "23:00", calls: 0},
//   { hour: "00:00", calls: 0}
// ]