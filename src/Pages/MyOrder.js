import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
;
;

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    console.log(order);
    useEffect(() => {
        const getItem = async () => {

            const email = user.email
            const url = `https://secret-sierra-86800.herokuapp.com/manageorders?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrder(data)
        }
        getItem()
    }, [user])
    return (
        <div>
            <h4>{user?.displayName || user?.email} Uploaded Product: {order?.length}</h4>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Order Qty</th>
                                <th>Price</th>
                                <th>Payable `Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(order => <tr>
                                    <th>{order?.name}</th>
                                    <td>{order?.qty}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.price * order?.qty}</td>
                                    <td></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
      

        </div>
    );
};

export default MyOrder;