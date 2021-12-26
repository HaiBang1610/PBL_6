import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Modal, Button, Select, Upload } from 'antd';
import goodsApi from '../../api/goodsApi';
import MyEditor from './MyEditor';
import { UploadOutlined } from '@ant-design/icons/lib/icons';

const { Option } = Select;

ProductAddForm.propTypes = {};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function ProductAddForm(props) {
    const { value, onAdd, onVisible } = props;
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const formRef = useRef();
    const [image, setImage] = useState(null);

    const onFinish = async (values) => {
        const newGoods = {
            ...values.goods,
            idGoods: value.goods.idGoods,
            description,
        };

        console.log('newGoods: ', newGoods);
        onAdd(newGoods, image);
    };

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const normFile = (e) => {
        console.log('Upload event:', e.fileList);
        console.log('Upload image:', e.fileList[0]);
        if (Array.isArray(e)) {
            return e;
        }

        setImage(e.fileList[0]);
        return e && e.fileList;
    };

    useEffect(() => {
        goodsApi.getAllCategories().then((res) => setCategories(res));
    }, []);

    return (
        <div>
            <Modal
                title='Add New Goods'
                visible={true}
                width={1000}
                onOk={handleSubmitClick}
                onCancel={() => onVisible(false)}>
                <Form
                    {...layout}
                    name='nest-messages'
                    onFinish={onFinish}
                    initialValues={value}
                    ref={formRef}
                    validateMessages={validateMessages}>
                    <Form.Item
                        name={['goods', 'goodsName']}
                        label='Goods Name'
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['goods', 'price']}
                        label='Price'
                        rules={[{ required: true, type: 'number', min: 0 }]}>
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        name={['goods', 'saleOff']}
                        label='Sale Off'
                        rules={[
                            {
                                required: true,
                                type: 'number',
                                min: 0,
                                max: 100,
                            },
                        ]}>
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        name={['goods', 'quantity']}
                        label='Quantity'
                        rules={[{ required: true, type: 'number', min: 0 }]}>
                        <InputNumber />
                    </Form.Item>

                    {/* <Form.Item
                        name='Image'
                        label='Image'
                        valuePropName='fileList'
                        getValueFromEvent={normFile}>
                        <Upload name='logo' listType='picture'>
                            <Button icon={<UploadOutlined />}>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item> */}

                    <Form.Item>
                        <input type='file' onChange={handleFileChange} />
                    </Form.Item>

                    {/* <Form.Item
                        name={['goods', 'image']}
                        label='Image'
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item> */}

                    <MyEditor
                        content={
                            description ? description : value.goods.description
                        }
                        onChange={(value) => setDescription(value)}
                    />

                    <Form.Item
                        name={['goods', 'idCategory']}
                        label='Category'
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}>
                        <Select placeholder='Select Category'>
                            {categories.map((ele, index) => (
                                <Option value={ele.idCategory}>
                                    {ele.categoryName}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
    );
}

export default ProductAddForm;
