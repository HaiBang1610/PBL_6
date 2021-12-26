/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMobile = () => {
    return (
        <div className="akasha-menu-clone-wrap">
            <div className="akasha-menu-panels-actions-wrap">
                <a className="akasha-menu-close-btn akasha-menu-close-panels" href="#">x</a>
            </div>
            <div className="akasha-menu-panels">
                <div id="akasha-menu-panel-main" className="akasha-menu-panel akasha-menu-panel-main">
                    <ul className="depth-01">
                        <li className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu menu-item-has-children clone-menu-item">
                            <Link className="akasha-menu-item-title"  to="/">Home</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu menu-item-has-children clone-menu-item">
                            <Link className="akasha-menu-item-title" to="/category">Shop</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default SideBarMobile;