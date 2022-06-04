import { useEffect, useState } from 'react';

const useAllOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/manageorder')
        .then(res => res.json())
        .then (data=>setOrder(data))
    },[])
    return [order, setOrder];
};

export default useAllOrder;