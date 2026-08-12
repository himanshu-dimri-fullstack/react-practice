import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { store } from './redux/store'
import { loginUser } from "./redux/userSlice"


const Home = () => {
    const navigate = useNavigate();
    const data = useSelector((store) => store.user.value)
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(loginUser())
        navigate("/dashboard")
    }
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
                        <button type="button" onClick={handleLogin} className='text-white bg-blue-500 rounded px-5 py-1'>Login</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Home