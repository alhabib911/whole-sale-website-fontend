import React from 'react';
import banner from '../images/banner/secoundbanner.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-img">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;