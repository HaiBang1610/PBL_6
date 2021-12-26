/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderControler from './HeaderControler';
import HeaderMobile from './HeaderMobile';

const Header = () => {

    
    return (
        <header id="header" style={{ position: 'fixed', top: '0' }} className="header style-03 header-dark header-transparent">
            <div className="header-wrap-stick">
                <div className="header-position">
                    <div className="header-middle">
                        <div className="akasha-menu-wapper" />
                        <div className="header-middle-inner">
                            <div className="header-menu">
                                <div className="box-header-nav menu-nocenter">
                                    <ul id="menu-primary-menu" className="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu">
                                        <li id="menu-item-230" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu menu-item-has-children">
                                            <NavLink className="akasha-menu-item-title" title="Home" to="/">Home</NavLink>

                                        </li>
                                        <li id="menu-item-228" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-228 parent parent-megamenu item-megamenu menu-item-has-children">
                                            <NavLink className="akasha-menu-item-title" title="Shop" to="/category">Shop</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="block-menu-bar">
                                    <a className="menu-bar menu-toggle" href="#">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </div>
                            <div className="header-logo">
                                <Link to="/"><img alt="Akasha" src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" className="logo" /></Link></div>
                            <HeaderControler />
                        </div>
                    </div>
                </div>
            </div>
            <HeaderMobile />
        </header>

    );
};

export default Header;