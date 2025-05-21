import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;