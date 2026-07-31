import React, { useState } from 'react'

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        nameErr: "",
        emailErr: "",
        passwordErr: ""
    })

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        console.log(form);
        e.preventDefault();

        if (form.name == "") {
            setError({
                nameErr: "Enter name"
            })
            return;
        }
        else if (form.email == "") {
            setError({
                emailErr: "Enter email"
            })
            return;
        }
        else if (form.password == "") {
            setError({
                passwordErr: "Enter password"
            })
            return;
        }

        let updatedData = [...data, form]
        setData(updatedData)
        localStorage.setItem("key", JSON.stringify(updatedData));
        setForm({
            name: "",
            email: "",
            password: ""
        })

    }
    return (
        <div className='w-screen h-[80vh] flex justify-center items-center bg-blue-100'>
            <form onSubmit={handleSubmit} className='p-5 shadow-lg rounded-md w-[80%] sm:w-[60%] md:w-[40%] bg-white'>
                <div className='mb-3'>
                    <label className='text-sm'>Name</label><br />
                    <input onChange={handleChange} className='outline-none focus:ring-2 focus:ring-blue-500 text-sm mt-2 w-full border border-blue-500 rounded px-2 py-1' name="name" placeholder='Name' type='text' value={form.name} />
                    {
                        error.nameErr ? <p className='text-red-500 mt-1'>{error.nameErr}</p> : <></>
                    }
                </div>
                <div className='mb-3'>
                    <label className='text-sm'>Email</label><br />
                    <input onChange={handleChange} className='outline-none focus:ring-2 focus:ring-blue-500 text-sm mt-2 w-full border border-blue-500 rounded px-2 py-1' name="email" placeholder='Email' type='email' value={form.email} />
                    {
                        error.emailErr ? <p className='text-red-500 mt-1'>{error.emailErr}</p> : <></>
                    }
                </div>
                <div className='mb-3'>
                    <label className='text-sm'>Password</label><br />
                    <input onChange={handleChange} className='outline-none focus:ring-2 focus:ring-blue-500 text-sm mt-2 w-full border border-blue-500 rounded px-2 py-1' name="password" placeholder='Password' type='password' value={form.password} />
                    {
                        error.passwordErr ? <p className='text-red-500 mt-1'>{error.passwordErr}</p> : <></>
                    }
                </div>
                <div className='text-center'>
                    <button type='submit' className='border border-blue-500 bg-blue-500 text-white
                rounded px-3 py-1 mt-3'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Signup