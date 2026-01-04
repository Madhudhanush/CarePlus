import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Auth = ({ onLogin }) => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState('guardian')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      alert('Please fill in all required fields')
      return
    }

    const userData = {
      email: formData.email,
      userType,
      name: formData.name || formData.email.split('@')[0]
    }

    onLogin(userData)

    // Both sign-in and sign-up should follow the same flow
    // For guardians, go through guardian-details setup first
    if (userType === 'guardian') {
      navigate('/guardian-details')
    } else {
      navigate('/dashboard')
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="auth-container">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <p>Welcome to Careplus Healthcare</p>
        </div>

        <div className="user-type-selector">
          <button
            type="button"
            className={`user-type-btn ${userType === 'guardian' ? 'active' : ''}`}
            onClick={() => setUserType('guardian')}
          >
            Guardian
          </button>
          <button
            type="button"
            className={`user-type-btn ${userType === 'caretaker' ? 'active' : ''}`}
            onClick={() => setUserType('caretaker')}
          >
            Caretaker
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Auth
