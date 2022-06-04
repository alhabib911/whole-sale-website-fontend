import React from 'react';
import './ManageProduct.css'
// import { AiFillDelete } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

const ManageProduct = (props) => {
    const { _id, img, name, price, quantity, minmumOrder } = props.product
    const handleProductItemDelete = id => {
        const proceed = window.confirm('Do you want to delete this item?')
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                    }
                })
                .then(() => {
                    window.location.reload();
                    toast('This Product is Deleted Reload this page');
                })
        }
    }



    return (
        <div className="manage-product-container">
            <div className='manage-container'>
                <div className="img-name-container">
                    <div className="product-img">

                        <img src={img} alt="" />
                    </div>
                    <div className="product-name">
                        <p>Product Name: {name}</p> <br />
                        <p>Price: US ${price}</p>
                    </div>
                </div>
                <div className="qty-container">
                    <small>Minimum Order: {minmumOrder}/p</small> <br />
                    <small>Available Product: {quantity}/p</small>
                </div>
                <div className='product-del-btn'>
                    <button className="product-delete-button" onClick={() => handleProductItemDelete(_id)}>Delete</button>
                </div>
                <div className="edit-button">
                    <Link to={`/update/${_id}`}>Edit</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageProduct;