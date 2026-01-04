import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import GuardianDetails from './components/GuardianDetails'
import BookCaretaker from './components/BookCaretaker'
import CaretakerProfile from './components/CaretakerProfile'
import Payment from './components/Payment'
import Services from './components/Services'
import Bookings from '../Bookings'

function App() {
  const [user, setUser] = useState(null)
  const [guardianData, setGuardianData] = useState(null)
  const [patients, setPatients] = useState([])
  const [bookings, setBookings] = useState([])
  const [caretakers, setCaretakers] = useState([])

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
    setGuardianData(null)
    setPatients([])
  }

  const handleGuardianDetailsSubmit = (data) => {
    setGuardianData(data)
    setPatients(data.patients || [])
  }

  const addBooking = (booking) => {
    setBookings([...bookings, { ...booking, id: Date.now() }])
  }

  const addCaretaker = (caretaker) => {
    setCaretakers([...caretakers, { ...caretaker, id: Date.now() }])
  }

  const updateBookingStatus = (id, status) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    )
  }

  console.log('App user:', user)
  console.log('App bookings:', bookings)

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/dashboard" /> : <Home />} 
          />
          <Route 
            path="/auth" 
            element={user ? <Navigate to="/dashboard" /> : <Auth onLogin={handleLogin} />} 
          />
          <Route 
            path="/services" 
            element={<Services />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} guardianData={guardianData} patients={patients} bookings={bookings} caretakers={caretakers} updateBookingStatus={updateBookingStatus} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/guardian-details" 
            element={user && user.userType === 'guardian' ? <GuardianDetails onSubmit={handleGuardianDetailsSubmit} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/book-caretaker" 
            element={user ? <BookCaretaker patients={patients} onBooking={addBooking} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/caretaker-profile" 
            element={user && user.userType === 'caretaker' ? <CaretakerProfile onSubmit={addCaretaker} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/payment" 
            element={user ? <Payment /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/bookings" 
            element={user ? <Bookings bookings={bookings} /> : <Navigate to="/auth" />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
