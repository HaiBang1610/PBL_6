/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderControler = () => {
    const [show, setShow] = useState(false);
    const cart = JSON.parse(localStorage.getItem('cart'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <div className='header-control'>
            <div className='header-control-inner'>
                <div className='meta-dreaming'>
                    <div
                        className={
                            show
                                ? 'header-search akasha-dropdown open'
                                : 'header-search akasha-dropdown'
                        }>
                        {localStorage.getItem('user') && (
                            <button onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                    <div
                        className='akasha-dropdown-close'
                        onClick={() => setShow(!show)}>
                        x
                    </div>
                    <div className='menu-item block-user block-dreaming akasha-dropdown'>
                        <Link className='block-link' to='/auth'>
                            <span className='flaticon-profile' />
                        </Link>
                    </div>
                    <div className='block-minicart block-dreaming akasha-mini-cart akasha-dropdown'>
                        <div
                            className='shopcart-dropdown block-cart-link'
                            data-akasha='akasha-dropdown'>
                            <Link
                                className='block-link link-dropdown'
                                to='/cart'>
                                <span className='flaticon-bag' />
                                <span className='count'>{cart.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderControler;
