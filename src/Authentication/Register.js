import React, { useState } from 'react';
import Navbar from '../Share/Navbar'
import Footer from '../Share/Footer'
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import useToken from '../hooks/useToken';
import { FcGoogle } from 'react-icons/fc';




const Register = () => {
    const [ setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})


    const [token] = useToken(user || gUser)

    console.log(user);


    const handleNameBlur = event => {
        setDisplayName(event.target.value)
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
    let signInError;

    if (loading || gLoading) {
        return 
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (token) {
        navigate('/home')
        // console.log(token);
    }

   


    const handleCreateUser = async event => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification(auth, email)
            .then(() => {
                toast('Email Sent');
            })
        if (password !== confrimPassword) {
            setError('Your Password did not match')
            return;
        }
        if (password.length < 8) {
            setError('Password must be 8 characthers')
            return;
        }

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="register-page">
                <div className="register-container">
                    <form onSubmit={handleCreateUser} className='register-area'>
                        <label htmlFor="userName">User Name</label> <br />
                        <input onBlur={handleNameBlur} name="displayName" type="text" placeholder='User Name' required /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required /> <br />
                        <label htmlFor="confirm-password">Confirm Password</label> <br />
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm Password' required /> <br />
                        {
                            loading && <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        }
                        {signInError}
                        <input className='submit-button' type="submit" value="Register" />
                        <div className="login-link">
                            <h5>Already have an Account?? <Link to='/login'>Login</Link></h5>
                        </div>
                        <div class="flex flex-col w-full  border-opacity-50">
                            <div class="divider">OR</div>
                            <button
                        onClick={() => signInWithGoogle()}
                        className="google-button btn btn-outline"
                    ><FcGoogle/> <span>Continue with Google</span></button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;