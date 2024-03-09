import React from 'react'
import Header from './Header'

function PageNotFound() {
    return (
        <>
            <Header />
            <div className="col-12">
                <img src='https://images.template.net/94358/dental-404-error-page-49dhg.jpg' alt='page not found image' style={{ width: "100%", height: "87vh", objectFit: "cover" }} />
            </div>
        </>
    )
}

export default PageNotFound