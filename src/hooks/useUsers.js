import { useEffect, useState } from 'react';

const useUsers = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://secret-sierra-86800.herokuapp.com/',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return [user, setUser];
};

export default useUsers;