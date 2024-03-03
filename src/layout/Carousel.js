import React from 'react'

function Carousel() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201763.jpg?t=st=1709397200~exp=1709400800~hmac=e79a170ac01e87b57d745ab4d1b641b709b869e4611660b346159e0996a6cb0e&w=1060" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/shopping-cart-supermarket-generative-ai_169016-29564.jpg?size=626&ext=jpg&ga=GA1.1.2103574665.1701945590&semt=ais" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg?t=st=1709397281~exp=1709400881~hmac=eb502a9e114966bf76754b12b47a810c6034cc76acb5f7594a1aee5e2d64c92f&w=1060" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel