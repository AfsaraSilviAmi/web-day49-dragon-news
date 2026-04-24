import React from 'react';
import NavBar from '../../component/shared/NavBar';

const AuthLayout = ({children}) => {
    return (
        <>
           <NavBar></NavBar> 
           {children}
        </>
    );
};

export default AuthLayout;