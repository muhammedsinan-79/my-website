import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TradingInvestment from './components/TradingInvestment'
import TraderDashboard from './components/TraderDashboard'
import TechStack from './components/TechStack'
import BusinessBrands from './components/BusinessBrands'
import Skills from './components/Skills'
import Education from './components/Education'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <TradingInvestment />
      <TraderDashboard />
      <TechStack />
      <BusinessBrands />
      <Skills />
      <Education />
      <Philosophy />
      <Contact />
    </div>
  )
}

export default App
