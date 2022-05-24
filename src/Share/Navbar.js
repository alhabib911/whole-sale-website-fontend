import React from 'react';
import { Link } from 'react-router-dom';
import logocolor from '../images/logo/logo-color.png'
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <Link to='/'><img className='logo-color' src={logocolor} alt="" /></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal  p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/buynow'>Buy Now</Link></li>
                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                </ul>
            </div>
            <div class="navbar-end">
                {
                    user ?
                        <Link to='/login' onClick={handleSignOut}><BiLogOut /><span>Log Out</span></Link>
                        :
                        <Link to='/login'><RiAccountPinCircleFill /><span>Login/Register</span></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;









