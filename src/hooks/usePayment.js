import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const usePayment = () => {
    const { id } = useParams()
    const [payment, setPayment] = useState([])
    useEffect(()=>{
        fetch(`https://secret-sierra-86800.herokuapp.com/order/${id}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then (data=>setPayment(data))
    },[])
    
    return [payment, setPayment]
};

export default usePayment;