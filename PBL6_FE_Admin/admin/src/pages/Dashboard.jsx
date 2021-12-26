/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
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
        <Layout title='Dashboard'>
            <div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-12 mb-4'>
                        <div className='card h-100'>
                            <div className='card-body h-100 p-5'>
                                <div className='row align-items-center'>
                                    <div className='col-xl-8 col-xxl-12'>
                                        <div className='text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4'>
                                            <h1 className='text-primary'>
                                                Welcome Admin!
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-xxl-12 text-center'>
                                        <img
                                            className='img-fluid'
                                            src='assets/img/illustrations/at-work.svg'
                                            style={{ maxWidth: '26rem' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-6 mb-4'>
                        <div className='card card-header-actions h-100'>
                            <div className='card-header'>
                                Recent Activity
                                <div className='dropdown no-caret'>
                                    <button
                                        className='btn btn-transparent-dark btn-icon dropdown-toggle'
                                        id='dropdownMenuButton'
                                        type='button'
                                        data-bs-toggle='dropdown'
                                        aria-haspopup='true'
                                        aria-expanded='false'>
                                        <i
                                            className='text-gray-500'
                                            data-feather='more-vertical'
                                        />
                                    </button>
                                    <div
                                        className='dropdown-menu dropdown-menu-end animated--fade-in-up'
                                        aria-labelledby='dropdownMenuButton'>
                                        <h6 className='dropdown-header'>
                                            Filter Activity:
                                        </h6>
                                        <a className='dropdown-item' href='#!'>
                                            <span className='badge bg-green-soft text-green my-1'>
                                                Commerce
                                            </span>
                                        </a>
                                        <a className='dropdown-item' href='#!'>
                                            <span className='badge bg-blue-soft text-blue my-1'>
                                                Reporting
                                            </span>
                                        </a>
                                        <a className='dropdown-item' href='#!'>
                                            <span className='badge bg-yellow-soft text-yellow my-1'>
                                                Server
                                            </span>
                                        </a>
                                        <a className='dropdown-item' href='#!'>
                                            <span className='badge bg-purple-soft text-purple my-1'>
                                                Users
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='timeline timeline-xs'>
                                    {/* Timeline Item 1*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                27 min
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-green' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            New order placed!
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                Order #2912
                                            </a>
                                            has been successfully placed.
                                        </div>
                                    </div>
                                    {/* Timeline Item 2*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                58 min
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-blue' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            Your
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                weekly report
                                            </a>
                                            has been generated and is ready to
                                            view.
                                        </div>
                                    </div>
                                    {/* Timeline Item 3*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                2 hrs
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-purple' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            New user
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                Valerie Luna
                                            </a>
                                            has registered
                                        </div>
                                    </div>
                                    {/* Timeline Item 4*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                1 day
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-yellow' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            Server activity monitor alert
                                        </div>
                                    </div>
                                    {/* Timeline Item 5*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                1 day
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-green' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            New order placed!
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                Order #2911
                                            </a>
                                            has been successfully placed.
                                        </div>
                                    </div>
                                    {/* Timeline Item 6*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                1 day
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-purple' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            Details for
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                Marketing and Planning Meeting
                                            </a>
                                            have been updated.
                                        </div>
                                    </div>
                                    {/* Timeline Item 7*/}
                                    <div className='timeline-item'>
                                        <div className='timeline-item-marker'>
                                            <div className='timeline-item-marker-text'>
                                                2 days
                                            </div>
                                            <div className='timeline-item-marker-indicator bg-green' />
                                        </div>
                                        <div className='timeline-item-content'>
                                            New order placed!
                                            <a
                                                className='fw-bold text-dark'
                                                href='#!'>
                                                Order #2910
                                            </a>
                                            has been successfully placed.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-6 mb-4'>
                        <div className='card card-header-actions h-100'>
                            <div className='card-header'>
                                Progress Tracker
                                <div className='dropdown no-caret'>
                                    <button
                                        className='btn btn-transparent-dark btn-icon dropdown-toggle'
                                        id='dropdownMenuButton'
                                        type='button'
                                        data-bs-toggle='dropdown'
                                        aria-haspopup='true'
                                        aria-expanded='false'>
                                        <i
                                            className='text-gray-500'
                                            data-feather='more-vertical'
                                        />
                                    </button>
                                    <div
                                        className='dropdown-menu dropdown-menu-end animated--fade-in-up'
                                        aria-labelledby='dropdownMenuButton'>
                                        <a className='dropdown-item' href='#!'>
                                            <div className='dropdown-item-icon'>
                                                <i
                                                    className='text-gray-500'
                                                    data-feather='list'
                                                />
                                            </div>
                                            Manage Tasks
                                        </a>
                                        <a className='dropdown-item' href='#!'>
                                            <div className='dropdown-item-icon'>
                                                <i
                                                    className='text-gray-500'
                                                    data-feather='plus-circle'
                                                />
                                            </div>
                                            Add New Task
                                        </a>
                                        <a className='dropdown-item' href='#!'>
                                            <div className='dropdown-item-icon'>
                                                <i
                                                    className='text-gray-500'
                                                    data-feather='minus-circle'
                                                />
                                            </div>
                                            Delete Tasks
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <h4 className='small'>
                                    Server Migration
                                    <span className='float-end fw-bold'>
                                        20%
                                    </span>
                                </h4>
                                <div className='progress mb-4'>
                                    <div
                                        className='progress-bar bg-danger'
                                        role='progressbar'
                                        style={{ width: '20%' }}
                                        aria-valuenow={20}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className='small'>
                                    Sales Tracking
                                    <span className='float-end fw-bold'>
                                        40%
                                    </span>
                                </h4>
                                <div className='progress mb-4'>
                                    <div
                                        className='progress-bar bg-warning'
                                        role='progressbar'
                                        style={{ width: '40%' }}
                                        aria-valuenow={40}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className='small'>
                                    Customer Database
                                    <span className='float-end fw-bold'>
                                        60%
                                    </span>
                                </h4>
                                <div className='progress mb-4'>
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        style={{ width: '60%' }}
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className='small'>
                                    Payout Details
                                    <span className='float-end fw-bold'>
                                        80%
                                    </span>
                                </h4>
                                <div className='progress mb-4'>
                                    <div
                                        className='progress-bar bg-info'
                                        role='progressbar'
                                        style={{ width: '80%' }}
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className='small'>
                                    Account Setup
                                    <span className='float-end fw-bold'>
                                        Complete!
                                    </span>
                                </h4>
                                <div className='progress'>
                                    <div
                                        className='progress-bar bg-success'
                                        role='progressbar'
                                        style={{ width: '100%' }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                            <div className='card-footer position-relative'>
                                <div className='d-flex align-items-center justify-content-between small text-body'>
                                    <a
                                        className='stretched-link text-body'
                                        href='#!'>
                                        Visit Task Center
                                    </a>
                                    <i className='fas fa-angle-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Example Colored Cards for Dashboard Demo*/}
                <div className='row'>
                    <div className='col-lg-6 col-xl-3 mb-4'>
                        <div className='card bg-primary text-white h-100'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='me-3'>
                                        <div className='text-white-75 small'>
                                            Earnings (Monthly)
                                        </div>
                                        <div className='text-lg fw-bold'>
                                            $40,000
                                        </div>
                                    </div>
                                    <i
                                        className='feather-xl text-white-50'
                                        data-feather='calendar'
                                    />
                                </div>
                            </div>
                            <div className='card-footer d-flex align-items-center justify-content-between small'>
                                <a
                                    className='text-white stretched-link'
                                    href='#!'>
                                    View Report
                                </a>
                                <div className='text-white'>
                                    <i className='fas fa-angle-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-3 mb-4'>
                        <div className='card bg-warning text-white h-100'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='me-3'>
                                        <div className='text-white-75 small'>
                                            Earnings (Annual)
                                        </div>
                                        <div className='text-lg fw-bold'>
                                            $215,000
                                        </div>
                                    </div>
                                    <i
                                        className='feather-xl text-white-50'
                                        data-feather='dollar-sign'
                                    />
                                </div>
                            </div>
                            <div className='card-footer d-flex align-items-center justify-content-between small'>
                                <a
                                    className='text-white stretched-link'
                                    href='#!'>
                                    View Report
                                </a>
                                <div className='text-white'>
                                    <i className='fas fa-angle-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-3 mb-4'>
                        <div className='card bg-success text-white h-100'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='me-3'>
                                        <div className='text-white-75 small'>
                                            Task Completion
                                        </div>
                                        <div className='text-lg fw-bold'>
                                            24
                                        </div>
                                    </div>
                                    <i
                                        className='feather-xl text-white-50'
                                        data-feather='check-square'
                                    />
                                </div>
                            </div>
                            <div className='card-footer d-flex align-items-center justify-content-between small'>
                                <a
                                    className='text-white stretched-link'
                                    href='#!'>
                                    View Tasks
                                </a>
                                <div className='text-white'>
                                    <i className='fas fa-angle-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-3 mb-4'>
                        <div className='card bg-danger text-white h-100'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='me-3'>
                                        <div className='text-white-75 small'>
                                            Pending Requests
                                        </div>
                                        <div className='text-lg fw-bold'>
                                            17
                                        </div>
                                    </div>
                                    <i
                                        className='feather-xl text-white-50'
                                        data-feather='message-circle'
                                    />
                                </div>
                            </div>
                            <div className='card-footer d-flex align-items-center justify-content-between small'>
                                <a
                                    className='text-white stretched-link'
                                    href='#!'>
                                    View Requests
                                </a>
                                <div className='text-white'>
                                    <i className='fas fa-angle-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
