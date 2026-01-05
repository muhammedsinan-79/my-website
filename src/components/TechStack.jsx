import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600', level: 75 },
    { name: 'Express.js', icon: '⚡', color: 'from-gray-400 to-gray-600', level: 70 },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-400 to-blue-600', level: 80 },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600', level: 75 },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600', level: 85 },
    { name: 'REST APIs', icon: '🔌', color: 'from-purple-400 to-purple-600', level: 75 },
    { name: 'Git & GitHub', icon: '📦', color: 'from-orange-400 to-orange-600', level: 80 },
  ]

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="glass rounded-xl p-6 hover:border-neon-blue/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{tech.icon}</span>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-neon-blue font-semibold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-gray-300">
              Currently learning and building with the <span className="text-neon-blue font-semibold">MERN Stack</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
