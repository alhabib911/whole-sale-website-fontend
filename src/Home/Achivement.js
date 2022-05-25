import React from 'react';
import { Link } from 'react-router-dom';
import sell from '../images/icon/sell.png'
import client from '../images/icon/client.png'
import feedback from '../images/icon/feedback.png'
import './Achivement.css'



const Achivement = () => {
    return (
        <div className="achivement-container">
            <div className="achivement-area">
                <div className="achivement-title">
                    <h2>Our Achivement</h2>
                </div>
                <div className="achivement-details">
                    <div className="sale-products">
                        <div className="img-field">
                            <img src={sell} alt="" />
                        </div>
                        <div className="text-field">
                            <h1>70953<span>+</span></h1>
                            <p>Already sell Product</p>
                        </div>
                    </div>
                    <div className="happy-customer">
                        <div className="img-field">
                            <img src={client} alt="" />
                        </div>
                        <div className="text-field">
                            <h1>9700<span>+</span></h1>
                            <p>Already sell Product</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="img-field">
                            <img src={feedback} alt="" />
                        </div>
                        <div className="text-field">
                            <h1>982<span>+</span></h1>
                            <p>Feedbacks</p>
                        </div>
                    </div>
                </div>
                <div className="achivement-footer">
                    <div className="achivement-footer-text">
                        <h2>Have any question about us or do you want to contact with us?</h2>
                        <p>Don't hesitate to contact us</p>
                    </div>
                    <div className="achivement-footer-button">
                        <Link to='/'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;