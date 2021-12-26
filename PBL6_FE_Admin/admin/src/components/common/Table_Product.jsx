import React, { useEffect, useState } from 'react';

import goodsApi from '../../api/goodsApi';
import helpers from '../../ultis/helpers';

const Table_Product = () => {
    const [goods, setGoods] = useState([]);

    const fetchGoods = async () => {
        const datas = await goodsApi.getAllGoods();
        setGoods(datas);
    };

    useEffect(() => {
        fetchGoods();
    }, []);

    return (
        <div className='card'>
            <div className='card-body'>
                <table id='datatablesSimple'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>SaleOff</th>
                            <th>PriceForSaleOff</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>SaleOff</th>
                            <th>PriceForSaleOff</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {goods.map((ele, index) => (
                            <tr onClick={() => console.log('đâ')}>
                                <td>{index + 1}</td>
                                <td>{ele.goodsName}</td>
                                <td>{helpers.parseMoney(ele.price)}</td>
                                <td>{ele.saleOff}</td>
                                <td>
                                    {helpers.parseMoney(ele.priceForSaleOff)}
                                </td>
                                <td>{ele.quantity}</td>
                                <td onClick={() => console.log('dad')}>
                                    {ele.description}
                                </td>

                                <td>
                                    <button
                                        onClick={() => console.log('ds')}
                                        className='btn btn-datatable btn-icon btn-transparent-dark me-2'>
                                        <i data-feather='more-vertical' />
                                    </button>
                                    <button
                                        onClick={() => console.log('ds')}
                                        className='btn btn-datatable btn-icon btn-transparent-dark'>
                                        <i data-feather='trash-2' />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* <tr>
                            <td>Jena Gaines</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                            <td>2008/12/19</td>
                            <td>$90,560</td>
                            <td>
                                <div className='badge bg-primary text-white rounded-pill'>
                                    Full-time
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-datatable btn-icon btn-transparent-dark me-2'>
                                    <i data-feather='more-vertical' />
                                </button>
                                <button className='btn btn-datatable btn-icon btn-transparent-dark'>
                                    <i data-feather='trash-2' />
                                </button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table_Product;
