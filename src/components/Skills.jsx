import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Trading & Finance',
      skills: [
        'Forex Trading',
        'Stock Market Analysis',
        'Risk Management',
        'Technical Analysis',
        'Price Action',
        'Portfolio Management'
      ],
      icon: '📊',
      color: 'from-neon-blue to-cyan-500'
    },
    {
      title: 'Development',
      skills: [
        'MERN Stack Development',
        'JavaScript (ES6+)',
        'REST APIs',
        'Git & GitHub',
        'Frontend Development',
        'Backend Development'
      ],
      icon: '💻',
      color: 'from-neon-purple to-purple-500'
    },
    {
      title: 'Business & Strategy',
      skills: [
        'Business Strategy',
        'Brand Building',
        'Market Analysis',
        'Entrepreneurship',
        'Supply Chain',
        'Global Trade'
      ],
      icon: '🚀',
      color: 'from-neon-pink to-pink-500'
    },
    {
      title: 'Engineering',
      skills: [
        'Electrical Engineering Fundamentals',
        'Problem Solving',
        'Systems Thinking',
        'Data Analysis',
        'Algorithm Design',
        'Project Management'
      ],
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass rounded-xl p-6 hover:border-neon-blue/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-neon-blue/50 transition-all"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
