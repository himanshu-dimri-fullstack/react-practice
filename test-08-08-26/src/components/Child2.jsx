import React, { useState, useEffect } from 'react'
import axios from "axios"

const Child2 = ({ data1, showData1, showData2 }) => {
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
        try {
            let res = await axios.get("https://dummyjson.com/users")
            setData2(res);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <>
            {
                showData1 ?
                    data1?.map((item) => {
                        return (
                            <div key={item.id} className='px-3 py-1 border border-blue-500 mt-2'>
                                <h1>{item.name}</h1>
                            </div>
                        )

                    })
                    :
                    <></>
            }

            {
                showData2 ?
                    data2?.data?.users.map((item) => {
                        return (
                            <div key={item.id} className='px-3 py-1 border border-blue-500 mt-2'>
                                <h1>{item.email}</h1>
                            </div>
                        )

                    })
                    :
                    <></>
            }
        </>
    )
}

export default Child2