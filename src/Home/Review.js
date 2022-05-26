import React from 'react';
import './Review.css'

const Review = ({ reviews }) => {
    const { rating, review, email, name } = reviews
    return (
        <div class="box-container ">
            <h2>Customer Name: {name}</h2>
            <small>{email}</small>
            <div class="card-body">
                <p>{review.slice(0, 20)}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default Review;