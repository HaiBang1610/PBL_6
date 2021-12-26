import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Table, Tag, Typography, notification } from 'antd';

import userApi from '../../api/userApi';
import { EditOutlined } from '@ant-design/icons';
import UserAddForm from './UserAddForm';
import axiosClient from '../../api/axiosClient';

const { Text } = Typography;

TableUser.propTypes = {};

function TableUser(props) {
    const [users, setUsers] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState({ user: {} });

    const handleLockUser = async (userId) => {
        console.log('userUser');
        await userApi.toggleLockUser(userId);
        await fetchUsers();
    };

    const fetchUsers = async () => {
        const data = await userApi.getAllUsers();
        setUsers(data);
    };

    const handleUpdate = async (value) => {
        try {
            await axiosClient.put(`/user/edit/${value.idUser}`, value);
            fetchUsers();
            setIsVisible(false);
            openNotificationWithIcon('success', 'Update user thành công');
        } catch (err) {
            openNotificationWithIcon('error', 'Update user thất bại');
        }
    };

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: 'Thông báo',
            description: message,
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (isStatus, record) => {
                if (record.role === 'Admin') return '';

                if (isStatus) return <Tag color='success'>Kích hoạt</Tag>;
                else <Tag color='error'>Chưa kích hoạt</Tag>;
            },
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (roleName, record) =>
                roleName === 'Admin' ? (
                    <Tag color='error'>Admin</Tag>
                ) : (
                    <Tag color='success'>User</Tag>
                ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                const { idUser, status } = record;

                if (record.role === 'Admin') return '';

                if (status)
                    return (
                        <Button danger onClick={() => handleLockUser(idUser)}>
                            Không kích hoạt
                        </Button>
                    );

                return (
                    <Button
                        type='primary'
                        ghost
                        onClick={() => handleLockUser(idUser)}>
                        Kích hoạt
                    </Button>
                );
            },
        },

        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            render: (_, record) => {
                return (
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setValue({ user: record });
                            setIsVisible(true);
                        }}></Button>
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
            <Divider>Danh sách User</Divider>
            <Table
                dataSource={users.map((ele, index) => ({
                    ...ele,
                    stt: index + 1,
                }))}
                columns={columns}
                bordered
                pagination={false}
            />

            {isVisible && (
                <UserAddForm
                    value={value}
                    onVisible={setIsVisible}
                    onAdd={handleUpdate}
                />
            )}
        </div>
    );
}

export default TableUser;