import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Code2, 
  Zap, 
  Server, 
  Database, 
  Globe,
  Terminal
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: Code, level: 90, color: '#e34f26' },
    { name: 'CSS3', icon: Palette, level: 85, color: '#1572b6' },
    { name: 'JavaScript', icon: Code2, level: 88, color: '#f7df1e' },
    { name: 'React', icon: Zap, level: 85, color: '#61dafb' },
    { name: 'Node.js', icon: Server, level: 80, color: '#339933' },
    { name: 'Express.js', icon: Terminal, level: 75, color: '#000000' },
    { name: 'MongoDB', icon: Database, level: 70, color: '#47a248' },
    { name: 'Next.js', icon: Globe, level: 82, color: '#000000' }
  ]

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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with to create amazing web experiences</p>
          </motion.div>

          <motion.div className="skills-grid" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-card"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon size={40} />
                </div>
                <h3>{skill.name}</h3>
                <div className="skill-level">
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
