import React from 'react'
import { NavLink } from 'react-bootstrap'

function ProductCard(props) {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} {props.proCateogry}</h5>
                    <p className="card-text">{props.info} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/" className="btn btn-warning py-2 fw-bold">Price : ${props.price}</NavLink>
                </div>
            </div>
        </>
    )
}

export default ProductCard