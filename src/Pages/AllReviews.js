import React from 'react';
import Review from '../Home/Review';
import useReview from '../hooks/useReview';
import '../Home/Review.css'

const AllReviews = () => {
    const [reviews] = useReview()
    console.log(reviews);
    return (
        <div className='review-area'>
            <div className="review-title">
                <h2>Client Feedback</h2>
            </div>
            <div className='all-review'>
                {
                    reviews.slice(0, 6).map(reviews => <Review
                        reviews={reviews}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default AllReviews;