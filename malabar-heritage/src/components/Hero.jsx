import { ShoppingCart } from 'lucide-react'
import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" 
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-32 pb-20">
        <div className="max-w-xl">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Freshly Ground
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-4">
            Kerala<br />
            <span className="text-[#C9A84C]">Spices</span>
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-light mb-6 leading-snug">
            From the High Ranges<br />of Kerala
          </h2>
          <p className="text-[#B8A888] text-sm leading-relaxed max-w-sm mb-10">
            Experience the rich aroma, authentic taste and exceptional quality of Malabar spices,
            made for every Indian kitchen.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-black font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 hover:bg-[#E8C97A] transition-colors duration-200"
          >
            <ShoppingCart size={16} />
            Explore Products
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default Hero