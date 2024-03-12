import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Payment() {
    const backBtn = useNavigate()
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <div className="row d-flex align-items-baseline">
                            <div className="col-xl-12 d-flex justify-content-between">

                                <Link>
                                    <button className='btn btn-danger' onClick={() => backBtn(-1)}>Back</button>
                                </Link>
                                <p style={{ color: "#7e8d9f", fontSize: 20 }}>
                                    Invoice <strong>ID: #123-123</strong>
                                </p>
                            </div>
                            <hr />
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <i className="fab fa-mdb fa-4x ms-0" style={{ color: "#5d9fc5" }} />
                                    <h2 className="pt-0">Mytra.com</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                    <ul className="list-unstyled">
                                        <li className="text-muted">
                                            To: <span style={{ color: "#5d9fc5" }}>Rohit Rjput</span>
                                        </li>
                                        <li className="text-muted">Street, City</li>
                                        <li className="text-muted">State, Country</li>
                                        <li className="text-muted">
                                            <i className="fas fa-phone" /> 123-456-789
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-4">
                                    <p className="text-muted">Invoice</p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />
                                            <span className="fw-bold">ID:</span>#123-456
                                        </li>
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />
                                            <span className="fw-bold">Creation Date: </span>May 23,2024
                                        </li>
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />
                                            <span className="me-1 fw-bold">Status:</span>
                                            <span className="badge bg-warning text-black fw-bold">
                                                Unpaid
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row my-2 mx-1 justify-content-center">
                                <table className="table table-striped table-borderless">
                                    <thead
                                        style={{ backgroundColor: "#84B0CA" }}
                                        className="text-white"
                                    >
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Pro Package</td>
                                            <td>4</td>
                                            <td>$200</td>
                                            <td>$800</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Web hosting</td>
                                            <td>1</td>
                                            <td>$10</td>
                                            <td>$10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Consulting</td>
                                            <td>1 year</td>
                                            <td>$300</td>
                                            <td>$300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                    <p className="ms-3">Add additional notes and payment information</p>
                                </div>
                                <div className="col-xl-3">
                                    <ul className="list-unstyled">
                                        <li className="text-muted ms-3">
                                            <span className="text-black me-4">SubTotal</span>$1110
                                        </li>
                                        <li className="text-muted ms-3 mt-2">
                                            <span className="text-black me-4">Tax(15%)</span>$111
                                        </li>
                                    </ul>
                                    <p className="text-black float-start">
                                        <span className="text-black me-3"> Total Amount</span>
                                        <span style={{ fontSize: 25 }}>$1221</span>
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-xl-10">
                                    <p>Thank you for your purchase</p>
                                </div>
                                <div className="col-xl-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary text-capitalize"
                                        style={{ backgroundColor: "#60bdf3" }}
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Payment