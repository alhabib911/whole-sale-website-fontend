import React from 'react';
import ManageProduct from './ManageProduct';
import useProducts from '../hooks/useProducts';
import './ManageProducts.css'


const ManageProducts = () => {
    const [product] = useProducts();



    return (
        <div className='Admin-product-manage'>
            <h2>Manage Product</h2>
            <div className="manage-product-table">
                {
                    product.map(product => <ManageProduct
                        product={product}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;