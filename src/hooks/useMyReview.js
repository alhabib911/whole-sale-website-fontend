import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyReview = () => {
    const [myReview, setMyReview] = useState([])
    const [user] = useAuthState(auth)
    const { email } = user

    // console.log(updateUser);


            useEffect(()=>{
                fetch(`http://localhost:5000/review?email=${email}`,{
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then (data=>setMyReview(data))
            },[])


return [myReview, setMyReview];
};

export default useMyReview;