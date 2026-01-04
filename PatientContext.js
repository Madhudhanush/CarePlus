// import React, { createContext, useContext, useState } from 'react'

// import { usePatientContext } from './context/PatientContext'
// import { useAuthContext } from './context/AuthContext'
// const PatientContext = createContext()

// export const usePatientContext = () => useContext(PatientContext)

// export const PatientProvider = ({ children }) => {
//   const [patients, setPatients] = useState([
//     { name: 'Raj', age: 67, gender: 'Male', medicalInfo: 'Diabetics' }
//   ])

//   // Track accepted booking IDs
//   const [acceptedBookingIds, setAcceptedBookingIds] = useState([])

//   // Accept a booking by ID
//   const acceptBooking = (bookingId) => {
//     if (!acceptedBookingIds.includes(bookingId)) {
//       setAcceptedBookingIds((prev) => [...prev, bookingId])
//     }
//   }

//   return (
//     <PatientContext.Provider value={{ patients, acceptedBookingIds, acceptBooking }}>
//       {children}
//     </PatientContext.Provider>
//   )
// }
