import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from "./redux/userSlice"
import axios from 'axios'
import Home from './Home'
import Show from './Show'

const App = () => {

  const [state, setState] = useState([])

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(userFetch())
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setState(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <button className="text-white bg-green-500 px-3 py-1 my-10" onClick={handleClick}>Fetch Data</button>
      <Home data={state} />
      <Show />
    </div>
  )
}

export default App