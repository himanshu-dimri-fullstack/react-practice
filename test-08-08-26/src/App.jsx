import React, { useEffect, useState } from 'react'
import Child1 from './components/Child1';
import axios from "axios"

const App = () => {
  const [data, setData] = useState([]);

  const [showData1, setShowData1] = useState(false)
  const [showData2, setShowData2] = useState(false)

  const fetchData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleShow1 = () => {
    setShowData1((prev) => !prev)
  }
  const handleShow2 = () => {
    setShowData2((prev) => !prev)
  }
  const sortData = () => {
    let sorted = data.sort((a, b) => a.name.localeCompare(b.name));
    console.log("sorted", sorted)
    setData(sorted);
  }
  return (
    <>
      <div className='flex gap-5 mt-2'>
        <button onClick={handleShow1} className='border border-blue-500 bg-blue-500 px-3 py-1'>
          {

            showData1 ? "Hide Data 1" : "Show Data 1"
          }
        </button>
        <button onClick={handleShow2} className='border border-green-500 bg-green-500 px-3 py-1'>
          {

            showData2 ? "Hide Data 2" : "Show Data 2"
          }
        </button>
        <button onClick={sortData} className='border border-green-500 bg-green-500 px-3 py-1'>Sort Data1</button>
      </div>
      <div>
        <Child1 showData1={showData1} showData2={showData2} data={data} />
      </div>

    </>
  )
}

export default App