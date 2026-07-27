import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

const dashboard = () => {

    const [data, setData] = useState([]);
    console.log(data);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((d) => setData(d))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='grid grid-cols-3 sm:grid-cols-5'>
            <Sidebar />
            <div className='col-span-2 sm:col-span-4 h-[80vh] overflow-y-auto py-5'>
                <div className='flex gap-3 flex-wrap justify-center items-center'>
                    {
                        data.map((item) => {
                            return (
                                <Card key={item.id} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default dashboard