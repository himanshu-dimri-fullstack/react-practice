import React from 'react'

const Data = ({ data }) => {
    return (
        <div className='flex gap-3 flex-wrap'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className='bg-white shadow w-75 p-2'>
                            <h3>{item.firstName}</h3>
                            <p>{item.email}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Data