import React from 'react';
import './NotFound.css';
import image from '../../images/CodePen-404-Page.gif'
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const NotFound = () => {
    return (
        <div>
            <img src={image} alt="" className="img-fluid" />
        </div>
    );
};

export default NotFound;