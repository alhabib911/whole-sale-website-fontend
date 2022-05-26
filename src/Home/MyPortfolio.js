import React from 'react';
import { Link } from 'react-router-dom';
import me from '../images/banner/me.jpg'
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import './MyPortfolio.css'

const MyPortfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='about-container'>
                <img src={me} alt="" />
                <h3>Abdullah Al Habib</h3>
                <p>The next 5 months are very important for me as a learner developer. In the next 5 months(this days) I want to make some live websites through Reactjs. Then I want to build some  websites with Backend through NodeJs and Mongobd. I want to solve minimum 50+ problem to become an expert in problem solving. As a part of job preparation, I would like to clear the basic concept of JavaScript better.Moreover, my main goal is to prepare myself for a job or internship in a foreign company as a professional web developer.</p>
                <div className="github-link-btn">
                    <a href="https://github.com/alhabib911">GitHub</a>
                </div>

                <div className='site-link'>
                    <h2>Best Project Link</h2>
                    <a href="">Kelong-Group</a>
                    <a href="https://jackson-dental-care.web.app/">jackson-dental</a>
                    <a href=" https://habib-smart-gadget.netlify.app/">smart-gadget</a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;