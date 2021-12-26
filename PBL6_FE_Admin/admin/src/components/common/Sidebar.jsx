/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div id='layoutSidenav_nav'>
            <nav className='sidenav shadow-right sidenav-light'>
                <div className='sidenav-menu'>
                    <div className='nav accordion' id='accordionSidenav'>
                        <div className='sidenav-menu-heading'>Core</div>
                        <a
                            className='nav-link collapsed'
                            href='javascript:void(0);'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseDashboards'
                            aria-expanded='false'
                            aria-controls='collapseDashboards'>
                            <div className='nav-link-icon'>
                                <i data-feather='activity' />
                            </div>
                            Manager
                            <div className='sidenav-collapse-arrow'>
                                <i className='fas fa-angle-down' />
                            </div>
                        </a>
                        <div
                            className='collapse'
                            id='collapseDashboards'
                            data-bs-parent='#accordionSidenav'>
                            <nav
                                className='sidenav-menu-nested nav accordion'
                                id='accordionSidenavPages'>
                                <Link className='nav-link' to='/'>
                                    Dashboard
                                </Link>
                                <Link className='nav-link' to='/ProductManager'>
                                    Product Manager
                                </Link>
                                <Link className='nav-link' to='/UserManager'>
                                    Users Manager
                                </Link>
                                <Link className='nav-link' to='/BillManager'>
                                    Bill Manager
                                </Link>
                                {/* <Link className='nav-link' to='/add'>
                                    Add
                                </Link> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='sidenav-footer'>
                    <div className='sidenav-footer-content'>
                        <div className='sidenav-footer-subtitle'>
                            Logged in as:
                        </div>
                        <div className='sidenav-footer-title'>Admin</div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
