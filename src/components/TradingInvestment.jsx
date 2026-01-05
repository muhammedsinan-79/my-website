import React from 'react'
import { motion } from 'framer-motion'

const TradingInvestment = () => {
  const tradingItems = [
    {
      title: 'Forex Trading',
      icon: '💱',
      description: 'Price action, technical analysis, and disciplined risk management',
      features: [
        'Price Action Analysis',
        'Technical Analysis',
        'Risk Management',
        'Market Psychology'
      ]
    },
    {
      title: 'Stock Market Investing',
      icon: '📈',
      description: 'Long-term investing with fundamentals and chart analysis',
      features: [
        'Long-term Investing',
        'Fundamentals Analysis',
        'Chart Analysis',
        'Portfolio Management'
      ]
    }
  ]

  return (
    <section id="trading" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Trading & Investment</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {tradingItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-8 hover:border-neon-blue/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-neon-blue group-hover:text-neon-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-neon-blue mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TradingInvestment
