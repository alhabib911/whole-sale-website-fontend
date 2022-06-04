import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProducts from '../hooks/useProducts';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import './UpdateProduct.css'

const UpdateProduct = () => {
    
    const { id } = useParams()
    const [product, setProduct] = useProducts()
    // console.log(product);
    const singleProduct = product.find((product) => product._id == id)


    const handelUpdateProduct = event => {
        event.preventDefault()
        const name = event.target.name.value
        const details = event.target.details.value
        const price = event.target.price.value
        const minmumOrder = event.target.minmumOrder.value
        const quantity = event.target.quantity.value
    
        const updateProduct = { name, details, price, minmumOrder, quantity }
        // console.log(updateProduct);
       
    
    
        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Quantity Updated');
                window.location.reload();
                event.target.reset()
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="product-update-details">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src={singleProduct?.img} alt="" />
                    </div>
                </div>
                <form onSubmit={handelUpdateProduct}>
                    <div className='single-product-edit'>
                        <div>
                            <label htmlFor="name">Product Name</label> <br />
                            <input defaultValue={singleProduct?.name} type="text" name="name" id="" />
                        </div>
                        <div>
                            <label htmlFor="productId">Product SKU</label> <br />
                            <input defaultValue={singleProduct?._id} type="text" name="productId" id="" readOnly />
                        </div>
                        <div>
                            <label htmlFor="details">Details</label> <br />
                            <input defaultValue={singleProduct?.details} type="text" name="details" id="" />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label> <br />
                            <input defaultValue={singleProduct?.price} type="text" name="price" id="" />
                        </div>
                        <div>
                            <label htmlFor="minmumOrder">Minimum Order Qyantity</label> <br />
                            <input defaultValue={singleProduct?.minmumOrder} type="text" name="minmumOrder" id="" />
                        </div>
                        <div>
                            <label htmlFor="quantity">Available Quantity</label> <br />
                            <input defaultValue={singleProduct?.quantity} type="text" name="quantity" id="" />
                        </div>
                    </div>
                    <div className="update-profile-btn">
                        <input className='update-product' type="submit" value="Update Product" />
                    </div>
                </form>





            </div>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default UpdateProduct;