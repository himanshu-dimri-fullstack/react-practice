import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/HomePage'
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App