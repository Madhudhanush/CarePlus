import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, Phone, MapPin, Award, BookOpen } from 'lucide-react'

const CaretakerProfile = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    type: 'professional',
    services: [],
    qualification: '',
    specification: '',
    training: '',
    background: '',
    experience: '',
    hourlyRate: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'services') {
      if (checked) {
        setProfileData({
          ...profileData,
          services: [...profileData.services, value]
        })
      } else {
        setProfileData({
          ...profileData,
          services: profileData.services.filter(service => service !== value)
        })
      }
    } else {
      setProfileData({
        ...profileData,
        [name]: value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(profileData)
    navigate('/dashboard')
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="auth-header">
            <h2>Become a Caretaker</h2>
            <p>Join our team of professional caretakers</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3><User size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />Basic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={profileData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hourlyRate">Hourly Rate ($)</label>
                  <input
                    type="number"
                    id="hourlyRate"
                    name="hourlyRate"
                    value={profileData.hourlyRate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  rows="3"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Professional Type</h3>
              <div className="user-type-selector">
                <button
                  type="button"
                  className={`user-type-btn ${profileData.type === 'professional' ? 'active' : ''}`}
                  onClick={() => setProfileData({...profileData, type: 'professional'})}
                >
                  Professional
                </button>
                <button
                  type="button"
                  className={`user-type-btn ${profileData.type === 'non-professional' ? 'active' : ''}`}
                  onClick={() => setProfileData({...profileData, type: 'non-professional'})}
                >
                  Non-Professional
                </button>
              </div>
            </div>

            <div className="form-section">
              <h3>Services Offered</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {['babysitting', 'elder-care', 'physically-ill'].map((service) => (
                  <label key={service} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={profileData.services.includes(service)}
                      onChange={handleInputChange}
                    />
                    <span style={{ textTransform: 'capitalize' }}>
                      {service.replace('-', ' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {profileData.type === 'professional' && (
              <div className="form-section">
                <h3><Award size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />Professional Qualifications</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={profileData.qualification}
                      onChange={handleInputChange}
                      placeholder="e.g., RN, LPN, MD"
                      required={profileData.type === 'professional'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience</label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      value={profileData.experience}
                      onChange={handleInputChange}
                      required={profileData.type === 'professional'}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="specification">Specialization</label>
                  <textarea
                    id="specification"
                    name="specification"
                    value={profileData.specification}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe your areas of specialization and expertise"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>
            )}

            {profileData.type === 'non-professional' && (
              <div className="form-section">
                <h3><BookOpen size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />Training & Background</h3>
                <div className="form-group">
                  <label htmlFor="training">Training & Certifications</label>
                  <textarea
                    id="training"
                    name="training"
                    value={profileData.training}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="List any relevant training, certifications, or courses completed"
                    required={profileData.type === 'non-professional'}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="background">Background & Experience</label>
                  <textarea
                    id="background"
                    name="background"
                    value={profileData.background}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Describe your background, previous experience, and why you want to be a caretaker"
                    required={profileData.type === 'non-professional'}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>
            )}

            <div className="auth-actions">
              <button type="submit" className="btn btn-primary">
                Save Profile
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default CaretakerProfile
