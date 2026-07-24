import React, { useState } from 'react'
import Data from './Data';



const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // let key = form.name;
        localStorage.setItem("key", JSON.stringify(form));

        setData([
            ...data,
            JSON.parse(localStorage.getItem("key"))
        ])
    }
    return (
        <>

            <div className='w-screen flex justify-center items-center p-10 bg-blue-100'>
                <form onSubmit={handleSubmit} className='w-[40%] bg-white p-6 rounded-2xl shadow-xl'>
                    <div className='mb-3'>
                        <label className='text-sm' htmlFor='name'>Name</label><br />
                        <input onChange={handleChange} className='border border-blue-300 rounded-xl px-2 py-1 outline-none w-full mt-2' type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label className='text-sm' htmlFor='email'>Email</label><br />
                        <input onChange={handleChange} className='border border-blue-300 rounded-xl px-2 py-1 outline-none w-full mt-2' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='text-sm' htmlFor='password'>Password</label><br />
                        <input onChange={handleChange} className='border border-blue-300 rounded-xl px-2 py-1 outline-none w-full mt-2' type="password" name="password" id="password" />
                    </div>
                    <div className='text-center mt-3'>
                        <button className='bg-blue-500 border border-blue-500 rounded-2xl text-white px-4 py-1' type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Data data={data} />
        </>


    )
}

export default Form