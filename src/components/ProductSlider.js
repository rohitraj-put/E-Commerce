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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 900 },
            items: 4,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 900, min: 600 },
            items: 3,
            slidesToSlide: 1
        },
        midMobile: {
            breakpoint: { max: 600, min: 480 },
            items: 2,
            slidesToSlide: 1
        },
        SmallMobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


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
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "midMobile", "SmallMobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                {cardSlider}

            </Carousel >

        </>
    )
}

export default ProductSlider