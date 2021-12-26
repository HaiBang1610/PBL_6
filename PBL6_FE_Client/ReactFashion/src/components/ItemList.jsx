/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import helpers from '../utils/helpers';
import cart from '../utils/cart';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ item }) => {
    let navigate = useNavigate();
    const {
        idGoods,
        goodsName,
        price,
        quantity,
        tradeMark,
        saleOff,
        priceForSaleOff,
        image,
        favourite,
        description,
    } = item;

    const handleAddCart = () => {
        cart.addCart(item, 1);
        navigate('/cart');
    };

    return (
        <li
            className='product-item wow fadeInUp product-item rows-space-30 col-bg-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-ts-6 style-01 post-28 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-sofas product_tag-light product_tag-sock  instock sale featured shipping-taxable purchasable product-type-simple'
            data-wow-duration='1s'
            data-wow-delay='0ms'
            data-wow='fadeInUp'>
            <div className='product-inner tooltip-left'>
                <div className='product-thumb'>
                    <Link
                        className='thumb-link'
                        to={`/productDetail/${idGoods}`}>
                        <img
                            className='img-responsive'
                            src={image}
                            alt={goodsName}
                            width={270}
                            height={350}
                        />
                    </Link>
                    <div className='flash'>
                        <span className='onsale'>
                            <span className='number'>-{saleOff}%</span>
                        </span>
                        <span className='onnew'>
                            <span className='text'>New</span>
                        </span>
                    </div>
                    <div className='group-button'>
                        <div className='add-to-cart'>
                            <a
                                style={{ cursor: 'pointer' }}
                                className='button product_type_simple add_to_cart_button ajax_add_to_cart'
                                onClick={handleAddCart}>
                                Add tocart
                            </a>
                        </div>
                        <Link
                            //to='/productDetail'
                            to={`/productDetail/${idGoods}`}
                            className='button yith-wcqv-button'>
                            Quick View
                        </Link>
                    </div>
                </div>
                <div className='product-info'>
                    <h3 className='product-name product_title'>
                        <Link to={`/productDetail/${idGoods}`}>
                            {goodsName}
                        </Link>
                    </h3>
                    <span className='price'>
                        <del>
                            <span className='akasha-Price-amount amount'>
                                {helpers.parseMoney(price)}
                            </span>
                        </del>{' '}
                        <ins>
                            <span className='akasha-Price-amount amount'>
                                {helpers.parseMoney(priceForSaleOff)}
                            </span>
                        </ins>
                    </span>
                    <div className='rating-wapper '>
                        <div className='star-rating'>
                            <span style={{ width: '100%' }}>
                                Rated <strong className='rating'>5.00</strong>{' '}
                                out of 5
                            </span>
                        </div>
                        <span className='review'>(1)</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ItemList;
