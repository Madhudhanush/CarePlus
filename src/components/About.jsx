import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, Heart, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Families', icon: <Users size={24} /> },
    { number: '500+', label: 'Certified Caretakers', icon: <Award size={24} /> },
    { number: '24/7', label: 'Support Available', icon: <Clock size={24} /> },
    { number: '99%', label: 'Satisfaction Rate', icon: <Heart size={24} /> }
  ]

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Trust & Safety',
      description: 'All our caretakers undergo thorough background checks and verification processes to ensure your family\'s safety.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Compassionate Care',
      description: 'We believe in providing care with empathy, respect, and dignity for every individual we serve.'
    },
    {
      icon: <Award size={32} />,
      title: 'Professional Excellence',
      description: 'Our team consists of qualified professionals committed to delivering the highest standard of care.'
    },
    {
      icon: <Users size={32} />,
      title: 'Family-Centered',
      description: 'We understand that every family is unique and tailor our services to meet your specific needs.'
    }
  ]

  return (
    <section id="about" style={{ padding: '4rem 0', background: 'white' }}>
      <div className="container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Careplus</h2>
          <p>Dedicated to providing exceptional healthcare services with compassion and professionalism</p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            padding: '3rem 0'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                borderRadius: '12px',
                color: 'white'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ marginBottom: '1rem' }}>{stat.icon}</div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.number}
              </h3>
              <p style={{ fontSize: '1.1rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: '#10b981' }}>
            Our Core Values
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#10b981'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white'
                }}>
                  {value.icon}
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#10b981' }}>
                  {value.title}
                </h4>
                <p style={{ lineHeight: '1.6', color: '#6b7280' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
