import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h4>Page not found</h4>
            <p>Sorry, we can`t find the page you are looking for! Please press a button below to go back to homepage.</p>
            <div className="go-back-button">
                <Link className='goback-btn' to='/home'>BACK TO HOMEPAGE</Link>
            </div>
        </div>
    );
};

export default NotFound;