import React, { useEffect, useState } from 'react'
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-bootstrap';
import axios from 'axios';
import { FaShoppingCart } from "react-icons/fa";

function ProductSlider() {
    const [datas, setDatas] = useState([])

    const cardAlign = {
        aspectRatio: "3/2"
    }

    useEffect(() => {
        axios.get('https://65e3567b88c4088649f5a918.mockapi.io/ecommerce')
            .then(res => {
                setDatas(res.data)
            })

    }, [])


    const cardSlider = datas.map(data =>
        <SwiperSlide className='container' key={data.id}>
            <div className="card" style={{ width: '14rem', margin: "40px 0px 40px 0px" }}>
                <img style={cardAlign} src={data.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{data.title} {data.proCateogry}</h5>
                    <p className="card-text text-secondary">{data.info} Some quick </p>
                    <div className='d-flex justify-content-between'>
                        <NavLink to="/" className="py-2 fw-bold">
                            <button className='btn btn-danger'>Price : ${data.price}</button>
                        </NavLink>
                        <NavLink to="/" className="py-2 fw-bold">
                            <button className='btn btn-outline-danger'>Add <FaShoppingCart /></button>
                        </NavLink>
                    </div>
                </div>
            </div></SwiperSlide>)

    return (
        <>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={5.5}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                watchOverflow={false}
            >
                {cardSlider}

            </Swiper >

        </>
    )
}

export default ProductSlider