import React, { useEffect } from 'react';
import TableBill from '../components/common/TableBill';
import Table_Bill from '../components/common/Table_Bill';
import Layout from '../layout';
import { useNavigate } from 'react-router-dom';

const BillManager = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }, []);

    return (
        <Layout title='Bill Manager'>
            {/* <Table_Bill /> */}

            <TableBill />
        </Layout>
    );
};

export default BillManager;
