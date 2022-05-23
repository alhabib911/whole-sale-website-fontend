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

    if (user) {
        navigate('/home')
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
            toast('Welcome to Kelong Group');
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
                        loading && <p>Loading...</p>
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
            <ToastContainer/>
        </div>
    );
};

export default Login;