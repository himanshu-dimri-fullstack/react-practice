import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
    return (
        <Link key={data.id} to={`user/${data.id}`} className='p-3 shadow rounded bg-white w-75 hover:bg-blue-300'>
            <h3 className='font-semibold'>{data.firstName}</h3>
            <p>{data.email}</p>
        </Link>
    )
}
export default Card 