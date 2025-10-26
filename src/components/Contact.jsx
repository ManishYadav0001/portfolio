import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Clock, Award } from 'lucide-react'
import './Contact.css'

const Contact = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new opportunities and interesting projects</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Connect</h3>
              <p>
                Feel free to reach out if you're looking for a developer, 
                have a question, or just want to say hi!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>krustermanish@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 7895104835</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>India , UP</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/ManishYadav0001" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/manish-yadav-3523b431a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:krustermanish@gmail.com">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="card-content">
                <h3>Quick Info</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <Calendar className="info-icon" />
                    <div>
                      <h4>Available For</h4>
                      <p>Freelance Projects / Job opportunities</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <Clock className="info-icon" />
                    <div>
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <Award className="info-icon" />
                    <div>
                      <h4>Experience</h4>
                      <p>1+ Years Coding</p>
                    </div>
                  </div>
                </div>
                
                <div className="cta-section">
                  <h4>Ready to work together?</h4>
                  <p>Let's discuss your next project and bring your ideas to life!</p>
                  <a href="mailto:krustermanish@gmail.com" className="btn btn-primary">
                    <Mail size={20} />
                    Start a Conversation
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
