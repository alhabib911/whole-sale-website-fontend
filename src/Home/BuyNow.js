import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useProducts from '../hooks/useProducts';
import { MdDeliveryDining } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import './Buynow.css'
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';
import { AiOutlineMail } from 'react-icons/ai'
import { RiPhoneFill } from 'react-icons/ri'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify';


const BuyNow = () => {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    console.log(quantity);


    const handelIncrement = () => {
        if (quantity < singleProduct.quantity) {
            setQuantity(prevCount => parseInt(prevCount) + 1)
        }
        else {
            toast('Your Purchase limit is over')
        }
    }

    const handelDecrement = () => {
        if (quantity > singleProduct.minmumOrder) {
            setQuantity(prevCount => prevCount - 1)
        }
        else {
            toast('Please add minimum quantity')
        }
    }


    const handelAdOrder = event => {
        event.preventDefault()
        const productName = event.target.productName.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const quantity = event.target.quantity.value
        const userName = event.target.userName.value
        const price = event.target.price.value


        const order = { productName, email, phone, address, quantity, userName, price }

        fetch('http://localhost:5000/manageorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(() => {
                toast('Order Placed');
                // event.target.reset()
            })
            .then(() => {
                if (user) {
                    navigate('/dashboard/myorder')
                }
            })

    }


    


    const [user] = useAuthState(auth)
    // console.log(user);
    const { id } = useParams()
    // console.log(id);
    const [product] = useProducts()
    const singleProduct = product.find((product) => product._id == id)

    return (
        <div>
            <Navbar></Navbar>
            <div className="product-item-details">
                <div className='_id-product'>
                    <div className="_id-product-image">
                        <img src={singleProduct?.img} alt="" />
                    </div>
                    <div className="_id-product-details">
                        <h4>{singleProduct?.name}</h4>
                        <p>Description: {singleProduct?.details} </p>
                        <p>Minimum Order: {singleProduct?.minmumOrder}</p>
                        <p>Product Available: {singleProduct?.quantity}</p>
                        <h3>Price: US ${singleProduct?.price}</h3>
                        <br />
                    </div>
                    <div className="_id-product-delivery-notice">
                        <p className='delivery-title'>Delivery:</p>
                        <div className="home-delivery">
                            <div className="delivery-icon">
                                <MdDeliveryDining />
                            </div>
                            <p> Home Delivery: Free <br /> <span>Only inside in Dhaka</span></p>
                        </div>
                        <p className='delivery-time'>2-10 Days</p>
                        <div className="cash-on-delivery">
                            <BsCashCoin />
                            <p>Cash On Delivery Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex flex-col w-full border-opacity-50">
                <div class="divider">------------------------</div>
            </div>

            <div className="order-container">
                <div className="order-form-title">
                    <h2>Proceed to Shipping</h2>
                </div>
                <div className="order-form">
                    <div className="order-form-area">
                        <form onSubmit={handelAdOrder} className='form-container'>
                            <div className="product-area">
                                <input type='hidden' name="price" value={singleProduct?.price} id="" readOnly></input>
                                <input type="hidden" name="userName" id="" value={user?.displayName} readOnly />
                            </div>
                            <div className="product-area">
                                <p>Product Name:</p><textarea name="productName" value={singleProduct?.name} id="" readOnly></textarea>
                            </div>
                            <div className="email-area">
                                <div className="email-title">
                                    <h2>Email:</h2>
                                    <AiOutlineMail></AiOutlineMail>
                                </div>
                                <div className="user-email">
                                    <input type="email" name="email" id="" value={user?.email} readOnly />
                                </div>
                            </div> <br />
                            <div className="email-area">
                                <div className="email-title">
                                    <h2>Phone:</h2>
                                    <RiPhoneFill></RiPhoneFill>
                                </div>
                                <div className="user-phone">
                                    <input type="number" name="phone" id="" placeholder='+880example@123' required />
                                </div>
                            </div> <br />
                            <div className="email-area">
                                <div className="email-title">
                                    <h2>Address:</h2>
                                    <MdOutlineLocationOn></MdOutlineLocationOn>
                                </div>
                                <div className="user-address">
                                    <input type="text" name="address" id="" placeholder='Road- 1, House- 6, Bonani, Dhaka- 1227' />
                                </div>
                            </div> <br />
                            <div className="email-area">
                                <div className="email-title">
                                    <h2>Quantity:</h2>
                                    <div className="qty-icon">
                                        <MdProductionQuantityLimits />Pcs
                                    </div>
                                </div>
                                <div className="product-quantity">
                                    <button onClick={handelDecrement} className='decrement-button'>-</button>

                                    <input type="text" value={quantity} onChange={event => setQuantity(event.target.value)} name="quantity" id="" placeholder='100/p' />
                                    <button onClick={handelIncrement} className='increment-button'>+</button>
                                </div>
                            </div> <br />
                            <div className="submit-btn">
                                <div className="buy-now-icon">
                                    <GiShoppingCart />
                                </div>
                                <div className="buy-now-submit-button">
                                    <input type="submit" value="Buy Now" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default BuyNow;

