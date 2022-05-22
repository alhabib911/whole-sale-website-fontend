import React from 'react';
import './Product.css'

const Product = (props) => {
    const { _id ,img, name, details, price, quantity } = props.product
    console.log(props);
    
    const handleAddProduct = (_id) => {
        
    }
    return (
        <div className="">
            <div className='card'>
                <img src={img} alt="" />
                <h6>Name: {name}</h6>
                <p><span>Description:</span> {details}</p>
                <p><span>Available Quantity:</span> {quantity}</p>
                <h4>Price: US ${price}</h4>
                <button onClick={() => handleAddProduct (_id)} type="submit">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;