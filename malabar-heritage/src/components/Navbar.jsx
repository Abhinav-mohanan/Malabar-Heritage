import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../constants/navlinks'
import logo from '../assets/logo.jpeg' 

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#C9A84C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        
        <a href="#home" className="flex items-center gap-2 select-none">
          <img 
            src={logo} 
            alt="Malabar Heritage Co. Logo" 
            className="h-12 w-auto object-contain" 
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white text-xs font-medium tracking-[0.12em] uppercase 
              hover:text-[#C9A84C] transition-colors duration-200 pb-0.5 border-b border-transparent hover:border-[#C9A84C]">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="hidden md:inline-flex items-center gap-2 border border-[#C9A84C] 
          text-[#C9A84C] text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2 hover:bg-[#C9A84C] hover:text-black transition-all duration-200">
          Order Now
        </a>

        <button
          className="md:hidden text-[#C9A84C]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-[#C9A84C20] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-sm tracking-widest uppercase hover:text-[#C9A84C]">
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setOpen(false)}
            className="border border-[#C9A84C] text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-5 py-2 
            text-center mt-2 hover:bg-[#C9A84C] hover:text-black transition-all duration-200">
            Order Now
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar