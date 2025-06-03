import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user}=useAuth();
    console.log(user);
    if(user || user.email) return children
    return <Navigate to="/login" state={{from:location.pathname}} replace ></Navigate>

};

export default PrivateRoute;