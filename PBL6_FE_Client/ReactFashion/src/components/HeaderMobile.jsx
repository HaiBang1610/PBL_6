/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderMobile = () => {

    const [check, setCheck] = useState(false)

    return (
        <div className="header-mobile">
            <div className="header-mobile-left">
                <div className="block-menu-bar">
                    <a className="menu-bar menu-toggle" href="#">
                        <span />
                        <span />
                        <span />
                    </a>
                </div>
                <div className={check ? "header-search akasha-dropdown open":"header-search akasha-dropdown"}>
                    <div className="header-search-inner" onClick={()=>setCheck(!check)} >
                        <a href='#' className="link-dropdown block-link">
                            <span className="flaticon-magnifying-glass-1" />
                        </a>
                    </div>
                    <div className="block-search">
                        <form role="search" method="get" className="form-search block-search-form akasha-live-search-form">
                            <div className="form-content search-box results-search">
                                <div className="inner">
                                    <input autoComplete="off" className="searchfield txt-livesearch input" name="s" placeholder="Search here..." type="text" />
                                </div>
                            </div>
                            <input name="post_type" defaultValue="product" type="hidden" />
                            <input name="taxonomy" defaultValue="product_cat" type="hidden" />
                            <button type="submit" className="btn-submit">
                                <span className="flaticon-magnifying-glass-1" />
                            </button>
                        </form>{/* block search */}
                    </div>
                </div>

            </div>
            <div className="header-mobile-mid">
                <div className="header-logo">
                    <Link to="/"><img alt="Akasha" src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" className="logo" /></Link></div>
            </div>
            <div className="header-mobile-right">
                <div className="header-control-inner">
                    <div className="meta-dreaming">
                        <div className="menu-item block-user block-dreaming akasha-dropdown">
                            <Link className="block-link" to="/auth">
                                <span className="flaticon-profile" />
                            </Link>

                        </div>
                        <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                            <div className="shopcart-dropdown block-cart-link" >
                                <Link className="block-link link-dropdown" to="/cart">
                                    <span className="flaticon-bag" />
                                    <span className="count">3</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;