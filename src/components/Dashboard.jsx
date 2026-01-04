import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, User, UserPlus, Bell } from 'lucide-react'

const Dashboard = ({ user, guardianData, patients, bookings, caretakers, updateBookingStatus }) => {
  console.log('Dashboard props:', { user, bookings })
  const navigate = useNavigate()

  // Helper function to get patient name by patientId
  const getPatientName = (patientId) => {
    const patient = patients.find(p => p.id === patientId)
    return patient ? patient.name : 'N/A'
  }

  // Filter bookings based on user type and user id
  let filteredBookings = bookings
  if (user.userType === 'caretaker') {
    filteredBookings = bookings.filter(booking => {
      const caretakerId = booking.caretaker?.id || booking.caretakerId
      return String(caretakerId) === String(user.id)
    })
  } else if (user.userType === 'guardian') {
    filteredBookings = bookings.filter(booking => booking.guardian?.id === user.id)
  }

  if (user.userType === 'caretaker') {
    return (
      <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#adc8f3ff' }}>
        <div className="container">
          <motion.div
            className="dashboard-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1>Caretaker Dashboard</h1>
            <p>Manage your profile and view booking requests</p>
          </motion.div>

          <div className="dashboard-grid">
            <motion.div 
              className="dashboard-card"
              onClick={() => navigate('/caretaker-profile')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserPlus size={48} color="#3b82f6" />
              <h3>Become a Caretaker</h3>
              <p>Complete your caretaker profile</p>
              <button className="btn btn-primary">Setup Profile</button>
            </motion.div>

            <motion.div 
              className="dashboard-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={48} color="#3b82f6" />
              <h3>Bookings</h3>
              <p> booking requests</p>
              <button className="btn btn-primary" onClick={() => navigate('/bookings')}>View Requests</button>
            </motion.div>
          </div>

          {filteredBookings.length > 0 && (
            <motion.div
              style={{ marginTop: '3rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Recent Booking Requests</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="dashboard-card" style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Booking Request</h4>
                        <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>
                          <Calendar size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                          {booking.date} - {booking.duration} hours
                        </p>
                        <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>
                          Patient: {booking.patientId ? getPatientName(booking.patientId) : 'Not Assigned'}
                        </p>
                        <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>
                          Service: {booking.serviceType?.replace('-', ' ')}
                        </p>
                        <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>
                          Amount: ${booking.totalAmount}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          className="btn btn-primary"
                          style={{ padding: '0.5rem 1rem' }}
                          onClick={() => updateBookingStatus(booking.id, 'accepted')}
                          disabled={booking.status === 'accepted'}
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-secondary"
                          style={{ padding: '0.5rem 1rem' }}
                          onClick={() => updateBookingStatus(booking.id, 'declined')}
                          disabled={booking.status === 'declined'}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  // Guardian Dashboard
  const activeBookings = filteredBookings.filter(booking => booking.status !== 'declined' && booking.status !== 'cancelled')

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#b5d6f6ff' }}>
      <div className="container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Guardian Dashboard</h1>
          <p>Manage care for your loved ones</p>
        </motion.div>

        <div className="dashboard-grid">
          <motion.div 
            className="dashboard-card"
            onClick={() => navigate('/book-caretaker')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={48} color="#10b981" />
            <h3>Book a Caretaker</h3>
            <p>Schedule professional care services</p>
            <button className="btn btn-primary">Book Now</button>
          </motion.div>

          <motion.div 
            className="dashboard-card"
            onClick={() => navigate('/bookings')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <User size={48} color="#3b82f6" />
            <h3>My Bookings</h3>
            <p>{activeBookings.length} active bookings</p>
            <button className="btn btn-primary">View All</button>
          </motion.div>
        </div>

        {guardianData && (
          <motion.div
            style={{ marginTop: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Your Information</h2>
            <div className="dashboard-card" style={{ textAlign: 'left' }}>
              <h3>Guardian Details</h3>
              <p><strong>Name:</strong> {guardianData.guardian?.name}</p>
              <p><strong>Phone:</strong> {guardianData.guardian?.phone}</p>
              <p><strong>Relationship:</strong> {guardianData.guardian?.relationship}</p>
              <p><strong>Address:</strong> {guardianData.guardian?.address}</p>
            </div>
          </motion.div>
        )}

        {patients.length > 0 && (
          <motion.div
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Your Patients</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {patients.map((patient) => (
                <div key={patient.id} className="patient-card">
                  <h4>{patient.name}</h4>
                  <p>Age: {patient.age}, Gender: {patient.gender}</p>
                  <p>Medical Info: {patient.medicalInfo}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
