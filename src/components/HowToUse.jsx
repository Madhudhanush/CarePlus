import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Search, Calendar, CreditCard } from 'lucide-react'

const HowToUse = () => {
  const steps = [
    {
      number: 1,
      icon: <UserPlus size={24} />,
      title: 'Sign Up',
      description: 'Create your account as a Guardian or Caretaker with your basic details'
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: 'Find Care',
      description: 'Browse through verified caretakers or add patient details for personalized care'
    },
    {
      number: 3,
      icon: <Calendar size={24} />,
      title: 'Book Service',
      description: 'Select your preferred caretaker, choose date and time, and confirm your booking'
    },
    {
      number: 4,
      icon: <CreditCard size={24} />,
      title: 'Secure Payment',
      description: 'Complete your booking with our secure payment system and enjoy quality care'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  return (
    <section className="how-to-use">
      <div className="container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>How to Use Careplus</h2>
          <p>Get started with professional healthcare in just 4 simple steps</p>
        </motion.div>
        
        <motion.div 
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="step-number">
                {step.number}
              </div>
              <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowToUse
