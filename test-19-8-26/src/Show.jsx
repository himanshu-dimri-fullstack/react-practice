import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Show = () => {
    const [data, setData] = useState(false)
    const reduxData = useSelector((store) => store.user.data)
    console.log("data on show:", reduxData)
    const handleClick = () => {
        setData((prev) => !prev)
    }
    return (
        <div>
            <button onClick={handleClick} className='bg-blue-500 text-white px-3 py-1 mt-10'>Show</button>
            {
                data ? reduxData.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1>{item.email}</h1>
                        </div>
                    )

                })
                    :
                    <></>
            }
        </div>
    )
}

export default Show