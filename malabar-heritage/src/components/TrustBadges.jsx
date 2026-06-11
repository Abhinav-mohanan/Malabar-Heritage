import React from 'react'
import { trustBadges } from '../constants/trustBadges';
import { Flame, Leaf, MapPin, Package, ShieldCheck } from 'lucide-react';

const iconMap = {
  leaf: Leaf,
  mortar: Flame,   
  badge: ShieldCheck,
  box: Package,
  pin: MapPin,
};

const TrustBadges = () => {
  return (
    <section id="why" className="bg-[#f5f5f5] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {trustBadges.map((b) => {
            const Icon = iconMap[b.icon];
            return (
              <div key={b.label} className="flex flex-col items-center text-center gap-3 min-w-[100px]">
                <div className="w-14 h-14 rounded-full border-2 border-[#C9A84C40] flex items-center justify-center bg-white shadow-sm">
                  <Icon size={24} className="text-[#8B4513]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{b.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{b.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges