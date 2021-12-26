/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helpers from '../utils/helpers';
import cart from '../utils/cart';
import parse from 'html-react-parser';

const InfoProduct = (props) => {
    let navigate = useNavigate();
    const { info } = props;
    const {
        idGoods,
        goodsName,
        image,
        price,
        description = '',
        priceForSaleOff,
    } = info;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityIncrease = () => {
        const tempt = quantity + 1;
        setQuantity(tempt);
    };

    const handleQuantityReduce = () => {
        const tempt = quantity - 1;
        setQuantity(tempt);
    };

    const handleCart = () => {
        cart.addCart(info, quantity);
        navigate('/cart');
    };

    return (
        <div className='main-contain-summary'>
            <div className='contain-left has-gallery'>
                <div className='single-left'>
                    <div className='akasha-product-gallery akasha-product-gallery--with-images akasha-product-gallery--columns-4 images'>
                        <a href='#' className='akasha-product-gallery__trigger'>
                            <img
                                draggable='false'
                                className='emoji'
                                alt='🔍'
                                src='https://s.w.org/images/core/emoji/11/svg/1f50d.svg'
                            />
                        </a>
                        <div className='flex-viewport'>
                            <figure className='akasha-product-gallery__wrapper'>
                                <div className='akasha-product-gallery__image'>
                                    <img alt='img' src={image} />
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='summary entry-summary'>
                    <div className='flash'>
                        <span className='onnew'>
                            <span className='text'>New</span>
                        </span>
                    </div>
                    <h1 className='product_title entry-title'>{goodsName}</h1>
                    <p className='price'>
                        <span className='akasha-Price-amount amount'>
                            <span className='akasha-Price-currencySymbol'></span>
                            {helpers.parseMoney(priceForSaleOff)}
                        </span>
                    </p>
                    <div className='akasha-product-details__short-description'>
                        {parse(description)}
                    </div>
                    <form className='variations_form cart'>
                        <div className='single_variation_wrap'>
                            <div className='akasha-variation single_variation' />
                            <div className='akasha-variation-add-to-cart variations_button'>
                                <div className='quantity'>
                                    <span className='qty-label'>Quantiy:</span>
                                    <div className='control'>
                                        <a
                                            className='btn-number qtyminus quantity-minus'
                                            onClick={handleQuantityReduce}
                                            href='#'>
                                            -
                                        </a>
                                        <input
                                            type='text'
                                            className='input-qty input-texttext'
                                            // pattern='[0-9]*'
                                            // inputMode='numeric'
                                            value={quantity}
                                        />
                                        <a
                                            className='btn-number qtyplus quantity-plus'
                                            onClick={handleQuantityIncrease}
                                            href='#'>
                                            +
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type='button'
                                    className='single_add_to_cart_button button alt'
                                    onClick={handleCart}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='product_meta'>
                        <div className='wcml-dropdown product wcml_currency_switcher'>
                            <ul>
                                <li className='wcml-cs-active-currency'>
                                    <a className='wcml-cs-item-toggle'>USD</a>
                                    <ul className='wcml-cs-submenu'>
                                        <li>
                                            <a>EUR</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <span className='sku_wrapper'>
                            SKU: <span className='sku'>{idGoods}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoProduct;
