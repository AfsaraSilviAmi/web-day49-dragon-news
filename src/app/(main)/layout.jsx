import React from 'react';
import Header from '../../component/shared/Header';
import NavBar from '../../component/shared/NavBar';
import BreakingNews from '@/component/shared/BreakingNews';

const MainLayout = ({children}) => {
    return (
        <>
           <Header></Header> 
           <BreakingNews></BreakingNews>
           <NavBar></NavBar>
           {children}
        </>
    );
};

export default MainLayout;