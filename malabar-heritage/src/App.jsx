import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'


function App() {

  return (

    <div className='min-h-screen'>
      <Navbar/>
      <Hero/>
      <TrustBadges/>
      <Footer/>
    </div>
    

  )
}

export default App
