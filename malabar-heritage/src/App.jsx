import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'
import HeritageBanner from './components/HeritageBanner'


function App() {

  return (

    <div className='min-h-screen'>
      <Navbar/>
      <Hero/>
      <TrustBadges/>
      <HeritageBanner/>
      <Footer/>
    </div>
    

  )
}

export default App
