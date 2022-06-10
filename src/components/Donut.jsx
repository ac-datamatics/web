import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { maxWidth } from '@mui/system';
Chart.register(
    Tooltip, Title, ArcElement, Legend
);

function Donut() {
    const [data] = useState({
        datasets: [{
            data: [4, 10, 23],
            backgroundColor: [
                'rgba(207, 66, 66, 1)',
                'rgba(229, 161, 19 ,1)',
                'green'
            ],
            borderColor: 'black',
        }],
    
        labels: [
            '1-0 stars calls',
            '3-2 stars calls',
            '5-4 stars calls',
        ],

        styled: [
            'maxWidth: 250px'
        ]
    });

  return (
    <div style={{
        width:'50%', 
        height:'520px', 
        display: 'flex',
        backgroundColor: 'rgb(46,46,46)',
        border: 'none !important',
        borderRadius: '1rem',
        padding: '40px',
        margin: '1px',
        alignItems: 'center',
        marginTop: '7px',}}>
        <Doughnut  data={data} />
    </div>
  );
}

export default Donut;
