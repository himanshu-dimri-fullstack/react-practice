import React, { useEffect, useState } from 'react'
import axios from "axios"
import Data from './components/Data';
import Button from './components/Button';

const App = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/users");
      setUsers(data.data.users);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  if (loading && show) {
    return (
      <div className='w-screen h-screen flex justify-center items-center bg-blue-100'>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-screen bg-blue-100 p-5'>
      <Button fetchData={fetchData} setShow={setShow} setUsers={setUsers} show={show} />
      <Data data={users} />
    </div>
  )
}

export default App