import React from 'react'
import { NavLink } from 'react-router-dom'



function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/">
                        <img src='https://jdkservices.in/wp-content/uploads/2022/09/Myntra_logo.png' style={{ width: "200px", height: "50px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        <button className="btn btn-warning" type="submit"><NavLink to='/sign' style={{ color: "blue" }}>Log In</NavLink></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header