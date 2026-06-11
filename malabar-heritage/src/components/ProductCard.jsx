import React from 'react'

const ProductCard = ({product}) => {
    const { name, sizes, image } = product

  return (
    <article className="group bg-[#FAF6EE] border border-gray-100 hover:border-[#C9A84C] 
      transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center p-6">
      <div className="w-full flex justify-center items-end min-h-[220px] max-h-[240px] mb-4 
        overflow-hidden mix-blend-multiply">
        <img 
          src={image} 
          alt={name} 
          className="max-h-[220px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"/>
      </div>

      <div className="w-full flex flex-col items-center gap-3 mt-2 flex-1">
        <h3 className="font-serif font-bold text-sm sm:text-base text-gray-800 tracking-wide uppercase">
          {name}
        </h3>
        <div className="w-8 h-[2px] bg-[#C0392B]" />
        
        <p className="text-gray-500 text-xs tracking-wider">{sizes.join(" | ")}</p>

        <div className="w-full mt-auto pt-4">
          <button
            className="w-full bg-[#2E3123] text-white text-[11px] font-semibold tracking-[0.15em] uppercase py-3 px-4 
             hover:bg-[#C9A84C] hover:text-black transition-colors duration-200"
            onClick={() => {}}>
            View Product
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard