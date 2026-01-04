import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, Plus, Search, UserPlus, Users } from 'lucide-react'

const GuardianDetails = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState('guardian-info')
  const [guardianInfo, setGuardianInfo] = useState({
    name: '',
    phone: '',
    relationship: '',
    address: ''
  })
  const [patients, setPatients] = useState([])
  const [additionalGuardians, setAdditionalGuardians] = useState([])
  const [currentPatient, setCurrentPatient] = useState({
    name: '',
    age: '',
    gender: '',
    medicalInfo: ''
  })
  const [existingPatientId, setExistingPatientId] = useState('')
  const [selfMedicalInfo, setSelfMedicalInfo] = useState('')
  const [currentGuardian, setCurrentGuardian] = useState({
    name: '',
    phone: '',
    relationship: '',
    address: ''
  })

  const handleGuardianInfoSubmit = (e) => {
    e.preventDefault()
    setCurrentStep('patient-options')
  }

  const handleAddPatient = (e) => {
    e.preventDefault()
    const newPatient = {
      ...currentPatient,
      id: Date.now()
    }
    setPatients([...patients, newPatient])
    setCurrentPatient({ name: '', age: '', gender: '', medicalInfo: '' })
    alert('Patient added successfully!')
  }

  const handleExistingPatient = () => {
    // Mock existing patient lookup
    const mockPatient = {
      id: existingPatientId,
      name: 'John Doe',
      age: '45',
      gender: 'Male',
      medicalInfo: 'Diabetes, Hypertension'
    }
    alert(`Patient found: ${mockPatient.name}, Age: ${mockPatient.age}`)
  }

  const handleAddGuardian = (e) => {
    e.preventDefault()
    const newGuardian = {
      ...currentGuardian,
      id: Date.now()
    }
    setAdditionalGuardians([...additionalGuardians, newGuardian])
    setCurrentGuardian({ name: '', phone: '', relationship: '', address: '' })
    alert('Additional guardian added successfully!')
  }

  const handleFinalSubmit = () => {
    const data = {
      guardian: guardianInfo,
      patients,
      additionalGuardians,
      selfMedicalInfo
    }
    onSubmit(data)
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
          {currentStep === 'guardian-info' && (
            <>
              <div className="auth-header">
                <h2>Guardian Details</h2>
                <p>Please provide your information</p>
              </div>

              <form onSubmit={handleGuardianInfoSubmit}>
                <div className="form-section">
                  <h3><User size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />Guardian Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={guardianInfo.name}
                        onChange={(e) => setGuardianInfo({...guardianInfo, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={guardianInfo.phone}
                        onChange={(e) => setGuardianInfo({...guardianInfo, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="relationship">Relationship to Patient</label>
                      <select
                        id="relationship"
                        value={guardianInfo.relationship}
                        onChange={(e) => setGuardianInfo({...guardianInfo, relationship: e.target.value})}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select Relationship</option>
                        <option value="parent">Parent</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="sibling">Sibling</option>
                        <option value="relative">Other Relative</option>
                        <option value="friend">Friend</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      value={guardianInfo.address}
                      onChange={(e) => setGuardianInfo({...guardianInfo, address: e.target.value})}
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

                <div className="auth-actions">
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            </>
          )}

          {currentStep === 'patient-options' && (
            <>
              <div className="auth-header">
                <h2>Patient Management</h2>
                <p>Choose an option to manage patients</p>
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-card" onClick={() => setCurrentStep('add-patient')}>
                  <Plus size={48} color="#10b981" />
                  <h3>Add New Patient</h3>
                  <p>Add patient details for care booking</p>
                </div>

                <div className="dashboard-card" onClick={() => setCurrentStep('existing-patient')}>
                  <Search size={48} color="#3b82f6" />
                  <h3>Existing Patient</h3>
                  <p>Search and select existing patient</p>
                </div>

                <div className="dashboard-card" onClick={() => setCurrentStep('self-booking')}>
                  <User size={48} color="#8b5cf6" />
                  <h3>Self Booking</h3>
                  <p>Book caretaker for yourself</p>
                </div>

                <div className="dashboard-card" onClick={() => setCurrentStep('add-guardian')}>
                  <UserPlus size={48} color="#f59e0b" />
                  <h3>Add Guardian</h3>
                  <p>Add additional guardian</p>
                </div>
              </div>

              <div className="auth-actions" style={{ marginTop: '2rem' }}>
                <button onClick={handleFinalSubmit} className="btn btn-primary">
                  Complete Setup
                </button>
              </div>
            </>
          )}

          {currentStep === 'add-patient' && (
            <>
              <div className="auth-header">
                <h2>Add New Patient</h2>
                <p>Enter patient details</p>
              </div>

              <form onSubmit={handleAddPatient}>
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="patientName">Patient Name</label>
                      <input
                        type="text"
                        id="patientName"
                        value={currentPatient.name}
                        onChange={(e) => setCurrentPatient({...currentPatient, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="patientAge">Age</label>
                      <input
                        type="number"
                        id="patientAge"
                        value={currentPatient.age}
                        onChange={(e) => setCurrentPatient({...currentPatient, age: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="patientGender">Gender</label>
                    <select
                      id="patientGender"
                      value={currentPatient.gender}
                      onChange={(e) => setCurrentPatient({...currentPatient, gender: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="medicalInfo">Medical Information</label>
                    <textarea
                      id="medicalInfo"
                      value={currentPatient.medicalInfo}
                      onChange={(e) => setCurrentPatient({...currentPatient, medicalInfo: e.target.value})}
                      rows="4"
                      placeholder="Any medical conditions, allergies, medications, or special requirements"
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

                <div className="auth-actions">
                  <button type="submit" className="btn btn-primary">
                    Add Patient
                  </button>
                  <button type="button" onClick={() => setCurrentStep('patient-options')} className="btn btn-secondary">
                    Back
                  </button>
                </div>
              </form>

              {patients.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h3>Added Patients:</h3>
                  {patients.map((patient) => (
                    <div key={patient.id} className="patient-card">
                      <h4>{patient.name}</h4>
                      <p>Age: {patient.age}, Gender: {patient.gender}</p>
                      <p>Medical Info: {patient.medicalInfo}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {currentStep === 'existing-patient' && (
            <>
              <div className="auth-header">
                <h2>Existing Patient</h2>
                <p>Enter patient ID to view details</p>
              </div>

              <div className="form-group">
                <label htmlFor="patientId">Patient ID</label>
                <input
                  type="text"
                  id="patientId"
                  value={existingPatientId}
                  onChange={(e) => setExistingPatientId(e.target.value)}
                  placeholder="Enter patient ID"
                />
              </div>

              <div className="auth-actions">
                <button onClick={handleExistingPatient} className="btn btn-primary">
                  Search Patient
                </button>
                <button onClick={() => setCurrentStep('patient-options')} className="btn btn-secondary">
                  Back
                </button>
              </div>
            </>
          )}

          {currentStep === 'self-booking' && (
            <>
              <div className="auth-header">
                <h2>Self Booking</h2>
                <p>Book caretaker for yourself</p>
              </div>

              <div className="form-group">
                <label htmlFor="selfMedical">Your Medical Information</label>
                <textarea
                  id="selfMedical"
                  value={selfMedicalInfo}
                  onChange={(e) => setSelfMedicalInfo(e.target.value)}
                  rows="4"
                  placeholder="Any medical conditions, allergies, medications, or special requirements"
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

              <div className="auth-actions">
                <button onClick={() => setCurrentStep('patient-options')} className="btn btn-primary">
                  Save & Continue
                </button>
                <button onClick={() => setCurrentStep('patient-options')} className="btn btn-secondary">
                  Back
                </button>
              </div>
            </>
          )}

          {currentStep === 'add-guardian' && (
            <>
              <div className="auth-header">
                <h2>Add Additional Guardian</h2>
                <p>Add another guardian as backup</p>
              </div>

              <form onSubmit={handleAddGuardian}>
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="guardianName">Guardian Name</label>
                      <input
                        type="text"
                        id="guardianName"
                        value={currentGuardian.name}
                        onChange={(e) => setCurrentGuardian({...currentGuardian, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="guardianPhone">Phone Number</label>
                      <input
                        type="tel"
                        id="guardianPhone"
                        value={currentGuardian.phone}
                        onChange={(e) => setCurrentGuardian({...currentGuardian, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guardianRelationship">Relationship</label>
                    <select
                      id="guardianRelationship"
                      value={currentGuardian.relationship}
                      onChange={(e) => setCurrentGuardian({...currentGuardian, relationship: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Select Relationship</option>
                      <option value="parent">Parent</option>
                      <option value="spouse">Spouse</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="relative">Other Relative</option>
                      <option value="friend">Friend</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guardianAddress">Address</label>
                    <textarea
                      id="guardianAddress"
                      value={currentGuardian.address}
                      onChange={(e) => setCurrentGuardian({...currentGuardian, address: e.target.value})}
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

                <div className="auth-actions">
                  <button type="submit" className="btn btn-primary">
                    Add Guardian
                  </button>
                  <button type="button" onClick={() => setCurrentStep('patient-options')} className="btn btn-secondary">
                    Back
                  </button>
                </div>
              </form>

              {additionalGuardians.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h3>Additional Guardians:</h3>
                  {additionalGuardians.map((guardian) => (
                    <div key={guardian.id} className="patient-card">
                      <h4>{guardian.name}</h4>
                      <p>Phone: {guardian.phone}</p>
                      <p>Relationship: {guardian.relationship}</p>
                      <p>Address: {guardian.address}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default GuardianDetails
