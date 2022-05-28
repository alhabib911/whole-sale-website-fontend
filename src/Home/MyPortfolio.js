import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import me from '../images/banner/me.jpg'
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import './MyPortfolio.css'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiPhoneFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import zm from '../images/protfolio/zm.png'
import dental from '../images/protfolio/dental.png'
import kelong from '../images/protfolio/kelong.png'

const MyPortfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className="about-me-container">
                        <div className="about-title">
                            <h2>About Me</h2>
                        </div>
                        <div className="about-me">
                            <div className="my-photo">
                                <img src={me} alt="" />
                            </div>
                            <div className="about-text">
                                <h2>Hello,</h2>
                                <p>I am Abdullah Al Habib, web developer from Dhaka, Bangladesh. I am MERN Stack development( ReactJS , NodeJs , Express , mongodb ). Web only if its smooth, I do work with React, bootstrap, tailwind for frontend and for backend I do work with NodeJs, Express and MongoDb. I can also develop and design a single-page application using react.js.</p>
                            </div>
                        </div>
                        <div className="about-info">
                            <span>Name: Abdullah Al Habib</span>
                            <span>Location: Dhaka, Bangladesh</span>
                            <span>Email: abdullahalhabib100@gmail.com</span>
                        </div>
                    </div>
                    <div className="about-me-container">
                        <div className="skill-title">
                            <h2>My Skill</h2>
                        </div>
                        <div className="skill-precess">
                            <div className="process-left">
                                <div className="process">
                                    <h2>HTML & CSS</h2>
                                    <progress class="progress w-56" value="90" max="100"></progress>
                                </div>
                                <div className="process">
                                    <h2>React Js</h2>
                                    <progress class="progress w-56" value="70" max="100"></progress>
                                </div>
                            </div>
                            <div className="process-right">
                                <div className="process">
                                    <h2>Node Js & Express</h2>
                                    <progress class="progress w-56" value="50" max="100"></progress>
                                </div>
                                <div className="process">
                                    <h2>Mongodb</h2>
                                    <progress class="progress w-56" value="50" max="100"></progress>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="about-me-container">
                        <div className="about-title">
                            <h2>Academic Background</h2>
                        </div>
                        <div className="academic-details">
                            <p>
                                <span>BSS (Honours)</span> <br />
                                Dhaka College <br />
                                Subject: Sociology <br />
                                Unit Dhaka University <br />
                                Passing Year: 2020 <br />
                            </p> <br />
                            <p>
                                <span>HSC</span> <br />
                                Dr. Abdur Razzak Municipul College, Jashore <br />
                                Group: Humanities <br />
                                Board: Jashore <br />
                                Passing Year: 2016 <br />
                            </p> <br />
                            <p>
                                <span>SSC</span> <br />
                                Naldanga Bhushon Pilot Secoundary High  School, Kaligonj, Jhenaidah <br />
                                Group: Science <br />
                                Board: Jashore  <br />
                                Passing Year: 2014 <br />
                            </p>
                        </div>
                    </div>
                    <div className="about-me-container">
                        <div className="about-title">
                            <h2>Sample Project</h2>
                        </div>
                        <div className="project-link">
                            <div className="bg-project">
                                <a href="">
                                    <img src={kelong} alt="" />
                                </a>
                            </div>
                            <div className="bg-project">
                                <a href="https://zayn-9e9756.web.app/">
                                    <img src={zm} alt="" />
                                </a>
                            </div>
                            <div className="bg-project">
                                <a href="https://jackson-dental-care.web.app/">
                                    <img src={dental} alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="about-me-container">
                        <div className="about-title">
                            <h2>Get in touch</h2>
                        </div>
                        <div className='contact-with-habib'>
                            <div className="email-field">
                                <div className="email-icon">
                                    <small>Email</small>
                                    <AiOutlineMail />
                                </div>
                                <div className="email-add">
                                    <p>abdullahalhabib100@gmail.com</p>
                                </div>
                            </div> 
                            <div className="email-field">
                                <div className="email-icon">
                                    <small>Phone</small>
                                    <RiPhoneFill />
                                </div>
                                <div className="phone-add">
                                    <p>+88 01753 105252</p>
                                </div>
                            </div>
                            <div className="email-field">
                                <div className="email-icon">
                                    <small>Address</small>
                                    <MdOutlineLocationOn />
                                </div>
                                <div className="address-add">
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <div className="avatar-img">
                            <img src={me} alt="" />
                        </div>
                        <div className="protfolio-info">
                            <h2>Abdullah Al Habib</h2>
                            <p>Web Developer</p>
                        </div>
                        <div className="social-contact">
                            <a href="https://www.facebook.com/habibdc2018"><BsFacebook /></a>
                            <a href="https://www.linkedin.com/in/habibdc2020/"><BsLinkedin /></a>
                            <a href="https://www.instagram.com/habibdc20/?hl=en"><AiFillInstagram /></a>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;