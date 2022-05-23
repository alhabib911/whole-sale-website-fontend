import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='social-login'>
            <FcGoogle></FcGoogle>
            <button> <span>Login with Google</span></button>
        </div>
    );
};

export default SocialLogin;