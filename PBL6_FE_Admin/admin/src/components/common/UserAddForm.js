import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    InputNumber,
    Modal,
    Button,
    Select,
    Upload,
    notification,
} from 'antd';
import goodsApi from '../../api/goodsApi';
import MyEditor from './MyEditor';
import { UploadOutlined } from '@ant-design/icons/lib/icons';

const { Option } = Select;

UserAddForm.propTypes = {};

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

function UserAddForm(props) {
    const { value, onAdd, onVisible } = props;
    const formRef = useRef();

    const onFinish = async (values) => {
        const newUser = {
            ...values.user,
            idUser: value.user.idUser,
        };

        console.log('user: ', newUser);
        onAdd(newUser);
    };

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    return (
        <div>
            <Modal
                title='Update User'
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
                        name={['user', 'fullName']}
                        label='FullName'
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'phoneNumber']}
                        label='Phone Number'
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'address']}
                        label='Address'
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default UserAddForm;