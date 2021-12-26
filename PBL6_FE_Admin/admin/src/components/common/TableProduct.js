import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Divider,
    Space,
    Table,
    Tag,
    Typography,
    Image,
    notification,
} from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import goodsApi from '../../api/goodsApi';
import helpers from '../../ultis/helpers';
import ProductAddForm from './ProductAddForm';

const { Text } = Typography;

TableProduct.propTypes = {};

const defaultValue = {
    goods: {
        idGoods: 0,
        goodsName: '',
        price: 0,
        saleOff: 0,
        quantity: 0,
        image: '',
        description: '',
        idCategory: 1,
    },
};

function TableProduct(props) {
    const [goods, setGoods] = useState([]);
    const [value, setValue] = useState(defaultValue);
    const [isVisible, setIsVisible] = useState(false);

    const fetchGoods = async () => {
        const datas = await goodsApi.getAllGoods();
        setGoods(datas);
    };

    const handleGoodsAdd = async (newGoods, imageValue) => {
        try {
            const { idGoods } = await goodsApi.saveGoods(newGoods);
            const formData = new FormData();
            if (imageValue) {
                await formData.append('file', imageValue);

                for (var key of formData.entries()) {
                    console.log(key[0] + ', ' + key[1]);
                }
                await goodsApi.uploadImage(idGoods, formData);
            }
            setIsVisible(false);
            fetchGoods();
            openNotificationWithIcon('success', 'Update sản phẩm thành công');
        } catch (err) {
            openNotificationWithIcon('error', 'Update sản phẩm thất bại');
        }
    };

    const handleDelete = async (goodsId) => {
        try {
            await goodsApi.deleteGoods(goodsId);
            fetchGoods();
            openNotificationWithIcon('success', 'Xóa sản phẩm thành công');
        } catch (err) {
            openNotificationWithIcon(
                'error',
                'Xóa sản phẩm thất bại bởi vì sản phẩm đã được mua'
            );
        }
    };

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: 'Thông báo',
            description: message,
        });
    };

    useEffect(() => {
        fetchGoods();
    }, []);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Name',
            dataIndex: 'goodsName',
            key: 'goodsName',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (value) => helpers.parseMoney(value),
        },
        {
            title: 'SaleOff',
            dataIndex: 'saleOff',
            key: 'saleOff',
            render: (value) => `${value} %`,
        },
        {
            title: 'PriceForSaleOff',
            dataIndex: 'priceForSaleOff',
            key: 'priceForSaleOff',
            render: (value) => helpers.parseMoney(value),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },

        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (value) => <Image src={value} height={50} />,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div>
                        <Space>
                            <Button
                                icon={<EditOutlined />}
                                onClick={() => {
                                    setValue({ goods: record });
                                    setIsVisible(true);
                                }}></Button>

                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() =>
                                    handleDelete(record.idGoods)
                                }></Button>
                        </Space>
                    </div>
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
            <Button
                type='primary'
                ghost
                icon={<AppstoreAddOutlined />}
                onClick={() => {
                    setValue(defaultValue);
                    setIsVisible(true);
                }}>
                Thêm sản phẩm
            </Button>
            <Divider>Danh sách Sản phẩm</Divider>
            <Table
                dataSource={goods.map((ele, index) => ({
                    ...ele,
                    stt: index + 1,
                }))}
                columns={columns}
                bordered
                pagination={true}
            />

            {isVisible && (
                <ProductAddForm
                    value={value}
                    onAdd={handleGoodsAdd}
                    onVisible={setIsVisible}
                />
            )}
        </div>
    );
}

export default TableProduct;
