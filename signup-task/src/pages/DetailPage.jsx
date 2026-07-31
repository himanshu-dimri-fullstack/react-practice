import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailPage = () => {
    const location = useLocation();
    console.log(location)
    const { id } = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    const fetchUser = async () => {
        try {
            const user = await axios.get(`https://dummyjson.com/user/${id}`)
            setData(user.data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[80vh] bg-blue-100'>
                <h2 className='text-xl'>Loading...</h2>
            </div>
        )
    }
    return (
        <div className='h-[80vh] bg-blue-100 flex justify-center items-center'>
            <div className='bg-white rounded-xl shadow w-[50%] sm:w-[40%] p-3 flex justify-center items-center'>
                <div className=''>
                    <div>
                        <img src={data.image} className='border border-blue-300 rounded-[50%] h-15' />
                    </div>
                    <div className='mt-3'>
                        <h3>Name: {data.firstName} {data.lastName}</h3>
                        <p>Email: {data.email}</p>
                        <p>Department: {data?.company?.department}</p>
                        <p>Age: {data.age}</p>
                        <p>Address: {data?.address?.address}</p>
                        <p>City: {data?.address?.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage