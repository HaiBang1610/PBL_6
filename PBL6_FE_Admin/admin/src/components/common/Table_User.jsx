import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import userApi from '../../api/userApi';

const Table_User = () => {
    const [users, setUsers] = useState([]);

    const handleLockUser = async (userId) => {
        console.log('userUser');
        await userApi.toggleLockUser(userId);
        await fetchUsers();
    };

    const fetchUsers = async () => {
        const data = await userApi.getAllUsers();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='card'>
            <div className='card-body'>
                <table id='datatablesSimple'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Trạng thái</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>STT</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Trạng thái</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {users.map((ele, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.fullName}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phoneNumber}</td>
                                <td>{ele.address}</td>
                                <td>
                                    {ele.status ? 'Actived' : 'Not Actived'}
                                </td>
                                <td>{ele.role}</td>

                                <td>
                                    <button className='btn btn-datatable btn-icon btn-transparent-dark me-2'>
                                        <i data-feather='more-vertical' />
                                    </button>
                                    <button
                                        className='btn btn-datatable btn-icon btn-transparent-dark'
                                        onClick={() => console.log('hello')}>
                                        <i
                                            data-feather='trash-2'
                                            onClick={() => console.log('ds')}
                                        />
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

export default Table_User;
