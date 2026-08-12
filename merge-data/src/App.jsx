import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Child1 from './Child1';

const App = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/users")
    setState(data.data.users);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Child1 state={state} />
    </>
  )
}

export default App