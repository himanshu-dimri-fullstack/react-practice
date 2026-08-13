import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./redux/userSlice"

const Home = () => {
    const [state, setState] = useState({});

    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    const changeHandler = (e) => {
        const { value, name } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(state))

    }

    console.log(user)

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-[40vw] h-[50vh]'>
                <div className='mb-3'>
                    <label>Email</label><br />
                    <input onChange={changeHandler} type='email' name="email" className='w-full mt-1 border border-[#ccc] px-3 py-1 rounded' />
                </div>
                <div className='mb-3'>
                    <label>Password</label><br />
                    <input onChange={changeHandler} type='password' name="password" className='w-full mt-1 border border-[#ccc] px-3 py-1 rounded' />
                </div>
                <div className='mb-3'>
                    <button className='bg-blue-400 text-white px-5 py-1 rounded'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Home