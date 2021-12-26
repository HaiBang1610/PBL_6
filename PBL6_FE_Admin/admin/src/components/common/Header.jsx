/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav
            className='topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white'
            id='sidenavAccordion'>
            <button
                className='btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0'
                id='sidebarToggle'>
                <i data-feather='menu' />
            </button>

            <a
                className='navbar-brand pe-3 ps-4 ps-lg-2'
                onClick={handleLogout}>
                <button>Logout</button>
            </a>

            <form className='form-inline me-auto d-none d-lg-block me-3'>
                <div className='input-group input-group-joined input-group-solid'>
                    <input
                        className='form-control pe-0'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                    />
                    <div className='input-group-text'>
                        <i data-feather='search' />
                    </div>
                </div>
            </form>
        </nav>
    );
};

export default Header;
