import React from 'react'
import { motion } from 'framer-motion'
import { Baby, Heart, Stethoscope } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'babysitting',
      icon: <Baby size={48} />,
      title: 'Babysitting Services',
      description: 'Professional childcare services for your little ones',
      features: [
        'Certified and background-checked babysitters',
        'Age-appropriate activities and games',
        'Meal preparation and feeding assistance',
        'Homework help and educational support',
        'Emergency care protocols',
        'Regular updates to parents'
      ],
      image: 'https://github.com/Madhudhanush/CarePlus/blob/main/images/babysitting.png?raw=true'
    },
    {
      id: 'elder-care',
      icon: <Heart size={48} />,
      title: 'Elder Care',
      description: 'Compassionate care for seniors with dignity and respect',
      features: [
        'Personal care and hygiene assistance',
        'Medication management and reminders',
        'Companionship and social interaction',
        'Light housekeeping and meal preparation',
        'Transportation to appointments',
        'Health monitoring and reporting'
      ],
      image: 'https://github.com/Madhudhanush/CarePlus/blob/main/images/elderly.png?raw=true'
    },
    {
      id: 'physically-ill',
      icon: <Stethoscope size={48} />,
      title: 'Physically Ill Care',
      description: 'Specialized medical support for recovery and healing',
      features: [
        'Post-surgery recovery assistance',
        'Chronic illness management',
        'Physical therapy support',
        'Medical equipment assistance',
        'Wound care and dressing changes',
        'Coordination with healthcare providers'
      ],
      image: 'https://github.com/Madhudhanush/CarePlus/blob/main/images/physicallyill.png?raw=true'
    }
  ]

  return (
    <div style={{ paddingTop: '2rem' }}>
      <section id="services" className="hero" style={{ padding: '2rem 0' }}>

        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive healthcare solutions tailored to your specific needs
          </motion.p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 0' }}>
        {services.map((service, index) => (
          <motion.section
            key={service.id}
            id={service.id}
            style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '4rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
              <div className="feature-icon" style={{ margin: '0 0 1rem 0' }}>
                {service.icon}
              </div>
              <h2 style={{ marginBottom: '1rem', color: '#10b981' }}>{service.title}</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#6b7280' }}>
                {service.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: '1px solid #f3f4f6',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: '#10b981', 
                      borderRadius: '50%', 
                      marginRight: '1rem' 
                    }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

export default Services
