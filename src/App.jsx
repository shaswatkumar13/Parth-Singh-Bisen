import React from 'react'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
      <div className='relative min-h-screen w-screen overflow-x-hidden'>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
