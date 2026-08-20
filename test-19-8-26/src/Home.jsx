import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveData } from "./redux/userSlice"

const Home = ({ data }) => {
    const reduxData = useSelector((store) => store.user.data)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        email: ""
    });

    const [mergeData, setMergeData] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let finalData = [...mergeData, ...state];
        console.log("final Data:", finalData)
        dispatch(saveData(finalData));
    }

    useEffect(() => {
        let merged = [...reduxData, ...data];
        setMergeData(merged)
        console.log("merged data:", merged)
    }, [data, reduxData])

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input required value={state.name} className='border border-[#ddd]' onChange={handleChange} type="text" name="name" /><br />
                <input required value={state.email} className='border border-[#ddd]' onChange={handleChange} type='email' name="email" /><br />
                <button className='bg-black px-3 py-1 text-white mt-5' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Home