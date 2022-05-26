import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
// import useUpdateUser from "./useUpdateUser";


const useMyReview = () => {
    const [myReview, setMyReview] = useState([])
    const [user] = useAuthState(auth)
    const { email } = user

    // console.log(updateUser);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/review?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                        Navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    myReview(data)
                })
        }
    }, [user])


return [myReview, setMyReview];
};

export default useMyReview;