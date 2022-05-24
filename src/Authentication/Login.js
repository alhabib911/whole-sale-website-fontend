import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import SocialLogin from '../Authentication/SocialLogin'
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Share/Loading';
import useToken from '../hooks/useToken';


const Login = () => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] =useToken(user)

    if (token) {
        navigate('/home')
        console.log(user);
    }

    const handleEmailBlur = event => {
        SetEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                <Loading></Loading>
            })
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Email Sent');
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="login-page">
                <div className="login-container">
                    <form onSubmit={handleUserSignIn} className="login-area">
                        <label htmlFor="email">Email</label> <br />
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email Please' required /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password Please' required />
                        <br />
                        <br />
                        {
                            loading && <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        }
                        <p className='error'>{error?.message}</p>
                        <input className='submit-button' type="submit" value="Continue" />
                    </form>
                    <div className="forget-button">
                        <button onClick={handlePasswordReset} className='forget-btn'>Forget Your Password?</button>
                    </div>
                    <div className="register-link">
                        <h5>Don't have an Account? <Link to='/register'>Register Now</Link></h5>
                    </div>
                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Login;