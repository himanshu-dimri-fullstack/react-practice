import React from 'react'

const Sidebar = ({ sortData, fetchData, clearData, filterData }) => {


    return (
        <div className='h-[80vh] bg-white p-5 sm:p-10 shadow-xl'>
            <ul>
                <li><button onClick={() => fetchData()} className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Fetch</button></li>
                <li><button onClick={() => sortData()} className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Sort</button></li>
                <li><button onClick={() => filterData()} className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Filter</button></li>
                <li><button onClick={() => clearData()} className='bg-blue-500 mb-3 border border-blue-500 text-white rounded px-4 py-1 outline-none'>Clear</button></li>
            </ul>
        </div>
    )
}

export default Sidebar