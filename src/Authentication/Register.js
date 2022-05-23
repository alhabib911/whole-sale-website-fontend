import React, { useState } from 'react';
import Navbar from '../Share/Navbar'
import Footer from '../Share/Footer'
import './Register.css'
import SocialLogin from '../Authentication/SocialLogin'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/home')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confrimPassword) {
            setError('Your Password did not match')
            return;
        }
        if (password.length < 8) {
            setError('Password must be 8 characthers')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="register-page">
                <div className="register-container">
                    <form onSubmit={handleCreateUser} className='register-area'>
                    <label htmlFor="userName">User Name</label> <br />
                    <input onBlur={handleNameBlur} type="text" placeholder='User Name' required /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required /> <br />
                    <label htmlFor="confirm-password">Confirm Password</label> <br />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm Password' required /> <br />
                        <p className='error-text'>
                            {error}
                        </p>
                        <input className='submit-button' type="submit" value="Register" />
                        <div className="login-link">
                            <h5>Already have an Account?? <Link to='/login'>Login</Link></h5>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;