import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext);

    if(loading) {
        return <div className='min-h-[70vh] flex justify-center items-center'><span className="loading loading-spinner w-12"></span></div>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }

    
};

export default PrivateRoute;