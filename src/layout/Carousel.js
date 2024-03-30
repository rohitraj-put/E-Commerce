import React from 'react'

function Carousel() {
    const cardAlign = {
        aspectRatio: "3/2",
        maxWidth: "18rem"

    }
    return (
        <>
            <div id="carouselExample" className="carousel slide" style={{ marginTop: "78px" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/71sC6R2WVsL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" className="d-block w-100" alt="..." />
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
            <div className='container-fluid d-flex justify-content-center gap-3 mt-3'>
                <div className='card'>
                    <img style={cardAlign} className='rounded' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg' alt='image' />
                </div>
                <div className='card'>
                    <img style={cardAlign} className='rounded' src='https://www.mockupdaddy.com/wp-content/uploads/edd/2020/08/Premium-Cosmetic-Psd-Products-Mockup.png' alt='image' />
                </div>
                <div className='card'>
                    <img style={cardAlign} className='rounded' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg' alt='image' />
                </div>
                <div className='card'>
                    <img style={cardAlign} className='rounded' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg' alt='image' />
                </div>
            </div>
        </>
    )
}

export default Carousel