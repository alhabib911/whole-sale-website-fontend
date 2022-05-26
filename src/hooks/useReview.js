import { useEffect, useState } from "react";


const useReview = () => {
    
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review',{
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