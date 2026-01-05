import React from 'react'
import { motion } from 'framer-motion'

const BusinessBrands = () => {
  const businesses = [
    {
      name: 'Casualio',
      type: 'Clothing Brand',
      icon: '👔',
      description: 'Modern streetwear and casual fashion brand focused on quality, style, and contemporary aesthetics.',
      vision: 'Building a brand that resonates with modern consumers through authentic design and sustainable practices.',
      status: 'Active',
      color: 'from-neon-pink to-neon-purple'
    },
    {
      name: 'Export Business',
      type: 'Global Trade',
      icon: '🌍',
      description: 'Export-oriented business in the startup phase, focusing on scalable supply chains and global market entry.',
      vision: 'Creating scalable systems for international trade with a focus on efficiency and growth.',
      status: 'Startup Phase',
      color: 'from-neon-blue to-neon-purple'
    }
  ]

  return (
    <section id="business" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Business & Brands</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <motion.div
                key={business.name}
                className="glass rounded-2xl p-8 hover:border-neon-blue/50 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background gradient effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${business.color} opacity-10 rounded-full blur-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <span className="text-5xl mr-4">{business.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{business.name}</h3>
                      <p className="text-sm text-gray-400">{business.type}</p>
                    </div>
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${business.color} text-white`}>
                    {business.status}
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {business.description}
                  </p>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-2">Vision:</p>
                    <p className="text-gray-300 leading-relaxed">
                      {business.vision}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessBrands
