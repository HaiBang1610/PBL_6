import React from "react";
import Layout from "../layout";

const Dashboard = () => {
    return (
        <Layout title="Add">
            <div className="row">
                <div className="col-xl-12">
                    {/* Account details card*/}
                    <div className="card mb-4">
                        <div className="card-header">Add Products</div>
                        <div className="card-body">
                            <form>
                                {/* Form Row*/}
                                <div className="row gx-3 col-md-12">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">
                                            Name
                                        </label>
                                        <input className="form-control" type="text" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLastName">
                                            image
                                        </label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1">manufacturer</label>
                                        <input className="form-control" type="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1">Price</label>
                                        <input className="form-control" type="number" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1">unit</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1">Category</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected disabled>
                                                Select a role:
                                            </option>
                                            <option value="administrator">Administrator</option>
                                            <option value="registered">Registered</option>
                                            <option value="edtior">Editor</option>
                                            <option value="guest">Guest</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-0">
                                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                        </div>


                                    </div>
                                </div>

                                <button className="btn btn-primary mt-3" type="button">
                                    Add user
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
