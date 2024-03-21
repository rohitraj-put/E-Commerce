import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";


function Admin() {
    const backBtn = useNavigate()

    return (
        <>
            <div className='row container-fluid d-flex flex-wrap  justify-content-center'>
                <div className='col col-3 bg-body-tertiary border border-start-0 border-danger'>
                    <div className="list-group mt-5 p-5 fs-4 active">
                        <button className='btn btn-outline-success px-4 mb-4' onClick={() => backBtn(-1)}>
                            <IoChevronBack />&nbsp;&nbsp;&nbsp;  Back
                        </button>

                        <Link to='active'><button className='mt-2 btn btn-outline-danger px-5'>Active &nbsp;</button></Link>
                        <Link to='insert'><button className='mt-2 btn btn-outline-danger px-5'>Insert &nbsp;</button></Link>
                        <Link to='view'><button className='mt-2 btn btn-outline-danger px-5'>View &nbsp; &nbsp;</button></Link>
                        <Link to='update'><button className='mt-2 btn btn-outline-danger px-5'>Update</button></Link>
                        <Link to='suspend'><button className='mt-2 btn btn-outline-danger px-5'>Delete&nbsp;</button></Link>

                    </div>
                </div>
                <div className='col col-9 '>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Admin