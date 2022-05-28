import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({user}) => {
    const{email, role} = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            window.location.reload();
            toast.success("That's great admin added")
        })
    }


    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
            <ToastContainer/>
        </tr>
    );
};

export default UserRow;