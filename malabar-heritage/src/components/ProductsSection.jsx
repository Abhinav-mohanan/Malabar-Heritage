import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../constants/products";
import { Eye } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-gray-900 text-center tracking-wide">
            Our Premium Spices
          </h2>   
          <div className="flex items-center gap-2 mt-4">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <Eye className="w-12 h-5 text-[#C9A84C]"/>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}