import React from 'react'
import Hero from './sections/hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
  <>
   <NavBar/>
   <Hero/>
   <ShowcaseSection/>
   <FeatureCards/>
   <ExperienceSection/>
   <TechStack />
   <Contact />
   <Footer />
  </>
  )
}

export default App