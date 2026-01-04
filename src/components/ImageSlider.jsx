import React from 'react'
import { motion } from 'framer-motion'

const ImageSlider = () => {
  const slides = [
  {
    image: '/images/babysitting.png',
    title: 'Professional Babysitting',
    description: 'Trusted childcare with certified babysitters for your peace of mind'
  },
  {
    image: '/images/elderly.png',
    title: 'Elder Care Services',
    description: 'Compassionate care for seniors with dignity and respect'
  },
  {
    image: '/images/physicallyill.png',
    title: 'Physically Ill Care',
    description: 'Specialized medical support for those recovering and healing'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    title: '24/7 Availability',
    description: 'Round-the-clock care services when you need them most'
  }
]

  return (
    <motion.div 
      className="slider-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ImageSlider
