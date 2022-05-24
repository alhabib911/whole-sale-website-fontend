import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const handleGoogleSignIn =() => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user =result.user
        })
        .catch(error =>{
            console.log(error);
        })
        .then(() => {
            toast('Thank You for signin');
        })
    }
    if(user) {
        navigate('/home')
    }
    return (
        
        <div className='social-login'>
            <FcGoogle></FcGoogle>
            <button onClick={handleGoogleSignIn}> 
            <span>Login with Google</span></button>
            <ToastContainer/>
        </div>
    );
};

export default SocialLogin;