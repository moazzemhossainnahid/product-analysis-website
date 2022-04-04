import React from 'react';
import Chart from '../Recharts/LineChart/Chart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='py-5'>
            <Chart></Chart>
        </div>
    );
};

export default Dashboard;