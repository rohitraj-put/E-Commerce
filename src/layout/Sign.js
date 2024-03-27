import React, { useRef } from 'react'
import './sign.css'
import { NavLink } from 'react-bootstrap'
import Admin from '../AdminPannel/Admin'
import AdminHeader from '../AdminPannel/AdminHeader'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'



function Sign() {
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData")
    const getPass = localStorage.getItem("passwordData")

    const submitHandler = (e) => {

        if (email.current.value === "rohit@gmail.com" && password.current.value === "12345") {
            localStorage.setItem("emailData", "rohit@gmail.com")
            localStorage.setItem("passwordData", "12345")
            navigate('/sign/active')


        }
        else {
            e.preventDefault()
            toast.error('your email and password is wrong !')
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
                        <div className="main-form">
                            <p className="sign" align="center">Sign in</p>
                            <form className="form1" onSubmit={submitHandler}>
                                <input className="un "
                                    type="email" align="center"
                                    placeholder="Enter Email"
                                    ref={email} required />

                                <input className="pass"
                                    type="password" align="center"
                                    placeholder="Password"
                                    ref={password} required />
                                <button className="submit" align="center">Sign in <ToastContainer /></button>
                            </form>
                            <p className="forgot" align="center"><NavLink to="/sign">Forgot Password?</NavLink></p>
                        </div>

                    </>

            }
        </>
    )
}

export default Sign