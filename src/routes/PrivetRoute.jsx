import React, { useContext } from 'react';
import { AuthContext } from '../pages/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Spinner animation='border'></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;