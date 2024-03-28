import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function View() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('https://65e3567b88c4088649f5a918.mockapi.io/ecommerce')
            .then(res => {

                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const tableInfor = datas.map(data => <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td><img style={{ width: "100px" }} src={data.avatar} alt='product Img' className='imgRatio' /></td>
        <td>{data.price}</td>
        <td>{data.proCateogry}</td>
        <td>{data.info}</td>
        <td>
            <Link className='btn btn-outline-danger' to={data.id}>View Card</Link>
        </td>
    </tr>)

    return (
        <>
            <h1 className='bg-dark-subtle p-3'>User view </h1>
            <table>
                <tr className='text-capitalize'>
                    <th>Id</th>
                    <th>title</th>
                    <th>avatar</th>
                    <th>price</th>
                    <th>proCateogry</th>
                    <th>info</th>
                    <th>Delteils</th>
                </tr>
                {
                    tableInfor
                }
            </table>
        </>
    )
}

export default View