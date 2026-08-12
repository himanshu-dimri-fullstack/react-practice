import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { store } from './redux/store';
import { loginUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    const data = useSelector((store) => store.user.value);
    const dispatch = useDispatch();
    console.log(data)
    const handleLogout = () => {
        dispatch(loginUser())
    }

    useEffect(() => {
        if (!data) {
            navigate("/")
        }
    }, [data])

    return (
        <div>
            <button type="button" onClick={handleLogout} className='text-white bg-blue-500 rounded px-5 py-1'>Logout</button>
        </div>
    )
}

export default Dashboard