import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import helpers from '../utils/helpers';
import cartApi from '../api/cartApi';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    let navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gmail, setGmail] = useState('');
    const [note, setNote] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleGmailChange = (e) => {
        setGmail(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const getTotals = () => {
        let total = 0;

        for (const ele of cart) {
            total += ele.item.priceForSaleOff * ele.quantity;
        }

        return total;
    };

    const handleCartSubmit = () => {
        const cartItemDTOs = cart.map((ele) => {
            return {
                itemId: ele.item.idGoods,
                quantity: ele.quantity,
            };
        });

        cartApi
            .saveCart({ name, address, phone, gmail, note, cartItemDTOs })
            .then((res) => {
                localStorage.setItem('cart', JSON.stringify([]));
                alert('Bạn đã đặt hàng thành công');
                navigate('/cart');
            })
            .catch((e) => alert('Sản phẩm không đủ số lượng'));
    };

    useEffect(() => {
        if (!localStorage.getItem('user')) navigate('/auth');
    }, []);

    useEffect(() => {
        const cartTempt = localStorage.getItem('cart');
        setCart(JSON.parse(cartTempt));
    }, []);

    return (
        <Layout>
            <main className='site-main  main-container no-sidebar'>
                <div className='container'>
                    <div className='row'>
                        <div className='main-content col-md-12'>
                            <div className='page-main-content'>
                                <div className='akasha'>
                                    <div className='akasha-notices-wrapper' />

                                    <form
                                        name='checkout'
                                        className='checkout akasha-checkout'
                                        action='#'
                                        encType='multipart/form-data'
                                        noValidate='novalidate'>
                                        <div
                                            className='col2-set'
                                            id='customer_details'>
                                            <div className='col-1'>
                                                <div className='akasha-billing-fields'>
                                                    <h3>Chi tiết hóa đơn</h3>
                                                    <div className='akasha-billing-fields__field-wrapper'>
                                                        <p className='form-row form-row-wide'>
                                                            <label htmlFor='billing_company'>
                                                                Tên
                                                            </label>
                                                            <span className='akasha-input-wrapper'>
                                                                <input
                                                                    type='text'
                                                                    className='input-text '
                                                                    placeholder='Tên'
                                                                    value={name}
                                                                    onChange={
                                                                        handleNameChange
                                                                    }
                                                                />
                                                            </span>
                                                        </p>
                                                        <p className='form-row form-row-wide'>
                                                            <label htmlFor='billing_company'>
                                                                Địa chỉ
                                                            </label>
                                                            <span className='akasha-input-wrapper'>
                                                                <input
                                                                    type='text'
                                                                    className='input-text '
                                                                    placeholder='Địa chỉ'
                                                                    value={
                                                                        address
                                                                    }
                                                                    onChange={
                                                                        handleAddressChange
                                                                    }
                                                                />
                                                            </span>
                                                        </p>
                                                        <p className='form-row form-row-wide'>
                                                            <label htmlFor='billing_company'>
                                                                Số điện thoại
                                                            </label>
                                                            <span className='akasha-input-wrapper'>
                                                                <input
                                                                    type='number'
                                                                    className='input-text '
                                                                    placeholder='Số điện thoại'
                                                                    value={
                                                                        phone
                                                                    }
                                                                    onChange={
                                                                        handlePhoneChange
                                                                    }
                                                                />
                                                            </span>
                                                        </p>
                                                        <p className='form-row form-row-wide'>
                                                            <label htmlFor='billing_company'>
                                                                Gmail
                                                            </label>
                                                            <span className='akasha-input-wrapper'>
                                                                <input
                                                                    type='email'
                                                                    className='input-text '
                                                                    placeholder='gmail'
                                                                    value={
                                                                        gmail
                                                                    }
                                                                    onChange={
                                                                        handleGmailChange
                                                                    }
                                                                />
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className='akasha-shipping-fields'></div>
                                                <div className='akasha-additional-fields'>
                                                    <h3>Thông tin thêm</h3>
                                                    <div className='akasha-additional-fields__field-wrapper'>
                                                        <p
                                                            className='form-row notes'
                                                            id='order_comments_field'
                                                            data-priority>
                                                            <span className='akasha-input-wrapper'>
                                                                <textarea
                                                                    name='order_comments'
                                                                    className='input-text '
                                                                    id='order_comments'
                                                                    value={note}
                                                                    onChange={
                                                                        handleNoteChange
                                                                    }
                                                                    placeholder='Notes about your order, e.g. special notes for delivery.'
                                                                    rows={2}
                                                                    cols={5}
                                                                />
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 id='order_review_heading'>
                                            ĐƠN HÀNG CỦA BẠN
                                        </h3>
                                        <div
                                            id='order_review'
                                            className='akasha-checkout-review-order'>
                                            <table className='shop_table akasha-checkout-review-order-table'>
                                                <thead>
                                                    <tr>
                                                        <th className='product-name'>
                                                            Sản phẩm
                                                        </th>
                                                        <th className='product-total'>
                                                            Tổng số
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map((ele, index) => (
                                                        <tr className='cart_item'>
                                                            <td className='product-name'>
                                                                {
                                                                    ele.item
                                                                        .goodsName
                                                                }
                                                                <strong className='product-quantity'>
                                                                    ×{' '}
                                                                    {
                                                                        ele.quantity
                                                                    }
                                                                </strong>
                                                            </td>
                                                            <td className='product-total'>
                                                                <span className='akasha-Price-amount amount'>
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
                                                <tfoot>
                                                    <tr className='order-total'>
                                                        <th>Tổng</th>
                                                        <td>
                                                            <strong>
                                                                <span className='akasha-Price-amount amount'>
                                                                    {helpers.parseMoney(
                                                                        getTotals()
                                                                    )}
                                                                </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <button
                                                onClick={handleCartSubmit}
                                                class='button alt'
                                                id='place_order'>
                                                Đặt hàng
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Checkout;
