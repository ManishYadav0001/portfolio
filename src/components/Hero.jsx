import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <h1>
              Hi, I'm <span className="highlight">Manish Yadav</span>
            </h1>
            <h2>Full Stack Developer & 3rd Year BTech Student</h2>
            <p>
              Passionate about creating amazing web experiences with modern technologies.
              I specialize in MERN stack development and love building scalable applications.
            </p>

            <div className="hero-buttons">
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>

            <div className="social-links">
              <a href="https://github.com/ManishYadav0001" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manish-yadav-3523b431a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:krustermanish.com">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="image-container">
              <img 
                src="/portimage.jpeg" 
                alt="Manish Yadav" 
                className="hero-photo"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
