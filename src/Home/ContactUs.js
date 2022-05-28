import React from 'react';
import Navbar from '../Share/Navbar'
import Footer from '../Share/Footer'
import './ContactUs.css'
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Let’s get in touch…</h1>
                        <h3 class="text-xl mt-4 font-bold">KELONG GROUP</h3>
                        <div>
                            <div className="contacts-info-details">
                                <div className="icon"><MdOutlineLocationOn />
                                </div>
                                <div className="details">
                                    <p>Registered Address: <small>
                                        Sunrise Garden, House # 5/B, Primary <br /> School Road , Kallyanpur, Mirpur – 1207, Dhaka Division, Bangladesh</small></p>
                                </div>
                            </div>
                            <div className="contacts-info-details">
                                <div className="icon"><BsFillTelephoneFill />
                                </div>
                                <div className="details">
                                    <p>Phone: 01753105250</p>
                                </div>
                            </div>
                            <div className="contacts-info-details">
                                <div className="icon"><AiOutlineMail />
                                </div>
                                <div className="details">
                                    <p>Email: <small>
                                        abdullahalhabib100@gmailcom</small></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;