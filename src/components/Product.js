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
                setFilterArr(res.data)
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
                <h2 id="galleryHeading" className="shadowHeading  text-center mt-4 text-danger fs-3">Shoping Now</h2>
                <div id="myBtnContainer" className='my-4'>
                    <button id="1" onClick={() => filterSelection('All')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">All </button>
                    <button id="2" onClick={() => filterSelection('Camera')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Camera</button>
                    <button id="3" onClick={() => filterSelection('Laptop')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Laptop</button>
                    <button id="4" onClick={() => filterSelection('T-shirt')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">T-shirt</button >
                    <button id="5" onClick={() => filterSelection('Table')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Table</button>
                    <button id="6" onClick={() => filterSelection('Phone')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Phone</button>
                    <button id="7" onClick={() => filterSelection('Tablet')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Tablet</button>
                    <button id="8" onClick={() => filterSelection('Shoes')} className="rounded-pill btn btn-outline-danger m-1 py-2 px-5">Shoes</button>
                </div >

                <div className="container-fluid mt-4">
                    <div className="productCard">
                        {filterArr.length === 0 ? "No Products Available" : filterArr.map((element) => {
                            return <div key={element.id}>
                                <ProductCard info={element.info} title={element.title} avatar={element.avatar} price={element.price} proCateogry={element.proCateogry} cardId={element.id} />
                            </div>
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Product