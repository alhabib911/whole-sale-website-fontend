import React from 'react';
import AllReviews from '../Pages/AllReviews';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import Achivement from './Achivement';
import Banner from './Banner';
import Products from './Products';
import SecoundBanner from './SecoundBanner';
import TopBanner from './TopBanner';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <Products></Products>
            <SecoundBanner></SecoundBanner>
            <Achivement></Achivement>
            <AllReviews></AllReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;