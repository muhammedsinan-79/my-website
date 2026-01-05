import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink transform md:-translate-x-1/2"></div>

            {/* Timeline item */}
            <motion.div
              className="relative pl-16 md:pl-0 md:pr-16 pb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-dark-bg transform md:-translate-x-1/2 neon-glow"></div>

              {/* Content */}
              <div className="glass rounded-xl p-6 md:p-8 hover:border-neon-blue/50 transition-all">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Electrical Engineering</h3>
                    <p className="text-gray-400">Current Student</p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full text-sm font-semibold">
                    Ongoing
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing Electrical Engineering while simultaneously learning MERN stack development 
                  and actively trading in financial markets. Combining engineering fundamentals with modern 
                  software development and financial markets expertise.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-300 font-semibold">Location:</span> India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
