import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({user}) => {
    const{email, role} = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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

    const handleUserDelete = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            // console.log('delete', id);
            const url = `http://localhost:5000/user/${email}`
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
                    toast('This user is Deleted');
                })
        }
    }

    


    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={handleUserDelete} class="btn btn-xs">Remove User</button></td>
            <ToastContainer/>
        </tr>
    );
};

export default UserRow;