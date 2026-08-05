import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmEmail = () => {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");


    const handleChange = (e) => {
        let data = e.target.value;
        setEmail(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        let data = JSON.parse(localStorage.getItem("key"));

        if (email == "") {
            setError("Enter Email")
            return
        }


        let isEmailAvailable = data.find((item) => item.email == email);
        if (isEmailAvailable) {
            navigate("/otp", { state: email })
        }
        else {
            setError("Email not exist")
        }
    }

    console.log(JSON.parse(localStorage.getItem("key")))


    return (
        <div className='flex min-h-[80vh] justify-center items-center bg-blue-100'>
            <form onSubmit={handleSubmit} className='w-[50%] bg-white shadow-xl p-4'>
                <label className='text-sm text-black'>Enter Email</label><br />
                <input onChange={handleChange} type="email" placeholder='Enter Email' name="email"
                    className='mt-2 border border-blue-500 outline-none w-full rounded px-1' />
                <p className='text-red-500 mt-1'>{error}</p>
                <button className='px-3 py-1 bg-blue-500 text-white rounded mt-3'>Submit</button>
            </form>
        </div >
    )
}

export default ConfirmEmail