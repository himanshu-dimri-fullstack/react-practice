import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        emailErr: "",
        passwordErr: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email == "") {
            setError({
                emailErr: "Enter Email"
            })
            return
        }
        else if (form.password == "") {
            setError({
                passwordErr: "Enter Password"
            })
            return
        }
        let data = JSON.parse(localStorage.getItem("key"));
        let user = data.find((item) => item.email == form.email && item.password == form.password);
        if (user) {
            navigate("/dashboard")
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <>
            <div className='w-screen h-[80vh] flex justify-center items-center bg-blue-100'>
                <form onSubmit={handleSubmit} className='p-5 shadow-lg rounded-md w-[50%] bg-white'>
                    <div className='mb-3'>
                        <label className='text-sm'>Email</label><br />
                        <input onChange={handleChange} className='mt-2 w-full border border-blue-500 rounded px-2 py-1' name="email" placeholder='Email' type='email' />
                        {
                            error.emailErr ? <p className='text-red-500 mt-1'>{error.emailErr}</p> : <></>
                        }
                    </div>
                    <div className='mb-3'>
                        <label className='text-sm'>Password</label><br />
                        <input onChange={handleChange} className='mt-2 w-full border border-blue-500 rounded px-2 py-1' name="password" placeholder='Password' type='password' />
                        {
                            error.passwordErr ? <p className='text-red-500 mt-1'>{error.passwordErr}</p> : <></>
                        }
                    </div>
                    <button type='submit' className='border border-blue-500 bg-blue-500 text-white
                rounded px-3 py-1 mt-3'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login