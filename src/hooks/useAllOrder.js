import { useEffect, useState } from 'react';

const useAllOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch('https://secret-sierra-86800.herokuapp.com/manageorder')
        .then(res => res.json())
        .then (data=>setOrder(data))
    },[])
    return [order, setOrder];
};

export default useAllOrder;