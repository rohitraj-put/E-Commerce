import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

    const cards = posts.map(post =>
        <>
            <div className="profile-img">
                <img src={post.avatar} />
            </div>
            <h2>{post.title}</h2>
            <div className="description">
                {post.info}
            </div>
            <div className="social">
                <a >GitHub</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
            </div>
            <button>$ {post.price}</button>
            <footer>
                <div className="likes">
                    <p>cateogry: {post.proCateogry}</p>
                </div>
                <div className="projects">
                    <p>{post.info}</p>
                </div>
            </footer></>)
    return (
        <>
            <div id="login-container">
                {
                    cards
                }
            </div>
        </>
    )
}

export default CardView