import { useState, useEffect } from "react";

export default function streamsChart(username, minDate, maxDate) {
    let url = 'https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video';
    url = url + '?agentUsername=' + username + '&=' + minDate + '&=' + maxDate;

    fetch(url, {
        method: 'GET',
    }).then((response) =>
        response.json()
    ).then((_data) => {
        console.debug(_data);
        return _data.videos
    }).catch((err) =>
        console.error(err)
    );
}
