import React, { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((d) => setData(d.users))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const sortData = () => {
    let sortedData = data.toSorted((a, b) => a.firstName.localeCompare(b.firstName))
    setData(sortedData);
  }

  const clearData = () => {
    setData([]);
  }
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    let data = e.target.value;
    setFilter(data);
  }

  const filterData = () => {
    let ans = data.filter((item) => {
      return item.firstName.includes(filter);
    });
    setData(ans);
  }

  return (
    <>

      <div className='bg-[#f3e3e3]'>
        <Navbar setFilter={setFilter} handleChange={handleChange} />
        <Dashboard data={data} sortData={sortData} fetchData={fetchData} clearData={clearData} filterData={filterData} />
        <Footer />
      </div>

    </>
  )
}

export default App