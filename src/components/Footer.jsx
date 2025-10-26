import React from 'react'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Made with <Heart className="heart-icon" /> by Manish Yadav
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/ManishYadav0001" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manish-yadav-3523b431a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:krustermanish@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
