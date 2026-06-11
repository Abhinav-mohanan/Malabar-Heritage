import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'


function App() {

  return (

    <div className='min-h-screen'>
      <Navbar/>
      <Hero/>
      <TrustBadges/>
    </div>
    

  )
}

export default App
