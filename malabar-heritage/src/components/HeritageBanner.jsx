import React from 'react'
import bannerBg from '../assets/heritage-banner-bg.png'

export default function HeritageBanner() {
  return (
    <section id="about" className="relative overflow-hidden min-h-[480px] flex items-center bg-black">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />

      {/* <div className="absolute inset-0 bg-black/30 pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full py-20">
        <div className="max-w-xl">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
            The Malabar Heritage
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Rooted in Tradition.<br />
            Committed to Quality.
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed max-w-sm mb-8">
            We source the finest spices from the lush high ranges of Kerala and carefully process
            them to preserve their natural oils, aroma and nutrition.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold text-xs 
            tracking-[0.15em] uppercase px-7 py-3 hover:bg-white hover:text-black transition-all duration-200">
            Know More About Us
          </a>
        </div>
      </div>
    </section>
  );
}