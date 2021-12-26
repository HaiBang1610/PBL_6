import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import {Load} from '../ultis/chuck.109010287356'
const Layout = ({children, title = "Admin"}) => {
    
    useEffect(() => {
        Load()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                            <div className="container-xl px-4">
                                <div className="page-header-content pt-4">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-auto mt-4">
                                            <h1 className="page-header-title">
                                                <div className="page-header-icon"><i data-feather="file" /></div>
                                                {title}
                                            </h1>
                                        </div>
                                        <div className="col-12 col-xl-auto mt-4">Crud</div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* Main page content*/}
                        <div className="container-xl px-4 mt-n10">
                            {/* <div className="card"> */}
                                {children}
                            {/* </div> */}
                        </div>
                    </main>
                    <footer className="footer-admin mt-auto footer-light">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright © TTH 2021</div>
                                <div className="col-md-6 text-md-end small">
                                    <a href="#!">Admin </a>
                            
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    );
};

export default Layout;