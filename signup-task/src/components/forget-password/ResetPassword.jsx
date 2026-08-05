import React, { useState } from 'react'

const ResetPassword = () => {
    const [form, setForm] = useState({
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }


    console.log(form)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");

        if (form.password == "") {
            setError("Enter password")
            return
        }
        else if (form.confirmPassword == "") {
            setError("Enter Confirm Password")
            return
        }

        if (form.password != form.confirmPassword) {
            setError("password are not same");
            return
        }

    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] bg-blue-100'>
            <form onSubmit={handleSubmit} className='w-[50%] bg-white p-10 rounded'>

                <input type="password" onChange={handleChange} name='password' placeholder='password' className='w-full border rounded px-2 py-1 outline-none' />
                <input type="password" onChange={handleChange} name='confirmPassword' placeholder='confirm password' className='w-full border rounded px-2 py-1 mt-3 outline-none' />
                {
                    error ? <p className='text-red-500'>{error}</p>
                        :
                        <></>
                }
                <button type='submit' className='px-3 py-2 rounded bg-blue-500 text-white mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default ResetPassword