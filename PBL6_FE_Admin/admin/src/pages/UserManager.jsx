import React, { useEffect } from 'react';
import TableUser from '../components/common/TableUser';
import Table_User from '../components/common/Table_User';
import Layout from '../layout';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }, []);

    return (
        <Layout title='Users Manager'>
            <TableUser />
        </Layout>
    );
};

export default Dashboard;
