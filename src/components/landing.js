import React from 'react'
import Hero from './hero'
import Problem from './problem'
import Footer from './footer'
import Contact from './contact'
import LandingBreak from './landingBreak'



const Landing = () =>{
  return(
    <div>
      <Hero />
      <LandingBreak />
      <Problem />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
