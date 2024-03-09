import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



function AdminHeader() {
    const urlNavigate = useNavigate()
    const clickHandler = () => {
        urlNavigate('/sign')
        localStorage.clear()
        window.location.reload()


    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/sign">
                        <img src='https://www.woktron.com/assets/da-logo-large.png' style={{ width: "200px", height: "70px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        <button className="btn btn-outline-danger" onClick={clickHandler}>Log Out</button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader