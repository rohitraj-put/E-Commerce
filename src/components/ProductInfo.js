import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductSlider from './ProductSlider'


function ProductInfo() {
    const [item, setItem] = useState(1)
    const [datas, setDatas] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://65e3567b88c4088649f5a918.mockapi.io/ecommerce/${id}`)
            .then(res => {
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const cardAlign = {
        aspectRatio: "3/2.5"
    }

    if (setItem < 1) {
        alert("hello")
    }



    return (
        <>
            <Header />

            <div className="container  px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-4 mb-md-0"
                            style={cardAlign}
                            src={datas.avatar}
                            alt="..."

                        />
                    </div>

                    <div className="col-md-6">

                        <h1 className="display-5 fw-bolder">{datas.proCateogry}</h1>

                        <p className="lead">
                            {datas.info} Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <div className="fs-5 mb-5">
                            <div className="small mb-1 text-uppercase">{datas.title}</div>
                            <span className="text-decoration-line-through">$ {datas.price} </span><span className='fs-1'>70% Off</span><br />
                            <h2> $ {datas.price}</h2>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <button className='btn btn-outline-dark' onClick={() => setItem(item - 1)}>-</button>
                                <input
                                    className="form-control text-center mx-3"
                                    id="inputQuantity"
                                    type="num"
                                    Value={item}
                                    style={{ maxWidth: "4rem" }}
                                    disabled
                                />
                                <button className='btn btn-outline-dark' onClick={() => setItem(item + 1)}>+</button>

                            </div>
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1" />
                                Add to cart
                            </button>

                        </div>
                        <Link className="btn btn-dark flex-shrink-0 my-3 w-100" to='/payment'> Buy Now </Link>
                    </div>
                </div >
            </div >
            <ProductSlider />

        </>
    )
}

export default ProductInfo