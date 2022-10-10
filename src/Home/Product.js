import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import { GiShoppingCart } from 'react-icons/gi';

const Product = (props) => {
    const { _id, img, name, details, price, quantity, minmumOrder } = props.product
    // console.log(props);
    const navigete = useNavigate()
    const handleAddProduct = (_id) => {
        navigete(`/buynow/${_id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <img className='w-full' src={img} alt="" />
                <div class="card-body">
                    <h2 class="card-title">
                        Name: {name}
                    </h2>
                    <h4>Price: US ${price}</h4>
                    <p>{details.slice(0, 70)}</p>
                    <div class="card-actions justify-end">
                        <p>Min Order Quantity: <span>{minmumOrder}</span>/pcs</p>
                        <p>Available Quantity: <span>{quantity}</span>/pcs</p>
                        
                    </div>
                        <button onClick={() => handleAddProduct(_id)} type="submit"><GiShoppingCart /><small>Buy Now</small></button>
                </div>
            </div>
        </div>
    );
};

export default Product;