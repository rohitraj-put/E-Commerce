import React from 'react'
import { NavLink } from 'react-bootstrap'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ProductCard(props) {

    const cardAlign = {
        aspectRatio: "3/2"
    }

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img style={cardAlign} src={props.avatar} className="card-img-top" alt="..." />

                <div className="card-body ">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title text-capitalize">{props.title} {props.proCateogry}</h5>
                        <h5><FaRegHeart /></h5>
                    </div>
                    <p className="card-text text-secondary">{props.info} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex justify-content-between'>
                        <NavLink to="/" className="py-2 fw-bold">
                            <button className='btn btn-danger'>Price : ${props.price}</button>
                        </NavLink>
                        <Link to={props.cardId} className="py-2 fw-bold">
                            <button className='btn btn-outline-danger'>View more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard