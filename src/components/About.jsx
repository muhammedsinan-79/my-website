import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an <span className="text-neon-blue font-semibold">Electrical Engineering student</span> currently 
              studying <span className="text-neon-purple font-semibold">MERN stack development</span>. I actively trade 
              Forex and invest in the stock market using a disciplined, risk-managed, and data-driven approach.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Alongside trading and development, I am building my own clothing brand, 
              <span className="text-neon-pink font-semibold"> Casualio</span>, and planning an export-oriented business. 
              I combine engineering logic, coding precision, and business mindset to create scalable systems in finance, 
              technology, and entrepreneurship.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My focus is on <span className="text-neon-blue font-semibold">long-term growth and execution</span>, 
              whether it's building robust trading systems, developing scalable web applications, or growing brands 
              that resonate with modern consumers.
            </p>

            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                📍 Location: <span className="text-gray-300">India</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
