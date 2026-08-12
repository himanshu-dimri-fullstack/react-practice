import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Child1 = ({ state }) => {
    const [state1, setState1] = useState([]);
    const [merge, setMerge] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("https://dummyjson.com/products")
        setState1(data.data.products);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const mergeData = () => {

        let data = [...state, ...state1];
        console.log("mergeData", data);
    }

    useEffect(() => {
        mergeData();
    }, [state1])

    console.log("data1", state)
    console.log("data2", state1)

    return (
        <div>

        </div>
    )
}

export default Child1