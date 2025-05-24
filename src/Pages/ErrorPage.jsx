import React from 'react';
import error from '../assets/error.jpg';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='mt-30 md:mt-10 lg:mt-auto lg:max-w-2xl' src={error} alt="" />
            <Link to="/" className="text-lg py-1.5 w-28 flex justify-center rounded-sm font-medium lg:mr-3 border border-primary text-primary bg-transparent bg-none hover:text-accent hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in overflow-hidden">Go Home</Link>
        </div>
    );
};

export default ErrorPage;