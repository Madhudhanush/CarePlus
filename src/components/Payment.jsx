import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreditCard, Calendar, User, DollarSign } from 'lucide-react'

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const booking = location.state?.booking
  
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  })

  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    })
  }

  const handlePayment = (e) => {
    e.preventDefault()
    alert('Payment successful! Booking confirmed.')
    navigate('/dashboard')
  }

  if (!booking) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>No booking data found</h2>
        <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
          Go to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <motion.div
          className="payment-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="payment-header">
            <h2>Payment Details</h2>
            <p>Complete your booking payment</p>
          </div>

          <div className="payment-details">
            <h3 style={{ marginBottom: '1.5rem', color: '#10b981' }}>Booking Summary</h3>
            
            <div className="payment-row">
              <span><Calendar size={16} style={{ marginRight: '0.5rem' }} />Date:</span>
              <span>{booking.date}</span>
            </div>
            
            <div className="payment-row">
              <span><User size={16} style={{ marginRight: '0.5rem' }} />Booked for:</span>
              <span>{booking.patient}</span>
            </div>
            
            <div className="payment-row">
              <span><User size={16} style={{ marginRight: '0.5rem' }} />Caretaker:</span>
              <span>{booking.caretaker.name}</span>
            </div>
            
            <div className="payment-row">
              <span>Duration:</span>
              <span>{booking.duration} hours</span>
            </div>
            
            <div className="payment-row">
              <span>Service Type:</span>
              <span style={{ textTransform: 'capitalize' }}>{booking.serviceType?.replace('-', ' ')}</span>
            </div>
            
            <div className="payment-row">
              <span>Rate per hour:</span>
              <span>${booking.caretaker.hourlyRate}</span>
            </div>
            
            <div className="payment-row">
              <span><DollarSign size={16} style={{ marginRight: '0.5rem' }} />Total Amount:</span>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>${booking.totalAmount}</span>
            </div>

            <form onSubmit={handlePayment} style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#10b981' }}>Payment Information</h3>
              
              <div className="form-group">
                <label htmlFor="cardholderName">Cardholder Name</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                <CreditCard size={20} style={{ marginRight: '0.5rem' }} />
                Pay ${booking.totalAmount}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Payment
