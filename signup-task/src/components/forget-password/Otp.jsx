import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Otp = () => {

    const location = useLocation();
    let email = location.state;
    const [users, setUsers] = useState([]);
    const [otp, setOtp] = useState()
    const [time, setTime] = useState(60);
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const generateOtp = () => {
        // e.preventDefault()
        let otp = Math.floor(1000 + Math.random() * 9000);
        setOtp(otp);
        let data = JSON.parse(localStorage.getItem("key"));

        let fetchedData = data.find((item) => item.email == email);
        fetchedData.otp = otp

        let transformed = data.map((item) => {
            if (item.email == email) {
                return item = fetchedData
            }
        })
        localStorage.setItem("key", JSON.stringify(transformed));
    }

    useEffect(() => {
        generateOtp();
    }, [])

    useEffect(() => {
        if (time <= 0) {
            return;
        }
        let timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000)

        return () => clearInterval(timer);
        console.log("hello")
    }, [time])

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem("key"));

        let fetchedData = data.find((item) => item.otp == otp);
        if (fetchedData) {
            navigate("/reset-page")
        }
        else {
            setError("Otp is wrong")
        }
    }


    return (
        <div className='flex justify-center items-center min-h-[80vh] bg-blue-100'>
            <form onSubmit={handleSubmit} className='w-[50%] bg-white shadow-xl p-4 rounded'>
                <input type="text" placeholder='Enter OTP' name="otp"
                    className='mt-2 border border-blue-500 outline-none w-full rounded px-1' />
                <p className='text-red-500 mt-1'>{error}</p>
                <div className='flex items-center'>
                    {
                        time == 0 ?
                            <button type="button" className='px-3 py-1 bg-blue-500 text-white rounded mt-3'>Generate Otp</button>
                            :
                            <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded mt-3'>Confirm</button>
                    }
                    {
                        time == 0 ? <></>
                            :
                            <p className='text-green-500 font-semibold ml-2'>{time}s</p>
                    }

                </div>
            </form>
        </div>
    )
}

export default Otp