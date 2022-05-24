import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';
import UserRow from './UserRow';


const Users = () => {
    const [user] = useUsers()

    return (
        <div>
            <h2>Total Users: {user?.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            user.map(user => <UserRow
                                key={user?._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;  