import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


function Header() {
    const [active, setActive] = useState('navbar-toggler-icon')

    const NavToggle = () => {
        active === 'navbar-toggler-icon' ? setActive('navbar-toggler-icon btn-close') : setActive('navbar-toggler-icon')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/">
                        <img src='https://jdkservices.in/wp-content/uploads/2022/09/Myntra_logo.png' style={{ width: "200px", height: "50px" }} alt='logo' />
                    </NavLink>
                    <div className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={active} onClick={NavToggle}></span>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <div className="col-auto d-flex">
                            <input type="text" className="border border-danger rounded-start p-2" id="inputPassword2" placeholder="Search"></input>
                            <i className='border border-danger rounded-end fs-4 px-3'><CiSearch /></i>
                        </div>
                        <NavLink to='#' className="px-3"><button type="button" class="btn btn-outline-danger position-relative">
                            <IoCartOutline />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                2
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button></NavLink>
                        <NavLink to='/sign'><button className="btn btn-outline-danger fw-bold" type="submit">Sign In</button></NavLink>

                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header