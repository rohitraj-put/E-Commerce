import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

function Product() {
    const [myArray, setMyArray] = useState([]);
    const [filterArr, setFilterArr] = useState([]);
    const fetchImages = () => {
        axios.get('https://65e3567b88c4088649f5a918.mockapi.io/ecommerce')
            .then(res => {
                setMyArray(res.data)
                console.log()
            })
            .catch(err => {
                console.log(err)
            })
    }
    const filterSelection = (str) => {
        if (str === 'All') {
            setFilterArr(myArray);
        } else {
            setFilterArr(myArray.filter((a) => { if (a.proCateogry === str) { return a } else { return false } }));
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading  text-center mb-2 mt-5">Products</h2>
                <div id="myBtnContainer">
                    <button id="1" onClick={() => filterSelection('All')} className="btn btn-warning m-1">All</button>
                    <button id="2" onClick={() => filterSelection('pixal')} className="btn btn-warning m-1">pixal</button>
                    <button id="3" onClick={() => filterSelection('Infrastructure')} className="btn btn-warning m-1">Infrastructure</button>
                    <button id="4" onClick={() => filterSelection('Food')} className="btn btn-warning m-1">Food</button >
                    <button id="5" onClick={() => filterSelection('Gym')} className="btn btn-warning m-1">Gym</button>
                    <button id="6" onClick={() => filterSelection('Sports')} className="btn btn-warning m-1">Sports</button>
                    <button id="7" onClick={() => filterSelection('Library')} className="btn btn-warning m-1">Library</button>
                    <button id="8" onClick={() => filterSelection('Event')} className="btn btn-warning m-1">Event</button>
                </div >

                <div className="container-fluid mt-4">
                    <div className="row align-items-center justify-content-center">
                        {filterArr.length === 0 ? "No Images Available" : filterArr.map((element) => {
                            return <div key={element.id} className="col-12 col-lg-4 col-xl-3 m-2">
                                <ProductCard info={element.info} title={element.title} avatar={element.avatar} price={element.price} proCateogry={element.proCateogry} />
                            </div>
                        })}
                    </div>
                </div>
            </div >

        </>
    )
}

export default Product