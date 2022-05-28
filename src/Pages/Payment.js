import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useOrder from '../hooks/useOrder';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3ByXHhwmW5GAYW3w4MIHBWKCwjW1zyuGIq1ZjLJLCkj4SAGGDBHEqTOOnwFzk4r3LRbuStepmzMacqtI1E455Q00UWFlyFCB');

const Payment = () => {
    const { id } = useParams()
    const [order] = useOrder()
    const singleOrder = order.find((order) => order._id == id)
    console.log(order);

    

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>User Info</th>
                            <th>Product Name</th>
                            <th>Payable Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{id}</th>
                            <td>{singleOrder?.displayName || singleOrder?.email}</td>
                            <td>{singleOrder?.productName}</td>
                            <td>{singleOrder?.quantity * singleOrder?.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
                </div>
                
            </div>
        </div>
    );
};

export default Payment;