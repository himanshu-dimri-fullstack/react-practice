import React from 'react'

const Card = ({ data }) => {
    return (
        <>
            <div className='flex flex-col gap-2 justify-center items-center p-3 bg-white rounded-xl shadow-xl'>
                <h3>{data.firstName}</h3>
                <p className='w-[200px] break-words'>{data.email}</p>
            </div>
        </>
    )
}

export default Card