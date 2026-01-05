import React from 'react'
import { motion } from 'framer-motion'

const Philosophy = () => {
  const quotes = [
    {
      text: "Risk first. Profit later.",
      description: "Prioritizing capital preservation over aggressive gains"
    },
    {
      text: "Systems build freedom.",
      description: "Automated processes create scalability and independence"
    },
    {
      text: "Brands and capital scale when discipline is non-negotiable.",
      description: "Consistency and discipline are the foundation of growth"
    }
  ]

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Philosophy & Mindset</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background gradient effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.blockquote
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 gradient-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    "{quote.text}"
                  </motion.blockquote>
                  <motion.p
                    className="text-gray-400 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  >
                    {quote.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy
