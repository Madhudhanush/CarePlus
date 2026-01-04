import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/careplus-logo.png" 
              alt="CarePlus Logo"
              style={{ height: '60px',marginleft: '-10px' }}
            />
            Careplus
          </Link>
          
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          <div className="nav-actions">
            {user ? (
              <>
                <span style={{ color: 'white', marginRight: '1rem' }}>
                  Welcome, {user.name || user.email}
                </span>
                <button onClick={onLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth" className="btn btn-secondary">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
