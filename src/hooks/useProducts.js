import { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then (data=>setProduct(data))
    },[])
    return [product, setProduct];
};

export default useProducts;