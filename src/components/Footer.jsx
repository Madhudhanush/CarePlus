import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  Clock
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Babysitting', href: '/services#babysitting' },
      { name: 'Elder Care', href: '/services#elder-care' },
      { name: 'Medical Care', href: '/services#physically-ill' },
      { name: 'Emergency Care', href: '/services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Press', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#contact' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' }
  ]

  const certifications = [
    { icon: <Shield size={24} />, text: 'HIPAA Compliant' },
    { icon: <Award size={24} />, text: 'ISO Certified' },
    { icon: <Clock size={24} />, text: '24/7 Support' }
  ]

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', 
      color: 'white',
      marginTop: '2rem'
    }}>
      <div className="container" style={{ padding: '1.5rem 0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <Heart size={28} color="#10b981" style={{ marginRight: '0.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Careplus</h3>
            </div>
            <p style={{ 
              marginBottom: '1rem', 
              lineHeight: '1.5', 
              color: '#d1d5db',
              fontSize: '1rem'
            }}>
              Connecting families with professional, compassionate caretakers. 
              Your trusted partner in healthcare and wellness.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={16} style={{ marginRight: '0.5rem', color: '#10b981' }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={16} style={{ marginRight: '0.5rem', color: '#10b981' }} />
                <span>support@careplus.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={16} style={{ marginRight: '0.5rem', color: '#10b981' }} />
                <span>123 Healthcare Ave, Chennai</span>
              </div>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#10b981', textTransform: 'capitalize' }}>
                {category === 'services' ? 'Our Services' : category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href={link.href}
                      style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#10b981'}
                      onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem 0',
            borderTop: '1px solid #374151',
            borderBottom: '1px solid #374151',
            marginBottom: '1rem'
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#d1d5db'
              }}
            >
              <div style={{ color: '#10b981' }}>{cert.icon}</div>
              <span style={{ fontWeight: '500' }}>{cert.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.name}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#2f5491ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#10b981'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#374151'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div style={{ 
            textAlign: 'center', 
            color: '#9ca3af',
            fontSize: '0.85rem'
          }}>
            <p>© {currentYear} Careplus Healthcare. All rights reserved.</p>
            <p style={{ marginTop: '0.25rem' }}>
              Made with <Heart size={14} color="#ef4444" style={{ display: 'inline', margin: '0 0.25rem' }} /> for better healthcare
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
