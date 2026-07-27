import React from 'react'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-[#f3e3e3]'>
        <Navbar />
        <Dashboard />
        <Footer />
      </div>

    </>
  )
}

export default App