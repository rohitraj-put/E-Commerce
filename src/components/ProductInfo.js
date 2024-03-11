import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductSlider from './ProductSlider'


function ProductInfo() {
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


    return (
        <>
            <Header />

            <div className="container  px-lg-5 my-5 bg-body-secondary">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            style={cardAlign}
                            src={datas.avatar}
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1 text-uppercase">{datas.title}</div>
                        <h1 className="display-5 fw-bolder">{datas.proCateogry}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$ {datas.price} </span><span>70% Off</span><br />
                            <span> $ {datas.price}</span>
                        </div>
                        <p className="lead">
                            {datas.info} Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <div className="d-flex">
                            <input
                                className="form-control text-center me-3"
                                id="inputQuantity"
                                type="num"
                                defaultValue={1}
                                style={{ maxWidth: "3rem" }}
                            />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1" />
                                Add to cart
                            </button>
                            <button className="btn btn-dark flex-shrink-0 mx-3" type="button">
                                <i className="bi-cart-fill me-1" />
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <ProductSlider />

        </>
    )
}

export default ProductInfo