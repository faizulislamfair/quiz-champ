import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css';


const Statistics = () => {

    const data = [
        {
            name: 'React',
            total_Questions: 8
        },
        {
            name: 'JavaScript',
            total_Questions: 9
        },
        {
            name: 'CSS',
            total_Questions: 8
        },
        {
            name: 'Git',
            total_Questions: 11
        }
    ];

    return (
        <div className='statistics'>
            <h2 style={{ margin: '25px' }}>Statistics on Questions Per Topic</h2>
            <div className='bar'>
                <BarChart width={550} height={500} data={data}>
                    <Bar dataKey="total_Questions" fill="#D98D0D" />
                    <XAxis />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

        </div>

    );
};

export default Statistics;