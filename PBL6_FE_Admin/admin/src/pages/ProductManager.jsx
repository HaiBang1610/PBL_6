import React, { useEffect } from 'react';
import TableProduct from '../components/common/TableProduct';
import Table_Product from '../components/common/Table_Product';
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
        <Layout title='Products Manager'>
            {/* <Table_Product /> */}
            <TableProduct />
        </Layout>
    );
};

export default Dashboard;
