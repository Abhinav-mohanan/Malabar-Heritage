import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'
import HeritageBanner from './components/HeritageBanner'
import ProductsSection from './components/ProductsSection'


function App() {

  return (

    <div className='min-h-screen'>
      <Navbar/>
      <Hero/>
      <TrustBadges/>
      <ProductsSection/>
      <HeritageBanner/>
      <Footer/>
    </div>
    

  )
}

export default App
