import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-300 h-[10vh] px-3'>
            <div className='flex justify-between items-center h-full'>
                <h1 className='text-2xl font-semibold'>
                    <Link to="/">Navbar</Link>
                </h1>
                <ul className='flex gap-5'>
                    <li className='bg-black border border-black text-white rounded px-3 py-1 
                    hover:bg-transparent hover:text-black'><Link to="/signup">Signup</Link></li>
                    <li className='bg-black border border-black text-white rounded px-3 py-1 
                    hover:bg-transparent hover:text-black'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar