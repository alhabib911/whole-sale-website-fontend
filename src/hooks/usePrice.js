import { useEffect, useState } from 'react';

const usePrice = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [price, setPrice] = useState([])


    useEffect(() =>{
            fetch('https://secret-sierra-86800.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({price}) 
            })
            .then(res =>res.json())
            .then(data=>{
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret)
                }
            })
    
        },[price])
    return [price, setPrice];
};

export default usePrice;