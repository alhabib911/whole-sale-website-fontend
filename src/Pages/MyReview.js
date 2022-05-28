import React from 'react';
import { toast } from 'react-toastify';
import useMyReview from '../hooks/useMyReview';
import useUpdateUser from '../hooks/useUpdateUser';
import './MyReview.css'


const MyReview = () => {
  const [updateUser] = useUpdateUser('')
  // const [reviews] = useReview('')
  // console.log(updateUser);
  const [myReview] = useMyReview()
  console.log(myReview);
  const handelAddReview = event => {
    event.preventDefault()
    const rating = event.target.rating.value
    const review = event.target.review.value
    const email = event.target.email.value
    const name = event.target.name.value
    const img = event.target.img.value


    const userReviews = { rating, review, name, email, img }

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userReviews)
    })
      .then(res => res.json())
      .then(() => {
        window.location.reload();
        toast('Thanks for your feedback');
        event.target.reset()
      })
  }



  return (
    <div>
      <div className="create-reating-field">
        <div className="user-info">
          <div class="avata ">
            <div class=" rounded-full">
              <img src={updateUser.img} />
            </div>
          </div>
          <div className="user-details">
            <h2>User Name: {updateUser.displayName}</h2>
            <h2>Email: {updateUser.email}</h2>
            <h2>Phone Number: {updateUser.phoneNumber}</h2>
            <h2>Address: {updateUser.address}</h2>
            <h2>Date of Birth: {updateUser.birthday}</h2>
          </div>
        </div>
        <div className="user-review-field">
          <form onSubmit={handelAddReview} className='feedback'>
            <div className="star">
              <div class="rating">
                <input type="radio" name="rating" class="mask mask-star" />
                <input type="radio" name="rating" class="mask mask-star" checked />
                <input type="radio" name="rating" class="mask mask-star" />
                <input type="radio" name="rating" class="mask mask-star" />
                <input type="radio" name="rating" class="mask mask-star" />
              </div>
            </div>
            <textarea className='review' name="review" id="" ></textarea> <br />
            <input type="hidden" value={updateUser.img} name="img" id="" />
            <input type="hidden" value={updateUser.email} name="email" id="" />
            <input type="hidden" value={updateUser.displayName} name="name" id="" />
            <input className='feedback-button' type="submit" value="Feedback" />
          </form>





        </div>
      </div>
      <div className="my-review">



        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>User</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {
                myReview.map(myReview => <tr>
                  <td>{myReview.email}</td>
                  <td className='revirw-details'>{myReview.review.slice(0, 100)}...</td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;