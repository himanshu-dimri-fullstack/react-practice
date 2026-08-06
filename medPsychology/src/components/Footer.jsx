import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-black text-white py-10'>
            <div className='container grid grid-cols-1 sm:grid-cols-5 gap-5 mx-auto px-3'>
                <div className='sm:col-span-2'>
                    <h5 className='text-2xl font-semibold mb-4'>MedPsychology</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates doloribus soluta! Minima corporis eligendi fugiat optio necessitatibus ut eaque!</p>
                </div>
                <div>
                    <h5 className='text-lg font-semibold mb-4'>Shop</h5>
                    <ul className='text-sm mb-2'>
                        <li className=' mb-2'><Link to="/">Sound Baths</Link></li>
                        <li className=' mb-2'><Link to="/">Guided meditations</Link></li>
                        <li className=' mb-2'><Link to="/">Yoga music</Link></li>
                        <li className=' mb-2'><Link to="/">Chakra healing sounds</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-lg font-semibold mb-4'>Quick Links</h5>
                    <ul className='text-sm mb-2'>
                        <li className=' mb-2'><Link to="/">Services</Link></li>
                        <li className=' mb-2'><Link to="/">Retreat</Link></li>
                        <li className=' mb-2'><Link to="/">Events</Link></li>
                        <li className=' mb-2'><Link to="/">Contacts</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-lg font-semibold mb-4'>Stay in Touch</h5>
                    <ul className='text-sm'>
                        <li className=' mb-2'><Link to="/">Facebook</Link></li>
                        <li className=' mb-2'><Link to="/">Instagram</Link></li>
                        <li className=' mb-2'><Link to="/">Youtube</Link></li>
                        <li className=' mb-2'><Link to="/">Spotify</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer