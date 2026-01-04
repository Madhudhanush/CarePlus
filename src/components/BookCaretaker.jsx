import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Filter, Star, Clock, MapPin, Phone, Mail } from 'lucide-react'

const BookCaretaker = ({ patients, onBooking }) => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    serviceType: '',
    professionalType: '',
    duration: '',
    date: ''
  })
  
  const [selectedCaretaker, setSelectedCaretaker] = useState(null)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selfBooking, setSelfBooking] = useState(false)
  const [selfMedicalInfo, setSelfMedicalInfo] = useState('')

  const caretakers = [
    {
      id: 1,
      name: 'Kavitha',
      type: 'professional',
      services: ['babysitting', 'elder-care','physically-ill'],
      rating: 4.9,
      experience: '5 years',
      hourlyRate: 25,
      location: 'bangalore',
      phone: '+1 234-567-8901',
      email: 'kavitha.j@careplus.com',
      qualifications: 'RN, Pediatric Specialist',
      availability: ['6', '12', '24'],
      image: 'KA'
    },
      {
      id: 2,
      name: 'Santhosh',
      type: 'professional',
      services: ['elder-care', 'physically-ill'],
      rating: 4.6,
      experience: '4 years',
      hourlyRate: 20,
      location: 'Trichy',
      phone: '+1 234-567-8904',
      email: 'santhosh.w@careplus.com',
      qualifications: 'First Aid Certified, Companion Care Training',
      availability: ['6', '12', '24'],
      image: 'S'
    },
    {
      id: 3,
      name: 'Michael',
      type: 'professional',
      services: ['physically-ill', 'elder-care'],
      rating: 4.8,
      experience: '8 years',
      hourlyRate: 30,
      location: 'Midtown',
      phone: '+1 234-567-8902',
      email: 'michael.c@careplus.com',
      qualifications: 'LPN, Geriatric Care Certified',
      availability: ['6', '12', '24'],
      image: 'MC'
    },
    {
      id: 4,
      name: 'Rakshana',
      type: 'non-professional',
      services: ['babysitting','elder-care'],
      rating: 4.7,
      experience: '3 years',
      hourlyRate: 18,
      location: 'hydrabed',
      phone: '+1 236-566-8903',
      email: 'rakshana.r@careplus.com',
      qualifications: 'CPR Certified, Child Development Training',
      availability: ['6', '12', '24'],
      image: 'RA'
    },
    {
      id: 5,
      name: 'Dhivya',
      type: 'non-professional',
      services: ['elder-care', 'physically-ill'],
      rating: 4.6,
      experience: '4 years',
      hourlyRate: 20,
      location: 'Uptown',
      phone: '+1 234-567-8904',
      email: 'dhivya.w@careplus.com',
      qualifications: 'First Aid Certified, Companion Care Training',
      availability: ['6', '12', '24'],
      image: 'D'
    },
    {
      id: 6,
      name: 'Krishnapriya',
      type: 'non-professional',
      services: ['babysitting', 'physically-ill'],
      rating: 4.6,
      experience: '4 years',
      hourlyRate: 20,
      location: 'Chennai',
      phone: '+1 234-567-8904',
      email: 'krishnapriya.w@careplus.com',
      qualifications: 'First Aid Certified, Companion Care Training',
      availability: ['6', '12', '24'],
      image: 'KP'
    },
        {
      id: 7,
      name: 'Madhu',
      type: 'professional',
      services: ['elder-care', 'physically-ill'],
      rating: 4.6,
      experience: '4 years',
      hourlyRate: 20,
      location: 'Chennai',
      phone: '+1 234-567-8904',
      email: 'madhu.w@careplus.com',
      qualifications: 'First Aid Certified, Companion Care Training',
      availability: ['6', '12', '24'],
      image: 'MD'
    }

  ]

  const filteredCaretakers = caretakers.filter(caretaker => {
    return (
      (!filters.serviceType || caretaker.services.includes(filters.serviceType)) &&
      (!filters.professionalType || caretaker.type === filters.professionalType) &&
      (!filters.duration || caretaker.availability.includes(filters.duration))
    )
  })

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const handleBooking = () => {
    if (!selectedCaretaker) return
    
    // Validate required fields based on booking type
    if (!selfBooking && !selectedPatient) {
      alert('Please select a patient to proceed with the booking.');
      return;
    }
    
    if (!filters.date || !filters.duration) {
      alert('Please select both date and duration for the booking.');
      return;
    }

    const bookingData = {
      caretaker: selectedCaretaker,
      patient: selfBooking ? 'Self' : patients.find(p => p.id === selectedPatient)?.name || '',
      date: filters.date,
      duration: filters.duration,
      serviceType: filters.serviceType,
      medicalInfo: selfBooking ? selfMedicalInfo : '',
      status: 'pending',
      totalAmount: selectedCaretaker.hourlyRate * parseInt(filters.duration)
    }

    onBooking(bookingData)
    navigate('/payment', { state: { booking: bookingData } })
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: '#bed9f4ff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="dashboard-header">
            <h1>Book a Caretaker</h1>
            <p>Find the perfect caretaker for your needs</p>
          </div>

          <div className="filter-section">
            <h3><Filter size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />Filter Caretakers</h3>
            <div className="filter-row">
              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={filters.serviceType}
                  onChange={handleFilterChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">All Services</option>
                  <option value="babysitting">Babysitting</option>
                  <option value="elder-care">Elder Care</option>
                  <option value="physically-ill">Physically Ill Care</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="professionalType">Professional Type</label>
                <select
                  id="professionalType"
                  name="professionalType"
                  value={filters.professionalType}
                  onChange={handleFilterChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">All Types</option>
                  <option value="professional">Professional</option>
                  <option value="non-professional">Non-Professional</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (Hours)</label>
                <select
                  id="duration"
                  name="duration"
                  value={filters.duration}
                  onChange={handleFilterChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Duration</option>
                  <option value="6">6 Hours</option>
                  <option value="12">12 Hours</option>
                  <option value="24">24 Hours</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="form-container" style={{ marginBottom: '2rem' }}>
            <h3>Booking Options</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <button
                type="button"
                className={`user-type-btn ${!selfBooking ? 'active' : ''}`}
                onClick={() => setSelfBooking(false)}
              >
                Book for Patient
              </button>
              <button
                type="button"
                className={`user-type-btn ${selfBooking ? 'active' : ''}`}
                onClick={() => setSelfBooking(true)}
              >
                Self Booking
              </button>
            </div>

            {!selfBooking && patients.length > 0 && (
              <div className="form-group">
                <label htmlFor="patient">Select Patient</label>
                <select
                  id="patient"
                  value={selectedPatient}
                  onChange={(e) => setSelectedPatient(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name} (Age: {patient.age})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selfBooking && (
              <div className="form-group">
                <label htmlFor="selfMedicalInfo">Your Medical Information</label>
                <textarea
                  id="selfMedicalInfo"
                  value={selfMedicalInfo}
                  onChange={(e) => setSelfMedicalInfo(e.target.value)}
                  rows="3"
                  placeholder="Any medical conditions, allergies, or special requirements"
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
            )}
          </div>

          <div className="caretaker-grid">
            {filteredCaretakers.map((caretaker) => (
              <motion.div
                key={caretaker.id}
                className={`caretaker-card ${selectedCaretaker?.id === caretaker.id ? 'selected' : ''}`}
                onClick={() => setSelectedCaretaker(caretaker)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="caretaker-avatar">
                  {caretaker.image}
                </div>
                <h3>{caretaker.name}</h3>
                <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                  {caretaker.type === 'professional' ? 'Professional' : 'Non-Professional'}
                </p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="star"
                      fill={i < Math.floor(caretaker.rating) ? '#fbbf24' : 'none'}
                    />
                  ))}
                  <span style={{ marginLeft: '0.5rem' }}>{caretaker.rating}</span>
                </div>
                <p><Clock size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />{caretaker.experience}</p>
                <p><MapPin size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />{caretaker.location}</p>
                <p style={{ fontWeight: 'bold', color: '#10b981' }}>${caretaker.hourlyRate}/hour</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{caretaker.qualifications}</p>
                
                {selectedCaretaker?.id === caretaker.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ marginTop: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '8px' }}
                  >
                    <h4>Contact Details:</h4>
                    <p><Phone size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />{caretaker.phone}</p>
                    <p><Mail size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />{caretaker.email}</p>
                    <p><strong>Services:</strong> {caretaker.services.join(', ')}</p>
                    <p><strong>Available Durations:</strong> {caretaker.availability.join(', ')} hours</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {selectedCaretaker && filters.date && filters.duration && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              <button 
                onClick={handleBooking} 
                className="btn btn-primary" 
                style={{ 
                  fontSize: '1.2rem', 
                  padding: '1rem 2rem',
                  backgroundColor: '#007bff',
                  cursor: 'pointer'
                }}
                disabled={false}
              >
                Proceed to Payment
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default BookCaretaker
