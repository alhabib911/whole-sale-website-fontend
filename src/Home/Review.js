import React from 'react';
import './Review.css'

const Review = ({ reviews }) => {
    const { rating, review, email, name, img } = reviews
    // console.log(reviews);
    return (
        <div class="box-container ">
            <div className="rev-info">
                <div className="box-img-container">
                    <img className='' src={img} alt="" />
                </div>
                <div className="name-email-box">
                    <h2>Customer Name: {name}</h2>
                    <small>{email}</small>
                </div>
            </div>
            <div class="card-body">
                <p>{review.slice(0, 150)}</p>
                <p>{rating} out of 5</p>
            </div>
        </div>
    );
};

export default Review;