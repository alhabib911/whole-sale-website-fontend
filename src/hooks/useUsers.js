import { useEffect, useState } from 'react';

const useUsers = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then (data=>setUser(data))
    },[])
    return [user, setUser];
};

export default useUsers;