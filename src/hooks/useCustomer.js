import { useEffect, useState } from "react"

const useCustomer = user => {
    const [customer, setCustomer] = useState(false);
    const [customerLoading, setCustomerLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/customer/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setCustomer(data.customer);
                setCustomerLoading(false);
            })
        }
    }, [user])

    return [customer, customerLoading]
}

export default useCustomer;