import { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then (data=>setProduct(data))
    },[])
    return [product, setProduct];
};

export default useProducts;