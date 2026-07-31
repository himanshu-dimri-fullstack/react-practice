import React, { useEffect, useState } from 'react'
import axios from "axios"
import Data from './components/Data';

const App = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/users")
      setUsers(data.data.users)
    }
    catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleClick = () => {
    setShow((prev) => !prev);
    if (show) {
      setUsers([])
    }
    else {
      fetchData();
    }
  }

  return (
    <div className='h-screen w-screen bg-blue-100 p-5'>
      <button onClick={handleClick} className='bg-black px-3 py-1 text-white mb-5'>{show ? "hide" : "show"}</button>
      <Data data={users} />
    </div>
  )
}

export default App