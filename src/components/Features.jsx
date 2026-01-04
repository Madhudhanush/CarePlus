import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Clock, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Heart size={24} />,
      title: 'Compassionate Care',
      description: 'Our caretakers provide loving, personalized care for every individual'
    },
    {
      icon: <Shield size={24} />,
      title: 'Verified Professionals',
      description: 'All caretakers are thoroughly vetted and certified professionals'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock availability for emergency and regular care needs'
    },
    {
      icon: <Users size={24} />,
      title: 'Family Connection',
      description: 'Keep families connected with regular updates and communication'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Careplus?</h2>
          <p>We provide comprehensive healthcare solutions with a personal touch</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
