import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImageSlider from './ImageSlider'
import Features from './Features'
import HowToUse from './HowToUse'
import ServicesSection from './ServicesSection'
import About from './About'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Healthcare Made Simple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with professional caretakers and provide the best care for your loved ones
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/auth" className="btn btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <ImageSlider />
      </div>

      <HowToUse />
      <ServicesSection />
      <Features />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
