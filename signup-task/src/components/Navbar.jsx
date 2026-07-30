import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-300 h-[10vh] px-3'>
            <div className='flex justify-between items-center h-full'>
                <h1 className='text-2xl'>
                    <Link to="/">Navbar</Link>
                </h1>
                <ul className='flex gap-5'>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar