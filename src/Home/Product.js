import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import { GiShoppingCart } from 'react-icons/gi';

const Product = (props) => {
    const { _id ,img, name, details, price, quantity, minmumOrder } = props.product
    // console.log(props);
    const navigete = useNavigate()
    const handleAddProduct = (_id) => {
        navigete ( `/buynow/${_id}`)
    }
    return (
        <div>
            <div className='card'>
                <img src={img} alt="" />
                <h6>Name: {name}</h6>
                <h5><span>Description:</span> <small>{details}</small></h5>
                <p>Min Order Quantity: <span>{minmumOrder}</span>/pcs</p>
                <p>Available Quantity: <span>{quantity}</span>/pcs</p>
                <h4>Price: US ${price}</h4>
                <button onClick={() => handleAddProduct (_id)} type="submit"><GiShoppingCart/><small>Buy Now</small></button>
            </div>
        </div>
    );
};

export default Product;