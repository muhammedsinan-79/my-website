import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TraderDashboard = () => {
  const [forexData, setForexData] = useState(null)
  const [cryptoData, setCryptoData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch Forex data (using free API - Alpha Vantage or similar)
    const fetchForexData = async () => {
      try {
        // Using a free API endpoint for demo purposes
        // In production, use a proper API key
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const data = await response.json()
        if (data.rates) {
          setForexData({
            EUR: data.rates.EUR || 0.85,
            GBP: data.rates.GBP || 0.73,
            JPY: data.rates.JPY || 110.0,
          })
        }
      } catch (error) {
        console.error('Error fetching forex data:', error)
        // Fallback data
        setForexData({
          EUR: 0.85,
          GBP: 0.73,
          JPY: 110.0,
        })
      }
    }

    // Fetch Crypto data
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        const data = await response.json()
        setCryptoData({
          BTC: data.bitcoin?.usd || 45000,
          ETH: data.ethereum?.usd || 3000,
        })
      } catch (error) {
        console.error('Error fetching crypto data:', error)
        // Fallback data
        setCryptoData({
          BTC: 45000,
          ETH: 3000,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchForexData()
    fetchCryptoData()

    // Update every 30 seconds
    const interval = setInterval(() => {
      fetchForexData()
      fetchCryptoData()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { label: 'Win Rate', value: '--', suffix: '%', color: 'text-neon-blue' },
    { label: 'Risk/Reward', value: '--', suffix: '', color: 'text-neon-purple' },
    { label: 'Max Drawdown', value: '--', suffix: '%', color: 'text-gray-400' },
    { label: 'Sharpe Ratio', value: '--', suffix: '', color: 'text-gray-400' },
  ]

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Trading Dashboard</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"></div>

          <div className="glass rounded-2xl p-6 md:p-8">
            {/* Account Overview */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Account Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="glass rounded-lg p-4 text-center border border-gray-700 hover:border-neon-blue/50 transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                    <p className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                      {metric.suffix}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Live Market Prices */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Forex Prices */}
              <div className="glass rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-neon-blue">Forex Pairs</h4>
                {loading ? (
                  <div className="text-gray-400">Loading...</div>
                ) : forexData ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">EUR/USD</span>
                      <span className="text-white font-semibold">{forexData.EUR.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">GBP/USD</span>
                      <span className="text-white font-semibold">{forexData.GBP.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">USD/JPY</span>
                      <span className="text-white font-semibold">{forexData.JPY.toFixed(2)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400">Data unavailable</div>
                )}
              </div>

              {/* Crypto Prices */}
              <div className="glass rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-neon-purple">Cryptocurrency</h4>
                {loading ? (
                  <div className="text-gray-400">Loading...</div>
                ) : cryptoData ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">BTC/USD</span>
                      <span className="text-white font-semibold">${cryptoData.BTC.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">ETH/USD</span>
                      <span className="text-white font-semibold">${cryptoData.ETH.toLocaleString()}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400">Data unavailable</div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>UI Demo Only - No actual trading data displayed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TraderDashboard
