import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/HomePage'
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'
import ConfirmEmail from './components/forget-password/ConfirmEmail'
import Otp from './components/forget-password/Otp'
import ResetPassword from './components/forget-password/ResetPassword'

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
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-page" element={<ResetPassword />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App