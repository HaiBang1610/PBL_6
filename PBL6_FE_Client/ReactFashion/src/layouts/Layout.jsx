import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBarMobile from '../components/SideBarMobile';
import cartLocal from '../utils/cart';
import { Load } from '../utils/load';

const Layout = ({ children }) => {
    useEffect(() => {
        Load();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        //cartLocal.setCart(cart);
    }, []);

    return (
        <div style={{ marginTop: '100px' }}>
            <SideBarMobile />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
