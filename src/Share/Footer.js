import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import facebook from '../images/socialicon/facebook.png'
import instra from '../images/socialicon/instra.png'
import linkedin from '../images/socialicon/linkdin.png'
import visa from '../images/paymenticon/visa.svg'
import amex from '../images/paymenticon/amex.svg'
import mastercard from '../images/paymenticon/mastercard.svg'
import logowhite from '../images/logo/logo-white.png'




const Footer = () => {
    return (
        <div>
            <footer >
                <div className='footer-container'>
                    <div className="discover">
                        <div className="discover-title">
                            <h2>Discover</h2>
                        </div>
                        <div className="discover-container">
                            <div>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>Terms</Link></li>
                                    <li><Link to='/'>Talent & Culture</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><Link to='/'>Refund Policy</Link></li>
                                    <li><Link to='/'>EMI Policy</Link></li>
                                    <li><Link to='/'>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="payment-methods">
                        <div className="payment-methods-title">
                            <h2>Payment Methods</h2>
                        </div>
                        <div className="payment-methods-container">
                            <div className="first-row">
                                <img src={visa} alt="" />
                                <img src={amex} alt="" />
                                <img src={mastercard} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="help">
                        <div className="help-title">
                            <h2>Need Help ?</h2>
                        </div>
                        <div className="help-container">
                            <p>We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).</p>
                        </div>

                    </div>
                    <div className="contact">
                        <div className="contact-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="contact-container">
                            <li> <a href="mailto:info@letsgo.com">info@kelong.com</a> </li>
                            <li><a href="tel:+8801753105250">01753 10 52 50</a></li>
                            <div className="social-icon">
                                <a href="https://www.facebook.com/habibdc2018/"><img src={facebook} alt="" /></a>
                                <a href="https://www.instagram.com/habibdc20/?hl=en"><img src={instra} alt="" /></a>
                                <a href="https://www.linkedin.com/in/habibdc2020/"><img src={linkedin} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copywrite">
                    <div className='copywrite-container'>
                        <img src={logowhite} alt="" />
                        <p>© Copyright Let's Kelong-Group</p>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;