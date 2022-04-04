import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-light mb-0 mt-5">
                <h6 className="pt-5"> Bike BD Online &copy; | Moazzem Nahid | All Rights Reserved </h6>
                <div className="social pb-5">
                <FontAwesomeIcon className='m-2 fs-4 socialIco' icon={faFacebook} />
                <FontAwesomeIcon className='m-2 fs-4 socialIco' icon={faTwitter} />
                <FontAwesomeIcon className='m-2 fs-4 socialIco' icon={faInstagram} />
                <FontAwesomeIcon className='m-2 fs-4 socialIco' icon={faLinkedin} />
                <FontAwesomeIcon className='m-2 fs-4 socialIco' icon={faYoutube} />
                </div>
            </div>
        </div>
    );
};

export default Footer;