import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import useCustomer from '../../hooks/useCustomer';

const RequireCustomer = ({children}) => {
    const [user, loading] =useAuthState(auth)
    const [customer, customerLoading] = useCustomer(user);
    const location = useLocation();

    if(loading || customerLoading){
        return 
    }

    if(!user || !customer){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireCustomer;