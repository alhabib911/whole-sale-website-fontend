import React from 'react';
import { Link } from 'react-router-dom';
import useOrder from '../hooks/useOrder';
import { AiTwotoneDelete } from 'react-icons/ai';
import './MyOrder.css'

const MyOrder = () => {
    const [order] = useOrder()
    console.log(order);
    return (
        <div>
            <h2>Total Order: {order.length}</h2>
            <div class="">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Ammount</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(order => <tr>
                                <th>{order.userName || order.email.slice(0, 10)}...</th>
                                <td>{order.productName.slice(0, 30)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity * order.price}</td>
                                <td>{(order.quantity * order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button>Pay Now</button></Link>}</td>
                                <td className='delete-button'><AiTwotoneDelete/></td>
                                <td>{(order.quantity * order.price && order.paid) && <Link to={``}><span>Pay Now</span></Link>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;