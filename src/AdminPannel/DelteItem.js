import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext, UserChanel } from '../App'


function DeleteItem() {

    const fullName = useContext(UserContext)
    const surName = useContext(UserChanel)
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
            <h3 className='text-center'>{fullName} {surName}</h3>
            <h1 className='p-4'>DeleteItem Card data</h1>
            <div className="mb-3">
                <form className='form' onSubmit={SubmitHendler}>
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, id: e.target.value })} value={datas.id} disabled />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, title: e.target.value })} value={datas.title}
                        disabled />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, avatar: e.target.value })} value={datas.avatar}
                        disabled />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, price: e.target.value })} value={datas.price}
                        disabled />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, proCateogry: e.target.value })} value={datas.proCateogry}
                        disabled />
                    <input type="text" className="form-control"
                        onChange={e => setDatas({ ...datas, info: e.target.value })} value={datas.info}
                        disabled />
                    <button className='btn btn-danger mt-3 px-5'>Delete</button>&nbsp;&nbsp;

                    <Link to='/sign/suspend' className='mt-3 px-3'>
                        <button className='btn btn-outline-success mt-3 px-5'> Cancel</button>

                    </Link>

                </form>
            </div >
        </>
    )
}

export default DeleteItem