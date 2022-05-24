import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useOrder = () => {
    const [order, setOrder] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/manageorder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }, [user])
    return [order, setOrder];
};

export default useOrder;