import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useUpdateUser from '../hooks/useUpdateUser';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { IoIosSave } from 'react-icons/io';
import './MyProfileEdit.css'

const MyProfileEdit = () => {
    const [updateUser] = useUpdateUser()
    const handelUpdateProduct = event => {
        event.preventDefault()
        const email = event.target.email.value
        const displayName = event.target.displayName.value
        const phoneNumber = event.target.phoneNumber.value
        const address = event.target.address.value
        const birthday = event.target.birthday.value

        const userInfo = { email, displayName, phoneNumber, address, birthday }
        // console.log(updateProduct);



        const url = `https://secret-sierra-86800.herokuapp.com/user/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Update Successful');
                window.location.reload();            
                event.target.reset()
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
            <br /><br />
            <form onSubmit={handelUpdateProduct}>
                <div className='single-product-edit'>
                    <div>
                        <label htmlFor="displayName">Name</label> <br />
                        <input defaultValue={updateUser?.displayName} type="text" name="displayName" id="" placeholder='Type Your Name'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input defaultValue={updateUser?.email} type="text" name="email" id="" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label> <br />
                        <input defaultValue={updateUser?.phoneNumber} type="text" name="phoneNumber" id="" placeholder='Update Phone Number'/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label> <br />
                        <input defaultValue={updateUser?.address} type="text" name="address" id="" placeholder='Update Address'/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Date of Birth</label> <br />
                        <input defaultValue={updateUser?.birthday} type="date" name="birthday" id="" />
                    </div>
                </div>
                <div className="update-user-info">
                    <IoIosSave/>
                    <input className='update-user' type="submit" value="Save Change" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default MyProfileEdit;