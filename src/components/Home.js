import React from 'react'
import Header from '../layout/Header'
import Carousel from '../layout/Carousel'
import Product from './Product'


function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Product />
            {/* <SimpleSlider /> */}
        </>
    )
}

export default Home