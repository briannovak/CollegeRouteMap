import React from 'react';
import Contact from './contact'
import Footer from './footer'
import WorkShopHero from './workshopHero'
import WorkShopContent from './workshopContent'

const Workshops = () => {
  return(
    <div>
      <WorkShopHero />
      <WorkShopContent />
      <Contact />
      <Footer />
    </div>
  )
}

export default Workshops
