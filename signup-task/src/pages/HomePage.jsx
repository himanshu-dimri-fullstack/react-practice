import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card';

const Homepage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/users");
            setData(res.data.users);
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[80vh] bg-blue-100'>
                <h2 className='text-xl'>Loading...</h2>
            </div>
        )
    }
    return (
        <>
            <div className='flex gap-3 justify-center flex-wrap bg-blue-100 p-5'>
                {
                    data.map((item) => {
                        return (
                            <>
                                <Card key={item.id} data={item} />
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Homepage