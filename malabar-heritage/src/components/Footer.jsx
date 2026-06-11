import React from 'react'
import { footerQuickLinks, footerProducts } from '../constants/footer_links'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from '../assets/logo.jpeg' 

const socialLinks = [
  { icon: FaInstagram, 
    url: "#",
  },
  {
    icon: FaWhatsapp,
    url: "#",
  },
  {
    icon: FaFacebookF,
    url: "#",
  },
];

const Footer = () => {
  return (
     <footer className="bg-[#F5F5F5] text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <div className="flex flex-col items-start mb-4">
              <a href="#home" className="flex items-center gap-2 select-none">
                <img 
                  src={logo} 
                  alt="Malabar Heritage Co. Logo" 
                  className="h-9 w-auto object-contain" 
                />
              </a>
            </div>
            <p className="text-xs leading-relaxed mb-1 font-medium text-gray-800">Freshly Ground Kerala Spices</p>
            <p className="text-xs leading-relaxed mb-6 text-gray-500">From the High Ranges of Kerala</p>
            
            <div className="flex gap-4">
              {socialLinks.map(({icon: Icon, url}, index) =>(
                <a
                key={index}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-black transition-colors'>
                    <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-black text-xs font-bold tracking-[0.2em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} 
                  className="text-xs text-gray-600 hover:text-[#C9A84C] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black text-xs font-bold tracking-[0.2em] uppercase mb-5">Our Products</h4>
            <ul className="space-y-2.5">
              {footerProducts.map((prod) => (
                <li key={prod}>
                  <a href="#products" className="text-xs text-gray-600 hover:text-[#C9A84C] transition-colors">{prod}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black text-xs font-bold tracking-[0.2em] uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4 text-xs text-gray-600">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-black shrink-0" strokeWidth={2} />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-black shrink-0" strokeWidth={2} />
                <span className="break-all">malabarheritageco@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-black shrink-0" strokeWidth={2} />
                <span>Kozhikode, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-[#EEEEEE] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-gray-500 font-medium">
          <p>© 2026 Malabar Heritage Co. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-red-500">♥</span> In Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer