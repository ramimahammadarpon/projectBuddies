import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const value ={
        name: "Ramim",
        id: 39
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;