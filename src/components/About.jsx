import React from 'react'
import { motion } from 'framer-motion'
import { Code, GraduationCap, Coffee } from 'lucide-react'
import './About.css'

const About = () => {
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
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2>About Me</h2>
            <p>
              I'm a passionate 3rd year BTech student with a deep love for web development. 
              My journey in programming started with curiosity and has evolved into a strong 
              foundation in modern web technologies.
            </p>
            <p>
              I enjoy building full-stack applications that solve real-world problems. 
              From creating e-commerce platforms to developing interactive web applications, 
              I love the process of turning ideas into functional, user-friendly digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or working on personal projects that challenge my skills.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-card">
              <Code className="stat-icon" />
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <GraduationCap className="stat-icon" />
              <h3>3rd Year</h3>
              <p>BTech Student</p>
            </div>
            <div className="stat-card">
              <Coffee className="stat-icon" />
              <h3>1000+</h3>
              <p>Cups of Coffee</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
