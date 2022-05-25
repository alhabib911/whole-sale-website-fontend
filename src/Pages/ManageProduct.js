import React from 'react';
import './ManageProduct.css'
// import { AiFillDelete } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';

const ManageProduct = (props) => {
    const { _id, img, name, price, quantity, minmumOrder } = props.product
    const handleProductItemDelete = id => {
        const proceed = window.confirm('Do you want to delete this item?')
        if(proceed){
            console.log('delete', id);
            const url = `http://localhost:5000/product/${id}`
            console.log(url);
            fetch (url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    console.log('deleted');
                }
            })
            .then(() => {
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
                <div className="product-delete-button">
                    <button onClick={()=> handleProductItemDelete(_id)}>X </button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ManageProduct;