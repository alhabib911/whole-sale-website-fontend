import React from 'react';
import './MyProfile.css'
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import useUpdateUser from '../hooks/useUpdateUser';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';



const MyProfile = () => {
    const [updateUser] = useUpdateUser()
    return (
        <div>
            <div className="profile-edit-title">
                <div className="title-icon">
                    <GiPlagueDoctorProfile />
                </div>
                <div className="profile-title">
                    <h2> My Profile</h2>
                </div>
            </div>

            <div className="profile-edit-container">
                <div className='user-information'>
                    <br /><br />

                    <div className="profile-info-details">
                        <div><h2>User Name: {updateUser?.displayName}</h2></div>
                        <div><h2>Email: {updateUser?.email}</h2></div>
                        <div><h2>Phone Number: {updateUser?.phoneNumber}</h2></div>
                        <div><h2>Address: {updateUser?.address}</h2></div>
                        <div><h2>Date of Birth: {updateUser?.birthday}</h2></div>
                        <div><h2>Id Number: {updateUser?.birthday}</h2></div>
                    </div>
                </div>
            </div>
            <div className="edit-btn"> <FiEdit />
                <Link to='/dashboard/profile/edit'>Edit</Link>
            </div>
        </div>
    );
};

export default MyProfile;












