import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { store } from './redux/store';

const Home = () => {

    const data = useSelector((store) => store.user.value);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <form className='flex justify-center items-center w-[30vw] h-[50vh]'>
                <div className='w-full'>
                    <div className='mb-3'>
                        <label>Email</label><br />
                        <input type="email" placeholder='email' className='w-full text-sm border border-[#ddd] rounded-xl py-1 px-3 mt-1 outline-none' />
                    </div>

                    <div className='mb-3'>
                        <label>Password</label><br />
                        <input type="password" placeholder='password' className='w-full text-sm border border-[#ddd] rounded-xl py-1 px-3 mt-1 outline-none' />
                    </div>
                    <div>
                        <Link to="/dashboard" className='text-white bg-blue-500 rounded px-5 py-1'>Login</Link>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Home