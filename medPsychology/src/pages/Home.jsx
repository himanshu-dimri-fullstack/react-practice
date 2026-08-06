import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
    return (
        <div className=''>

            <div className='bg-white'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center px-3 py-5 md:py-0 md:h-100'>
                    <div className='order-2 md:order-1 flex justify-center items-center'>
                        <div className=''>
                            <h3 className='text-xl md:text-2xl font-semibold mb-4'>Expert guidance for a balanced and fulfilling life</h3>
                            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis dolorum commodi deserunt ratione, minus, quae, ex distinctio ullam nemo illo earum. Magnam tempore praesentium recusandae laborum perferendis repellendus vero.</p>
                            <button className='mt-4 bg-green-800 text-white px-3 py-2 rounded border text-md'>Make an appointment</button>
                        </div>
                    </div>
                    <div className='order-1 md:order-2'>
                        <img src='src/assets/banner.jpg' className='h-40 sm:h-60 md:h-80 w-full object-contain rounded-2xl' />
                    </div>
                </div>
            </div>

            <div className='my-5 text-center'>
                <h4>Join our community to update any event and get more benefit!! <span className='text-green-800 font-semibold'><Link to="/">Join Community</Link></span></h4>
            </div>

            <div className='bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto justify-center items-center px-3 p-5 md:p-15 gap-3'>
                    <div className='flex justify-center'>
                        <div className='flex md:w-[80%] justify-center items-center gap-2 p-2 border border-green-200 rounded-lg bg-[#eee] shadow-lg'>
                            <div>
                                <h4 className='text-2xl font-semibold'>27+</h4>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Years experience</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='flex md:w-[80%] justify-center items-center gap-2 p-2 border border-green-200 rounded-lg bg-[#eee] shadow-lg'>
                            <div>
                                <h4 className='text-2xl font-semibold'>27+</h4>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Years experience</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='flex md:w-[80%] justify-center items-center gap-2 p-2 border border-green-200 rounded-lg bg-[#eee] shadow-lg'>
                            <div>
                                <h4 className='text-2xl font-semibold'>27+</h4>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Years experience</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-orange-200'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-3 py-10'>
                    <div className='grid grid-cols-2 gap-2'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='md:w-[80%]'>
                            <h5 className='text-xl md:text-3xl font-semibold'>Real Stories, real transformation</h5>
                            <p className='text-md mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit
                                unde beatae. Veritatis, non atque mollitia illum quisquam inventore optio!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home