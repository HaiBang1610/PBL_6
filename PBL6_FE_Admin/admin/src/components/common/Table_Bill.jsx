import { Button, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import cartApi from '../../api/cartApi';
import helpers from '../../ultis/helpers';

const Table_Bill = () => {
    const [carts, setCarts] = useState([]);

    const fetchCarts = async () => {
        const data = await cartApi.getAllBills();
        setCarts(data);
    };

    const toggleStatus = async (billId) => {
        await cartApi.toggleStatus(billId);
        fetchCarts();
    };

    useEffect(() => {
        fetchCarts();
    }, []);

    return (
        <div className='card'>
            <div className='card-body'>
                <table id='datatablesSimple'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Total Price</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Total Price</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {carts.map((ele, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.address}</td>
                                <td>{helpers.parseMoney(ele.total)}</td>
                                <td>
                                    {ele.createdDate}
                                    <Button
                                        onClick={() => console.log('hello')}>
                                        dsdsa
                                    </Button>
                                </td>
                                <td>
                                    {ele.status ? (
                                        <Tag
                                            color='success'
                                            onClick={() =>
                                                toggleStatus(ele.id)
                                            }>
                                            Đã giao
                                        </Tag>
                                    ) : (
                                        <Tag
                                            color='red'
                                            onClick={() =>
                                                toggleStatus(ele.id)
                                            }>
                                            Chưa giao
                                        </Tag>
                                    )}
                                </td>

                                <td>
                                    {ele.status ? (
                                        <Button
                                            onClick={(e) => console.log('ee')}>
                                            Chưa giao
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() =>
                                                toggleStatus(ele.id)
                                            }>
                                            Đã giao
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table_Bill;
