import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Otp = () => {

    const location = useLocation();
    let email = location.state;
    const [users, setUsers] = useState([]);
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(60);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const generateOtp = () => {
        // e.preventDefault()
        setError("");
        setOtp("");
        let otp = Math.floor(1000 + Math.random() * 9000);

        let data = JSON.parse(localStorage.getItem("key"));

        let fetchedData = data.find((item) => item.email == email);
        fetchedData.otp = otp

        let transformed = data.map((item) => {
            if (item.email == email) {
                return item = fetchedData
            }
            else {
                return item;
            }
        })
        localStorage.setItem("key", JSON.stringify(transformed));
        setTime(60);
    }

    useEffect(() => {
        generateOtp();
    }, [])

    useEffect(() => {
        if (time <= 0) {
            setError("")
            setOtp("")
            return
        }
        let timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000)
        return () => clearInterval(timer);
    }, [time])

    const handleChange = (e) => {
        if (typeof (e.target.value) === "string") {
            setOtp("");
        }
        setOtp(e.target.value);
    }

    const handleSubmit = () => {
        // e.preventDefault();
        setError("");
        console.log("otp", otp);
        if (otp == "") {
            setError("Enter Otp");

            return
        }

        let data = JSON.parse(localStorage.getItem("key"));

        let fetchedData = data.find((item) => item.otp == otp);
        console.log(fetchedData)
        if (fetchedData) {
            navigate("/reset-page", { state: email })
        }
        else {
            setError("Otp is wrong")
            setOtp("")
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[80vh] bg-blue-100'>
            {/* <form onSubmit={handleSubmit} className='w-[50%] bg-white shadow-xl p-4 rounded'> */}
            <div className='w-[50%] bg-white shadow-xl p-4 rounded'>


                <input onChange={handleChange} value={otp} type="text" placeholder='Enter OTP' name="otp"
                    className='mt-2 border border-blue-500 outline-none w-full rounded px-1' />
                <p className='text-red-500 mt-1 text-sm'>{error}</p>
                <div className='flex items-center'>
                    {
                        time == 0 ?
                            <button onClick={() => generateOtp()} type="button" className='px-3 py-1 bg-blue-500 text-white rounded mt-3'>Generate Otp</button>
                            :
                            <button onClick={() => handleSubmit()} type="submit" className='px-3 py-1 bg-blue-500 text-white rounded mt-3'>Confirm</button>
                    }
                    {
                        time == 0 ? <></>
                            :
                            <p className='text-green-500 font-semibold ml-2'>{time}s</p>
                    }
                </div>
            </div>
            {/* </form> */}
        </div>
    )
}

export default Otp