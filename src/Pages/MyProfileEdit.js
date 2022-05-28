import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';
import { RiPhoneFill } from 'react-icons/ri';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './MyProfileEdit.css'
import { BiEdit } from 'react-icons/bi';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import useUpdateUser from '../hooks/useUpdateUser';



const MyProfileEdit = () => {
    const [updateUser] = useUpdateUser()
    // console.log(updateUser);
    const [user] = useAuthState(auth)
    const { email, img } = user
    console.log(user);
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
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const userInfo = {
                        email: data.email,
                        displayName: data.displayName,
                        phoneNumber: data.phoneNumber,
                        address: data.address,
                        birthday: data.birthday,
                        img: img
                    }
                    // send to your database 
                    const url = `http://localhost:5000/user/${email}`
                    fetch(url, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(email => {
                            if (data.email) {
                                window.location.reload();
                                toast.success('Product Upload successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to upload the product');
                            }
                        })

                }

            })
    }

    return (
        <div>
            <div className="my-profile-container">
                <img className='edit-page-img' src={updateUser?.img} alt="" />
                    <form className='edit-update-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <AiOutlineMail />
                            </label>
                            
                            <input
                                type="email"
                                value={updateUser?.email}
                                readOnly
                                // placeholder="Product Name"
                                className="input border-edit"
                                {...register("email", {
                                    required: {
                                        value: false,
                                        message: 'Name is Required'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                                <GiPlagueDoctorProfile />
                            </label>
                            <input
                                type="text"
                                value={updateUser?.displayName}
                                readOnly
                                // placeholder="Product Description"
                                className="input border-edit"
                                {...register("displayName", {
                                    required: {
                                        value: false,
                                        message: 'Product Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone </span><RiPhoneFill />

                            </label>
                            <input
                                type="number"
                                placeholder='Update Your Phone Number'
                                defaultValue={user?.phoneNumber}
                                className="input border-edit"
                                {...register("phoneNumber", {
                                    required: {
                                        value: false,
                                        message: 'Minimum Order Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Address</span>
                                <MdOutlineLocationOn />
                            </label>
                            <input
                                type="text"
                                placeholder="Update Your Address"
                                className="input border-edit"
                                {...register("address", {
                                    required: {
                                        value: false,
                                        message: 'Available Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Birthday</span><BsFillCalendarDateFill />
                            </label>
                            <input
                                type="date"
                                placeholder="Product Price"
                                className="input border-edit"
                                {...register("birthday", {
                                    required: {
                                        value: false,
                                        message: 'Product Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.birthday?.type === 'required' && <span className="label-text-alt text-red-500">{errors.birthday.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span><MdAddAPhoto />
                            </label>
                            <input
                                type="file"
                                className="input border-edit"
                                {...register("image", {
                                    required: {
                                        value: false,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <div className="upload-btn">
                            <BiEdit/>
                            <input type="submit" value="Upload" />
                        </div>
                    </form>
                    <ToastContainer />

                </div>
        </div>
    );
};

export default MyProfileEdit;