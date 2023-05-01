import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;