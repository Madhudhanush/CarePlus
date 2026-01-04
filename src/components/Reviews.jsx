import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Mother of 2',
      rating: 5,
      image: 'SM',
      review: 'Careplus has been a lifesaver for our family. The babysitters are professional, caring, and my children absolutely love them.',
      service: 'Babysitting Services'
    },
    {
      id: 2,
      name: 'Robert Johnson',
      role: 'Son of Elderly Parent',
      rating: 5,
      image: 'RJ',
      review: 'The elder care service provided by Careplus is exceptional. The caretaker assigned to my father is genuinely caring.',
      service: 'Elder Care'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      role: 'Healthcare Professional',
      rating: 5,
      image: 'MG',
      review: 'As a nurse myself, I was skeptical about hiring external care. But Careplus exceeded all expectations.',
      service: 'Medical Care'
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What Our Families Say</h2>
          <p>Real stories from real families who trust Careplus with their loved ones</p>
        </motion.div>

        <motion.div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '30px',
              opacity: 0.1
            }}>
              <Quote size={60} color="#10b981" />
            </div>

            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                border: '4px solid white',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}>
                {reviews[currentReview].image}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill="#fbbf24"
                    color="#fbbf24"
                    style={{ margin: '0 2px' }}
                  />
                ))}
              </div>

              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                "{reviews[currentReview].review}"
              </p>

              <div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#10b981',
                  marginBottom: '0.5rem'
                }}>
                  {reviews[currentReview].name}
                </h4>
                <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                  {reviews[currentReview].role}
                </p>
                <p style={{
                  color: '#10b981',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>
                  {reviews[currentReview].service}
                </p>
              </div>
            </motion.div>

            <button
              onClick={prevReview}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ChevronLeft size={20} color="#10b981" />
            </button>

            <button
              onClick={nextReview}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ChevronRight size={20} color="#10b981" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
