import React from 'react';

const Register = () => {
    return (
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container-xl px-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    {/* Basic registration form*/}
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header justify-content-center"><h3 className="fw-light my-4">Create Account</h3></div>
                                        <div className="card-body">
                                            {/* Registration form*/}
                                            <form>
                                                {/* Form Row*/}
                                                <div className="row gx-3">
                                                    <div className="col-md-6">
                                                        {/* Form Group (first name)*/}
                                                        <div className="mb-3">
                                                            <label className="small mb-1" htmlFor="inputFirstName">First Name</label>
                                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Enter first name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        {/* Form Group (last name)*/}
                                                        <div className="mb-3">
                                                            <label className="small mb-1" htmlFor="inputLastName">Last Name</label>
                                                            <input className="form-control" id="inputLastName" type="text" placeholder="Enter last name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Form Group (email address)            */}
                                                <div className="mb-3">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                    <input className="form-control" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                                </div>
                                                {/* Form Row    */}
                                                <div className="row gx-3">
                                                    <div className="col-md-6">
                                                        {/* Form Group (password)*/}
                                                        <div className="mb-3">
                                                            <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                            <input className="form-control" id="inputPassword" type="password" placeholder="Enter password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        {/* Form Group (confirm password)*/}
                                                        <div className="mb-3">
                                                            <label className="small mb-1" htmlFor="inputConfirmPassword">Confirm Password</label>
                                                            <input className="form-control" id="inputConfirmPassword" type="password" placeholder="Confirm password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Form Group (create account submit)*/}
                                                <a className="btn btn-primary btn-block" href="auth-login-basic.html">Create Account</a>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center">
                                            <div className="small"><a href="auth-login-basic.html">Have an account? Go to login</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer-admin mt-auto footer-dark">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright © TTH</div>
                                <div className="col-md-6 text-md-end small">
                                    <a href="#!">Admin </a>
                                    ·
                                    <a href="#!"> Vitra &amp; Travel</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

    );
};

export default Register;