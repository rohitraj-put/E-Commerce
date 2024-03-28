import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment() {
    const backBtn = useNavigate()

    const CancelPay = () => {
        backBtn(-1)
    }
    const getItemValue = localStorage.getItem("item")
    const oneUnit = localStorage.getItem("oneUnit")
    const price = Math.floor(getItemValue * oneUnit)
    const ProductName = localStorage.getItem("ProductName")

    const totalTex = Math.round(((price / 100) * 3))

    const totalPrice = price + totalTex

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const showTime = current.getHours()
        + ':' + current.getMinutes()
        + ":" + current.getSeconds();

    return (
        <>

            <div className="card">
                <h2 className='text-center text-danger mt-3 '>Sorry, user payment method is disabled !</h2>
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <div className="row d-flex align-items-baseline">
                            <div className="col-xl-12 d-flex justify-content-between">

                                <Link>
                                    <button className='btn btn-outline-danger' onClick={CancelPay}> Cancel <IoMdClose /><ToastContainer /></button>
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
                                    <h2 className="pt-0"><img src='https://jdkservices.in/wp-content/uploads/2022/09/Myntra_logo.png' alt='logo' style={{ width: "200px", height: "50px" }} />.com</h2>
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
                                            <span className="fw-bold">Creation Date: </span>{date} {showTime}
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
                                            <td>{ProductName}</td>
                                            <td>{getItemValue}</td>
                                            <td>${oneUnit}.00</td>
                                            <td>${price}.00</td>
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
                                            <span className="text-black me-4">SubTotal</span>${price}.00
                                        </li>
                                        <li className="text-muted ms-3 mt-2">
                                            <span className="text-black me-4">Tax(3%)</span>  &nbsp;&nbsp;&nbsp;&nbsp;${totalTex}.00
                                        </li>

                                    </ul>
                                    <p className="text-black float-start">
                                        <span className="text-black me-3"> Total Amount</span>
                                        <span style={{ fontSize: 25 }}>${totalPrice}.00</span>
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
                                        className="btn btn-success text-capitalize" disabled

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