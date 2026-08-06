import React from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className='bg-white shadow'>
            <div className='container mx-auto hidden sm:grid grid-cols-4 h-[10vh] items-center px-5'>
                <div>
                    <h3 className='text-green-800 font-semibold text-xl'><Link to="/">MedPsychology</Link></h3>
                </div>
                <div className='col-span-2'>
                    <ul className='flex gap-3 md:gap-6 justify-center text-md font-semibold'>
                        <li className='hover:text-green-800 '><Link to="/">Home</Link></li>
                        <li className='hover:text-green-800 '><Link to="/about">About</Link></li>
                        <li className='hover:text-green-800 '><Link to="/service">Service</Link></li>
                        <li className='hover:text-green-800 '><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-green-800 text-white px-3 py-2 rounded border text-sm hover:bg-white hover:text-green-800 
                hover:border-green-800'>Appointment</button>
                </div>
            </div>
            <div className='container mx-auto flex justify-between items-center sm:hidden h-[10vh] px-5'>
                <div>
                    <h3 className='text-green-800 font-semibold text-xl'><Link to="/">MedPsychology</Link></h3>
                </div>
                <div className='text-xl'>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar