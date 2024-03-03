import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Admin() {

    return (
        <>


            <div className='row container-fluid d-flex flex-wrap  justify-content-center'>
                <div className='col col-3 bg-body-tertiary border border-warning'>
                    <div className="list-group mt-5 p-5 fs-4 active">
                        <Link to='active'>Active</Link>
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