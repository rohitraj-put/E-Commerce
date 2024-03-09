import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";

function DeleteItem() {
    const { id } = useParams()
    const [datas, setDatas] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://65e3567b88c4088649f5a918.mockapi.io/ecommerce/${id}`)
            .then(res => {
                // console.log(res)
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const SubmitHendler = () => {
        navigate('/sign/active')
        axios.delete(`https://65e3567b88c4088649f5a918.mockapi.io/ecommerce/${id}`, datas)
    }

    return (
        <>
            <h1 className='p-4'>DeleteItem Card data</h1>
            <div className="mb-3">
                <form className='form' onSubmit={SubmitHendler}>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, id: e.target.value })} value={datas.id} />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, title: e.target.value })} value={datas.title}
                    />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, avatar: e.target.value })} value={datas.avatar}
                    />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, price: e.target.value })} value={datas.price}
                    />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, proCateogry: e.target.value })} value={datas.proCateogry}
                    />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, info: e.target.value })} value={datas.info}
                    />
                    <button className='btn btn-danger mt-3 px-5'>Delete</button>&nbsp;&nbsp;
                    <button className='btn btn-outline-success mt-3 px-5'>
                        <Link to='/sign/suspend' style={{ color: "blue" }}><MdOutlineCancel /> Cancel</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default DeleteItem