import React from 'react'
import Navbar from './Navbar'
import Hero from './hero'
import { Features } from './Features'
import { HowItWorks } from './How-it-works'
import Benefits from './Benifts'
import Footer from './footer'

const landingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Benefits/>
        <Footer/>
    </div>
  )
}

export default landingPage