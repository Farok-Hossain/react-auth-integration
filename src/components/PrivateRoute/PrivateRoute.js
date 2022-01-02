import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const { user } = useAuth();
    return (
        <Routes
           {...rest}
           render ={({location}) => user.email ? 
           children :
               <Navigate
           to={{
               pathname: '/login',
               state: {from: location}
           }}
           ></Navigate>
        }
        >
            
        </Routes>
    );
};

export default PrivateRoute;