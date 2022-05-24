import React from 'react';
import useOrder from '../hooks/useOrder';

const MyOrder = () => {
    const [order] = useOrder()
    console.log(order);
    return (
        <div>
            <h2>Tptal my Order: {order.length}</h2>
            <div class="">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Ammount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(order=> <tr>
                                <th>{order.userName || order.email}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}/pcs</td>
                                <td>US ${order.price }</td>
                                <td>US ${order.quantity * order.price }</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;