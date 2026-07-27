import React from 'react'

const Sidebar = () => {


    return (
        <div className='h-[80vh] bg-white p-5 sm:p-10 shadow-xl'>
            <ul>
                <li><button onClick={() => fetchData()} className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Fetch Data</button></li>
                <li><button className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Sort Data</button></li>
                <li><button className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Filter</button></li>
            </ul>
        </div>
    )
}

export default Sidebar