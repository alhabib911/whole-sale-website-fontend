import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './MyProfile.css'
import { BiEdit } from 'react-icons/bi';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import useUpdateUser from '../hooks/useUpdateUser';
import { Link } from 'react-router-dom';


const MyProfile = () => {
    const [updateUser] = useUpdateUser()
    // console.log(updateUser);
    const [user] = useAuthState(auth)
    const { email } = user
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
                    const url = `https://secret-sierra-86800.herokuapp.com/user/${email}`
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
            <div className="profile-edit-title">
                <div className="title-icon">
                    <GiPlagueDoctorProfile />
                </div>
                <div className="profile-title">
                    <h2> Edit Profile</h2>
                </div>
            </div>
            <div className="profile-edit-container">
                <div className='user-information'>
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={updateUser.img} />
                        </div>
                    </div>

                    <div className="profile-info-details">
                        <div><h2>User Name: {updateUser.displayName}</h2></div>
                        <div><h2>Email: {updateUser.email}</h2></div>
                        <div><h2>Phone Number: {updateUser.phoneNumber}</h2></div>
                        <div><h2>Address: {updateUser.address}</h2></div>
                        <div><h2>Date of Birth: {updateUser.birthday}</h2></div>
                    </div>
                </div>
            </div>
            <div className="edit-btn"> <BiEdit/>
                <Link to='/dashboard/profile/edit'>Edit</Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyProfile;


