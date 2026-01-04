import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, DollarSign } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Bookings = ({ bookings }) => {
  const navigate = useNavigate()

  const handleAccept = () => {
    toast.success('Booking accepted successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    setTimeout(() => {
      navigate('/dashboard')
    }, 3000)
  }

  const handleDecline = () => {
    toast.error('Booking declined.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <ToastContainer />
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <h4>Added Patients:</h4>
          <p>Name: Raj</p>
          <p>Age: 67</p>
          <p>Gender: Male</p>
          <p>Medical Info: Diabetics</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={handleAccept}>
            Accept
          </button>
          <button className="btn btn-danger" onClick={handleDecline}>
            Decline
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#f0f4f8' }}>
      <ToastContainer />
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>My Bookings</h1>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {bookings.map((booking) => (
            <div key={booking.id} className="dashboard-card" style={{ textAlign: 'left' }}>
              <h3>Booking ID: {booking.id}</h3>
              <p>
                <Calendar size={16} style={{ marginRight: '0.5rem' }} />
                Date: {booking.date} - Duration: {booking.duration} hours
              </p>
              <p>Patient: {booking.patient?.name || 'Raj'}</p>
              <p>Age: {booking.patient?.age || '67'}</p>
              <p>Gender: {booking.patient?.gender || 'Male'}</p>
              <p>Medical Info: {booking.patient?.medicalInfo || 'Diabetics'}</p>
              <p>Caretaker: {booking.caretaker?.name || 'Snow'}</p>
              <p>Service: {booking.serviceType?.replace('-', ' ') || 'N/A'}</p>
              <p>
                <DollarSign size={16} style={{ marginRight: '0.5rem' }} />
                Amount: ${booking.totalAmount || 'N/A'}
              </p>
              <p>Status: {booking.status || 'Pending'}</p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button className="btn btn-primary" onClick={handleAccept}>
                  Accept
                </button>
                <button className="btn btn-danger" onClick={handleDecline}>
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
         <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>

        <button className="btn btn-secondary"  onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
                </div>

      </div>
    </div>
  )
}

export default Bookings
