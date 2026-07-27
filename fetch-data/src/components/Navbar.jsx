import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center bg-[#1d1c1c] h-[10vh] w-screen text-white px-3'>
            <div className='flex justify-between w-full items-center'>
                <h1 className='text-2xl'>Dashboard</h1>
                <input type='search' className='h-[6vh] w-[50%] bg-white border border-white rounded-xl px-3
                focus:ring-2 focus:ring-blue-400 outline-none' />
            </div>
        </div>
    )
}

export default Navbar