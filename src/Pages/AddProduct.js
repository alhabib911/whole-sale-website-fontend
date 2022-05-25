import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '90e95b3525e50641af585dfcd312cac7'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        details: data.details,
                        minmumOrder: data.minmumOrder,
                        quantity: data.quantity,
                        price: data.price,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'Product Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minmumOrder", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minmumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minmumOrder.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Product Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddProduct;