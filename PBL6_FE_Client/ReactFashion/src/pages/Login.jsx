/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Layout from '../layouts/Layout';
import authApi from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { notification, Button } from 'antd';

const Login = (props) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        fullName: '',
        phoneNumber: '',
        address: '',
    });

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        authApi
            .login(username, password)
            .then((res) => {
                const { token } = res;
                localStorage.setItem('token', token);
                localStorage.setItem('user', res);

                alert('Đăng nhập thành công');
                navigate('/');
            })
            .catch((e) => alert('Đăng nhập thất bại'));
    };

    const handleRegister = async () => {
        authApi
            .register(newUser)
            .then((res) => {
                setNewUser({
                    email: '',
                    password: '',
                    fullName: '',
                    phoneNumber: '',
                    address: '',
                });

                alert('Đăng kí thành công');
            })
            .catch((e) => {
                alert('Email đã trùng');
            });
    };

    useEffect(() => {
        if (localStorage.getItem('user')) navigate('/');
    }, []);

    return (
        <Layout>
            {/* <Background /> */}
            <main className='site-main  main-container no-sidebar'>
                <div className='container'>
                    <div className='row'>
                        <div className='main-content col-md-12'>
                            <div className='page-main-content'>
                                <div className='akasha'>
                                    <div className='akasha-notices-wrapper' />
                                    <div
                                        className='u-columns col2-set'
                                        id='customer_login'>
                                        <div className='u-column1 col-1'>
                                            <h2>Login</h2>
                                            <form
                                                className='akasha-form akasha-form-login login'
                                                method='post'>
                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='username'>
                                                        Username or email
                                                        adchair&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        name='username'
                                                        id='username'
                                                        value={username}
                                                        onChange={
                                                            handleUsernameChange
                                                        }
                                                        autoComplete='username'
                                                    />
                                                </p>
                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='password'>
                                                        Password&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        type='password'
                                                        name='password'
                                                        id='password'
                                                        value={password}
                                                        onChange={
                                                            handlePasswordChange
                                                        }
                                                        autoComplete='current-password'
                                                    />
                                                </p>
                                                <p className='form-row'>
                                                    <input
                                                        type='hidden'
                                                        id='akasha-login-nonce'
                                                        name='akasha-login-nonce'
                                                        defaultValue='832993cb93'
                                                    />
                                                    <input
                                                        type='hidden'
                                                        name='_wp_http_referer'
                                                        defaultValue='/akasha/my-account/'
                                                    />

                                                    {/* <Button
                                                        type='primary'
                                                        size='large'
                                                        //shape='round'
                                                        onClick={handleLogin}>
                                                        Login
                                                    </Button> */}

                                                    <button
                                                        type='button'
                                                        className='akasha-Button button'
                                                        name='login'
                                                        value='Log in'
                                                        onClick={handleLogin}>
                                                        Log in
                                                    </button>
                                                    <label className='akasha-form__label akasha-form__label-for-checkbox inline'>
                                                        <input
                                                            className='akasha-form__input akasha-form__input-checkbox'
                                                            name='rememberme'
                                                            type='checkbox'
                                                            id='rememberme'
                                                            defaultValue='forever'
                                                        />
                                                        <span>Remember me</span>
                                                    </label>
                                                </p>
                                                <p className='akasha-LostPassword lost_password'>
                                                    <a href='my-account.htmllost-password/index.html'>
                                                        Lost your password?
                                                    </a>
                                                </p>
                                            </form>
                                        </div>
                                        <div className='u-column2 col-2'>
                                            <h2>Register</h2>
                                            <form className='akasha-form akasha-form-register register'>
                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='reg_email'>
                                                        Email&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='email'
                                                        value={newUser.email}
                                                        onChange={(e) =>
                                                            setNewUser({
                                                                ...newUser,
                                                                email: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        autoComplete='email'
                                                        defaultValue
                                                    />
                                                </p>

                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='reg_email'>
                                                        Password&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='password'
                                                        value={newUser.password}
                                                        onChange={(e) =>
                                                            setNewUser({
                                                                ...newUser,
                                                                password:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        autoComplete='email'
                                                        defaultValue
                                                    />
                                                </p>

                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='reg_email'>
                                                        FullName&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        value={newUser.fullName}
                                                        onChange={(e) =>
                                                            setNewUser({
                                                                ...newUser,
                                                                fullName:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        autoComplete='email'
                                                        defaultValue
                                                    />
                                                </p>

                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='reg_email'>
                                                        Phone&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='number'
                                                        value={
                                                            newUser.phoneNumber
                                                        }
                                                        onChange={(e) =>
                                                            setNewUser({
                                                                ...newUser,
                                                                phoneNumber:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        a
                                                    />
                                                </p>

                                                <p className='akasha-form-row akasha-form-row--wide form-row form-row-wide'>
                                                    <label htmlFor='reg_email'>
                                                        Address&nbsp;
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type='text'
                                                        value={newUser.address}
                                                        onChange={(e) =>
                                                            setNewUser({
                                                                ...newUser,
                                                                address:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className='akasha-Input akasha-Input--text input-text'
                                                        autoComplete='email'
                                                        defaultValue
                                                    />
                                                </p>

                                                <div className='akasha-privacy-policy-text'>
                                                    <p>
                                                        Your personal data will
                                                        be used to support your
                                                        experience throughout
                                                        this website, to manage
                                                        access to your account,
                                                        and for other purposes
                                                        described in our{' '}
                                                        <a
                                                            href='#'
                                                            className='akasha-privacy-policy-link'
                                                            target='_blank'>
                                                            privacy policy
                                                        </a>
                                                        .
                                                    </p>
                                                </div>
                                                <p className='akasha-FormRow form-row'>
                                                    <button
                                                        type='button'
                                                        className='akasha-Button button'
                                                        onClick={
                                                            handleRegister
                                                        }>
                                                        Register
                                                    </button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Login;
