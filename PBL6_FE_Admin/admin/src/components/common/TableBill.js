import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Table, Tag, Typography } from 'antd';
import cartApi from '../../api/cartApi';
import helpers from '../../ultis/helpers';

const { Text } = Typography;

TableBill.propTypes = {};

function TableBill(props) {
    const [carts, setCarts] = useState([]);

    const fetchCarts = async () => {
        const data = await cartApi.getAllBills();
        setCarts(data);
    };

    const toggleStatus = async (billId) => {
        console.log('billId: ', billId);
        await cartApi.toggleStatus(billId);
        fetchCarts();
    };

    useEffect(() => {
        fetchCarts();
    }, []);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Total Price',
            dataIndex: 'total',
            key: 'total',
            render: (total) => helpers.parseMoney(total),
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
        },

        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Description',
            dataIndex: 'billDetails',
            key: 'billDetails',
            render: (value, record) =>
                value.map((ele, index) => (
                    <p>
                        {ele.goods.goodsName}({helpers.parseMoney(ele.price)}) x{' '}
                        {ele.quantity} = {helpers.parseMoney(ele.total)}
                    </p>
                )),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (isStatus, record) =>
                isStatus ? (
                    <Tag color='success'>Đã giao</Tag>
                ) : (
                    <Tag color='error'>Chưa giao</Tag>
                ),
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                const { id, status } = record;

                if (status)
                    return (
                        <Button danger onClick={() => toggleStatus(id)}>
                            Chưa giao
                        </Button>
                    );

                return (
                    <Button
                        type='primary'
                        ghost
                        onClick={() => toggleStatus(id)}>
                        Đã giao
                    </Button>
                );
            },
        },
    ];

    return (
        <div
            style={{
                padding: '30px',
                border: '1px solid #e0e5ec',
                borderRadius: '10px',
                background: 'white',
            }}>
            <Divider>Danh sách Hóa đơn</Divider>
            <Table
                dataSource={carts.map((ele, index) => ({
                    ...ele,
                    stt: index + 1,
                }))}
                columns={columns}
                bordered
                pagination={false}
            />
        </div>
    );
}

export default TableBill;
