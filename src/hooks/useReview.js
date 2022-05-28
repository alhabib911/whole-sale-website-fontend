import { useEffect, useState } from "react";


const useReview = () => {
    
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://secret-sierra-86800.herokuapp.com/review',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setReviews(data))
    },[])
    
    return [reviews, setReviews]
};

export default useReview;