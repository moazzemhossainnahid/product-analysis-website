import React from 'react';
import Bike from './Bike/Bike';
import './Home.css';
import ReviewSlider from './ReviewSlider/ReviewSlider';

const Home = () => {
    return (
        <div>
            <Bike></Bike>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;