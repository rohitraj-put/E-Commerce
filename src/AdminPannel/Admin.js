import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";


function Admin() {
    const backBtn = useNavigate()

    return (
        <>
            <div className='row container-fluid d-flex flex-wrap  justify-content-center'>
                <div className='col col-3 bg-body-tertiary border border-warning'>
                    <div className="list-group mt-5 p-5 fs-4 active">
                        <button className='btn btn-outline-success px-4 mb-4' onClick={() => backBtn(-1)}>
                            <IoChevronBack />&nbsp;&nbsp;&nbsp;  Back
                        </button>
                        <Link to='active'>Active</Link>
                        <Link to='insert'>Insert</Link>
                        <Link to='view'>View</Link>
                        <Link to='update'>Update</Link>
                        <Link to='suspend'>Suspend</Link>

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