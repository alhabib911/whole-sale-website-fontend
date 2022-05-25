import React from 'react';
import { Link } from 'react-router-dom';
import herobanner from '../images/banner/hero-baner.png'
import './SecoundBanner.css'

const SecoundBanner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="hero-text-container text-center lg:text-left">
                        <h1 className="text-3xl font-bold">WELCOME TO OUR WEBSITE</h1>
                        <p className="py-6">Adison Component Sdn Bhd was established in year 2003. Headquartered in Melaka, Malaysia, we are the leading wholesaler, importer and stockist spare parts for domestic washing machines, refrigerators & home appliances accessories. We have a large customer base which enables us to carry thousands of line items to reduce waiting times. Contact us now for more details.</p>
                        <Link className='learn-more-button' to='./'>Learn More</Link>
                    </div>
                        <div className="hero-img-container">
                                <img src={herobanner} alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default SecoundBanner;