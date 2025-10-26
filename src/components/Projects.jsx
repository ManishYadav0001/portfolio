import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Full Stack E-commerce Website',
      description: 'A complete MERN stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
      image: '/ecommerce.png',
      github: 'https://github.com/ManishYadav0001/E-commerce-Clothing-Website',
     
      featured: true
    },
    {
      id: 2,
      title: 'Anonymous Message Sender',
      description: 'A Next.js full-stack application that allows users to send anonymous messages with real-time updates and user management.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      image: '/anonymous.png',
      github: 'https://github.com/ManishYadav0001/Next-js-Phantom-post-Anonymous-message-sender-',
     
      featured: true
    },
    {
      id: 3,
      title: 'Gemini AI Clone',
      description: 'A React-based clone of Google\'s Gemini AI interface with chat functionality and modern UI design.',
      technologies: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      image: '/api/placeholder/400/300',
      github: 'https://github.com/ManishYadav0001/Gemini-clone',
   
      featured: false
    },
    {
      id: 4,
      title: 'YouTube Clone',
      description: 'A responsive YouTube clone built with React featuring video player, search functionality, and user interface.',
      technologies: ['React', 'JavaScript', 'CSS3', 'YouTube API'],
      image: '/api/placeholder/400/300',
      github: 'https://github.com/ManishYadav0001/Youtube-Clone',
     
      featured: false
    }
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>My Projects</h2>
            <p>Here are some of my recent projects that showcase my skills and passion for development</p>
          </motion.div>

          <motion.div className="projects-grid" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{ display: 'none' }}>
                    <Code size={48} />
                  </div>
                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={24} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
