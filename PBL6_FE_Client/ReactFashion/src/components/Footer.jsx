import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer style-03">
                <div className="section-001 section-020">
                    <div className="container">
                        <div className="akasha-newsletter style-03">
                            <div className="newsletter-inner">
                               
                                <div className="newsletter-form-wrap">
                                    <div className="newsletter-form-inner">
                                        <input className="email email-newsletter" name="email" placeholder="Enter your email ..." type="email" />
                                        <a href="#" className="button btn-submit submit-newsletter">
                                            <span className="text">Subscribe</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="akasha-socials style-02">
                            <div className="content-socials">
                                <ul className="socials-list">
                                    <li>
                                        <a href="https://facebook.com/" target="_blank">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i className="fa fa-pinterest-p" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-021">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Fashion</p>
                            </div>
                            <div className="col-md-6">
                                <div className="akasha-listitem style-03">
                                    <div className="listitem-inner">
                                        <ul className="listitem-list">
                                            <li>
                                                <a href="#" target="_self">
                                                    Home </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_self">
                                                    Term &amp; Conditions </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_self">
                                                    Shipping </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-device-mobile">
                <div className="wapper">
                    <div className="footer-device-mobile-item device-home">
                        <a href="index.html">
                            <span className="icon">
                                <i className="fa fa-home" aria-hidden="true" />
                            </span>
                            Home
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-wishlist">
                        <a href="wishlist.html">
                            <span className="icon">
                                <i className="fa fa-heart" aria-hidden="true" />
                            </span>
                            Wishlist
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-cart">
                        <a href="cart.html">
                            <span className="icon">
                                <i className="fa fa-shopping-basket" aria-hidden="true" />
                                <span className="count-icon">
                                    0
                                </span>
                            </span>
                            <span className="text">Cart</span>
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-user">
                        <a href="my-account.html">
                            <span className="icon">
                                <i className="fa fa-user" aria-hidden="true" />
                            </span>
                            Account
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" className="backtotop active">
                <i className="fa fa-angle-up" />
            </a>
        </div>

    );
};

export default Footer;