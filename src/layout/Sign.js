import React, { useRef } from 'react'
import './sign.css'
import { NavLink } from 'react-bootstrap'
import Admin from '../AdminPannel/Admin'
import AdminHeader from '../AdminPannel/AdminHeader'
import Header from './Header'

function Sign() {
    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData")
    const getPass = localStorage.getItem("passwordData")

    const submitHandler = () => {

        if (email.current.value === "rohit@gmail.com" && password.current.value === "12345") {
            localStorage.setItem("emailData", "rohit@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
        else {
            alert("please enter currect information")
        }
    }

    return (
        <>

            {
                getEmail && getPass ?
                    <>
                        <AdminHeader />
                        <Admin /> </> :
                    <>
                        <Header />
                        <div className="main-form mt-5">
                            <p className="sign" align="center">Sign in</p>
                            <form className="form1" onSubmit={submitHandler}>
                                <input className="un "
                                    type="email" align="center"
                                    placeholder="Enter Email"
                                    ref={email} />
                                <input className="pass"
                                    type="password" align="center"
                                    placeholder="Password"
                                    ref={password} />
                                <button className="submit" align="center">Sign in</button>
                            </form>
                            <p className="forgot" align="center"><NavLink to="/sign">Forgot Password?</NavLink></p>
                        </div></>
            }
        </>
    )
}

export default Sign