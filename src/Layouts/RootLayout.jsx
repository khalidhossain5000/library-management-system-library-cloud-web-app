import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='overflow-x-hidden'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;