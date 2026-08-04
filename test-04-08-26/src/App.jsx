import React, { useEffect, useState } from 'react'
import Data from "./Data.jsx"
import Location from './components/Location.jsx';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, [])

  // console.log(data);

  return (
    <>
      <Location data={data} />
    </>
  )
}

export default App