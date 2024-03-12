import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function InsertData() {
    const [datas, setDatas] = useState({
        title: "",
        avatar: "",
        price: "",
        proCateogry: "",
        info: ""

    })
    const useNavi = useNavigate()
    const SubmitHendler = (e) => {
        useNavi('/sign/view')
        axios.post("https://65e3567b88c4088649f5a918.mockapi.io/ecommerce/", datas)
    }
    return (
        <>
            <h1 className='p-4'>Edit Card data</h1>
            <div className="mb-3">
                <form className='form' onSubmit={SubmitHendler}>
                    <label>Title </label>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, title: e.target.value })} value={datas.title}
                        required
                    />
                    <label>avatar (Only support img URL)</label>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, avatar: e.target.value })} value={datas.avatar}
                        required
                    />
                    <label>Price </label>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, price: e.target.value })} value={datas.price}
                        required
                    />
                    <label>Cateogry </label>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, proCateogry: e.target.value })} value={datas.proCateogry}
                        required
                    />
                    <label>Information</label>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, info: e.target.value })} value={datas.info}
                        required
                    />
                    <button className='btn btn-outline-danger mt-3 px-5'>Insert</button>
                </form>
            </div>
            <h2>{JSON.stringify(datas)}</h2>
        </>
    )
}

export default InsertData