import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductSlider from './ProductSlider'
import Footer from '../layout/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductInfo() {
    const [item, setItem] = useState(1)
    const [datas, setDatas] = useState([])
    const oldPrice = (datas.price)

    const { id, } = useParams()
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
    const increase = () => {
        if (item < 5) {
            setItem(item + 1)
        } else if (item == 5) {
            toast.warning(`Last ${item} Products Sold Out.
            Sorry Guys, Product Not Available.`)
        }


    }
    const decrease = () => {
        if (item > 1) {
            setItem(item - 1)
        }
    }
    const OneUnit = Math.round(((oldPrice / 100) * 30))


    localStorage.setItem("item", item)
    localStorage.setItem("oneUnit", OneUnit)
    localStorage.setItem("ProductName", (datas.proCateogry))

    const addToCart = () => {
        toast.success(`Thankyou..!`)
    }


    return (
        <>
            <ToastContainer />
            <Header />

            <div className="container  px-lg-5" style={{ marginTop: "100px" }}>
                <div className="row gx-4 gx-lg-5 align-items-top">
                    <div className="col-md-6 ">
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
                            <span className="text-decoration-line-through">$ {datas.price}.00 </span><span className='fs-1'>70% Off</span><br />
                            <h2> $ {OneUnit}.00</h2>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <button className='btn btn-outline-dark' onClick={decrease}>-</button>
                                <input
                                    className="form-control text-center mx-3"
                                    type="num"
                                    value={item}
                                    style={{ maxWidth: "4rem" }}
                                    disabled
                                />
                                <button className='btn btn-outline-dark' onClick={increase}>+</button>

                            </div>
                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={addToCart}>
                                <i className="bi-cart-fill me-1" />
                                Add to cart
                            </button>

                        </div>
                        <Link className="btn btn-dark flex-shrink-0 my-3 w-100" to='/payment'> Buy Now </Link>

                        <div>
                            <h3 className='px-4 mt-4'>About this item <strong className='text-danger'>(Demo Text)</strong></h3>
                            <ul>
                                <li className='py-1'>Playback - Enjoy up to 55 hours of music with the powerful battery backup.</li>
                                <li className='py-1'>Fast charge - With the fast-charging feature, you can get 100 minutes of uninterrupted playing time after charging the earbuds for only 10 minutes.</li>
                                <li className='py-1'>Drivers - The enhanced dual 10 mm dynamic drivers make way for immersive sound and clearer calls..</li>
                                <li className='py-1'>IP rating - The earbuds' body comes protected with IPX5 rating for resistance to water and perspiration.</li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >

            <ProductSlider />

            <Footer />

        </>
    )
}

export default ProductInfo