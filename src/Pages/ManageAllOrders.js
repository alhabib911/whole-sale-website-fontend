import React from 'react';
import useAllOrder from '../hooks/useAllOrder';

const ManageAllOrders = () => {
    const [allOrder] = useAllOrder()
    console.log(allOrder);
    return (
        <div>
            <h2>Customer All Order</h2>
            Total Order: {allOrder?.length}
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Product Name</th>
                                <th>Amount</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.map(allOrder => <tr>
                                    <th>{allOrder?.email || allOrder?.userName}</th>
                                    <td>{allOrder?.name}</td>
                                    <td>{allOrder?.price * allOrder?.qty}</td>
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

export default ManageAllOrders;