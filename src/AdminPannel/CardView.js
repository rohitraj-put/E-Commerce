import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

function CardView() {
    const { id } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://65e3567b88c4088649f5a918.mockapi.io/ecommerce/${id}`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const cardAlign = {
        aspectRatio: "3/2"
    }


    return (
        <>
            <div className="card m-auto my-5" style={{ width: '18rem' }}>
                <img style={cardAlign} src={posts.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{posts.title} {posts.proCateogry}</h5>
                    <p className="card-text text-secondary">{posts.info} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex justify-content-between'>
                        <NavLink to="/" className="py-2 fw-bold">
                            <button className='btn btn-dark'>Price : ${posts.price}</button>
                        </NavLink>
                        <NavLink to="/" className="py-2 fw-bold">
                            <button className='btn btn-dark'>Add <FaShoppingCart /></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardView