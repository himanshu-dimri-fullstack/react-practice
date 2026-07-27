import React from 'react'

const Card = ({ data }) => {
    return (
        <>
            <div className='flex flex-col gap-2 justify-center items-center p-3 bg-white rounded-xl shadow-xl'>
                <h3>{data.name}</h3>
                <p>{data.email}</p>
            </div>
        </>
    )
}

export default Card