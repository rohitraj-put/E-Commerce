import React from 'react'
import Header from '../layout/Header'
import Carousel from '../layout/Carousel'
import Product from './Product'
import ProductSlider from './ProductSlider'
import Footer from '../layout/Footer'
import AddToCart from './AddToCart'
// import SimpleSlider from './CardShow'


function Home() {
    return (
        <>
            {/* <div className="py-3 bg-dark bg-pattern">
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ Happy Holiday Deals on Everything ⚡️
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
            <Header />

            <Carousel />

            <Product />

            <ProductSlider />
            <ProductSlider />


            <section className="bg-danger mt-4 mb-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="text-white text-center py-7 col-lg-6 py-5">
                            <h2 className="display-4 text-uppercase mb-4 pt-5">Final sales</h2>
                            <p className="mb-0">Up to</p>
                            <h2 className="display-1 fw-bold mb-3">70%</h2>
                            <p className="mb-5">* Free shipping on orders over $70.</p>
                            <p>
                                <a
                                    role="button"
                                    tabIndex={0}
                                    href="#"
                                    className="btn btn-outline-light"
                                >
                                    Shop now
                                </a>
                            </p>
                        </div>
                        <div className="d-none d-lg-flex align-items-end col-lg-6">
                            <div className="text-end">
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: "relative",
                                        maxWidth: "100%"
                                    }}
                                >
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            maxWidth: "100%"
                                        }}
                                    >
                                        <img
                                            style={{
                                                display: "block",
                                                maxWidth: "100%",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: 1,
                                                border: 0,
                                                margin: 0,
                                                padding: 0
                                            }}
                                            alt=""
                                            aria-hidden="true"
                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27523%27%20height=%27600%27/%3e"
                                        />
                                    </span>
                                    <img
                                        alt="banner"
                                        src="https://sell-react-b5.vercel.app/_next/image?url=%2Fimg%2Fphoto%2Fsale-circle.jpg&w=1080&q=75"
                                        decoding="async"
                                        data-nimg="intrinsic"
                                        className="bg-image ms-auto"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%"
                                        }}
                                        srcSet="https://sell-react-b5.vercel.app/_next/image?url=%2Fimg%2Fphoto%2Fsale-circle.jpg&w=1080&q=75"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="card text-white bg-danger my-5 py-4 text-center">
                <div className="card-body"><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div>
            </div> */}


            <div className="row container m-auto">
                <div className="col-md-6 col-lg-3">
                    <div className="mb-8 mb-xl-0">
                        <div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/clock.svg" alt="" /></div>
                        <h3 className="h5 mb-3">10 minute grocery now</h3>
                        <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="mb-8 mb-xl-0">
                        <div className="mb-6"><img src="	https://freshcart.codescandy.com/assets/images/icons/gift.svg" alt="" /></div>
                        <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                        <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &amp; offers.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="mb-8 mb-xl-0">
                        <div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/package.svg" alt="" /></div>
                        <h3 className="h5 mb-3">Wide Assortment</h3>
                        <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg &amp; other categories.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 bg-">
                    <div className="mb-8 mb-xl-0">
                        <div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/refresh-cw.svg" alt="" /></div>
                        <h3 className="h5 mb-3">Easy Returns</h3>
                        <p>
                            Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No questions asked

                            .
                        </p>
                    </div>
                </div>
            </div>



            <div className="card-body row py-0 px-sm-0 position-relative zindex-5 bg-danger text-white mt-5  m-auto">
                <div className="col-lg-9 col-sm-10 offset-sm-1 d-flex flex-md-row flex-column align-items-md-end text-md-start text-center">
                    <div
                        className="my-5 me-md-5 me-auto ms-md-0 ms-auto py-md-4"
                        style={{ maxWidth: 495 }}
                    >
                        <h3 className="h2 mb-3">
                            <span className="text-accent">Best App</span> for Shopping
                        </h3>
                        <p className="mb-sm-4 mb-3">
                            If you're an NFT enthusiast, or are looking to get more familiar with
                            NFTs, consider downloading our NFT App!
                        </p>
                        <button className='btn btn-outline-light'>Download</button>
                    </div>
                    <div className="flex-shrink-0 ms-md-auto">
                        <img
                            src="https://cartzilla.createx.studio/img/nft/mobile-app.svg"
                            alt="Illustration"
                            style={{
                                borderTopLeftRadius: 28,
                                borderTopRightRadius: 28,
                                boxShadow: "16px 16px 24px -7px rgba(0, 0, 0, .3)"
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 container-fluid mt-5">
                <div className="col">
                    <div className="card h-60 bg-danger">
                        <img src="https://cartzilla.createx.studio/img/home/categories/cat-sm01.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-white">
                            <h5 className="card-title text-center fs-3">Man</h5>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-60 bg-danger">
                        <img src="https://cartzilla.createx.studio/img/home/categories/cat-sm02.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-white" >
                            <h5 className="card-title text-center fs-3">Woman</h5>

                        </div>

                    </div>
                </div>
                <div className="col ">
                    <div className="card h-60 bg-danger">
                        <img src="https://cartzilla.createx.studio/img/home/categories/cat-sm03.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-white">
                            <h5 className="card-title text-center fs-3">Kids</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            {/* <SimpleSlider /> */}
        </>
    )
}

export default Home