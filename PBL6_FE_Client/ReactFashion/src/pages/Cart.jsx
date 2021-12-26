/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import helpers from '../utils/helpers';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const getTotals = () => {
        let total = 0;

        for (const ele of cart) {
            total += ele.item.priceForSaleOff * ele.quantity;
        }

        return total;
    };

    const handleQuantityIncrease = async (itemId) => {
        const cartTempt = [...cart];
        const cartItem = cartTempt.find((ele) => ele.item.idGoods == itemId);
        cartItem.quantity += 1;

        localStorage.setItem('cart', JSON.stringify(cartTempt));
        setCart(cartTempt);
    };

    const handleQuantityReduce = (itemId) => {
        const cartTempt = [...cart];
        const cartItem = cartTempt.find((ele) => ele.item.idGoods == itemId);

        if (cartItem.quantity <= 1) return;

        cartItem.quantity -= 1;

        localStorage.setItem('cart', JSON.stringify(cartTempt));
        setCart(cartTempt);
    };

    const handleItemRemove = (itemId) => {
        const cartTempt = cart.filter((ele) => ele.item.idGoods !== itemId);
        localStorage.setItem('cart', JSON.stringify(cartTempt));
        setCart(cartTempt);
    };

    useEffect(() => {
        const cartTempt = localStorage.getItem('cart');
        setCart(JSON.parse(cartTempt));
    }, []);

    return (
        <Layout>
            <main className='site-main main-container no-sidebar'>
                <div className='container'>
                    <div className='row'>
                        <div className='main-content col-md-12'>
                            <div className='page-main-content'>
                                <div className='akasha'>
                                    <div className='akasha-notices-wrapper' />
                                    <form className='akasha-cart-form'>
                                        <table
                                            className='shop_table shop_table_responsive cart akasha-cart-form__contents'
                                            cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th className='product-remove'>
                                                        &nbsp;
                                                    </th>
                                                    <th className='product-thumbnail'>
                                                        &nbsp;
                                                    </th>
                                                    <th className='product-name'>
                                                        Product
                                                    </th>
                                                    <th className='product-price'>
                                                        Price
                                                    </th>
                                                    <th className='product-quantity'>
                                                        Quantity
                                                    </th>
                                                    <th className='product-subtotal'>
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((ele, index) => (
                                                    <tr
                                                        key={index}
                                                        className='akasha-cart-form__cart-item cart_item'>
                                                        <td className='product-remove'>
                                                            <a
                                                                onClick={() =>
                                                                    handleItemRemove(
                                                                        ele.item
                                                                            .idGoods
                                                                    )
                                                                }
                                                                href='#'
                                                                className='remove'
                                                                aria-label='Remove this item'
                                                                data-product_id={
                                                                    ele.item
                                                                        .idGoods
                                                                }
                                                                data-product_sku={
                                                                    ele.item
                                                                        .idGoods
                                                                }>
                                                                ×
                                                            </a>
                                                        </td>
                                                        <td className='product-thumbnail'>
                                                            <a href='#'>
                                                                <img
                                                                    src={
                                                                        ele.item
                                                                            .image
                                                                    }
                                                                    className='attachment-akasha_thumbnail size-akasha_thumbnail'
                                                                    alt='img'
                                                                    width={600}
                                                                    height={778}
                                                                />
                                                            </a>
                                                        </td>
                                                        <td
                                                            className='product-name'
                                                            data-title='Product'>
                                                            <a href='#'>
                                                                {
                                                                    ele.item
                                                                        .goodsName
                                                                }
                                                            </a>
                                                        </td>
                                                        <td
                                                            className='product-price'
                                                            data-title='Price'>
                                                            <span className='akasha-Price-amount amount'>
                                                                {helpers.parseMoney(
                                                                    ele.item
                                                                        .priceForSaleOff
                                                                )}
                                                            </span>
                                                        </td>
                                                        <td
                                                            className='product-quantity'
                                                            data-title='Quantity'>
                                                            <div className='quantity'>
                                                                <span className='qty-label'>
                                                                    Quantiy:
                                                                </span>
                                                                <div className='control'>
                                                                    <a
                                                                        onClick={() =>
                                                                            handleQuantityReduce(
                                                                                ele
                                                                                    .item
                                                                                    .idGoods
                                                                            )
                                                                        }
                                                                        className='btn-number qtyminus quantity-minus'
                                                                        href='#'>
                                                                        -
                                                                    </a>
                                                                    <input
                                                                        type='text'
                                                                        value={
                                                                            ele.quantity
                                                                        }
                                                                        className='input-qty input-text text'
                                                                    />
                                                                    <a
                                                                        onClick={() =>
                                                                            handleQuantityIncrease(
                                                                                ele
                                                                                    .item
                                                                                    .idGoods
                                                                            )
                                                                        }
                                                                        className='btn-number qtyplus quantity-plus'
                                                                        href='#'>
                                                                        +
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td
                                                            className='product-subtotal'
                                                            data-title='Total'>
                                                            <span className='akasha-Price-amount amount'>
                                                                <span className='akasha-Price-currencySymbol'>
                                                                    $
                                                                </span>
                                                                {helpers.parseMoney(
                                                                    ele.item
                                                                        .priceForSaleOff *
                                                                        ele.quantity
                                                                )}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className='cart-collaterals'>
                                        <div className='cart_totals '>
                                            <h2>Cart totals</h2>
                                            <table
                                                className='shop_table shop_table_responsive'
                                                cellSpacing={0}>
                                                <tbody>
                                                    <tr className='cart-subtotal'>
                                                        <th>Subtotal</th>
                                                        <td data-title='Subtotal'>
                                                            <span className='akasha-Price-amount amount'>
                                                                <span className='akasha-Price-currencySymbol'>
                                                                    $
                                                                </span>
                                                                {helpers.parseMoney(
                                                                    getTotals()
                                                                )}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className='order-total'>
                                                        <th>Total</th>
                                                        <td data-title='Total'>
                                                            <strong>
                                                                <span className='akasha-Price-amount amount'>
                                                                    <span className='akasha-Price-currencySymbol'>
                                                                        $
                                                                    </span>
                                                                    {helpers.parseMoney(
                                                                        getTotals()
                                                                    )}
                                                                </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='akasha-proceed-to-checkout'>
                                                <Link
                                                    to='/checkout'
                                                    className='checkout-button button alt akasha-forward'>
                                                    Proceed to checkout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Cart;
