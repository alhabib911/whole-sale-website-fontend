import React from 'react';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import Products from './Products';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;