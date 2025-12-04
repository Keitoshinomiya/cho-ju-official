'use client';

import Image from 'next/image';
import { Product } from '@/lib/products';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-w-1 aspect-h-1 w-full h-80 bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Hover Overlay Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <a 
                href={product.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
                <ShoppingBag size={20} />
            </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-sm font-medium text-gray-500">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                {product.name}
                </h3>
            </div>
            <p className="text-lg font-semibold text-gray-900">{product.price}</p>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
            {product.description}
        </p>
        
        {product.features && (
            <div className="flex flex-wrap gap-2 mt-auto">
                {product.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {feature}
                    </span>
                ))}
            </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-100">
            <a 
                href={`/products/${product.id}`}
                className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
                詳細を見る <ArrowRight size={16} className="ml-1" />
            </a>
        </div>
      </div>
    </motion.div>
  );
}
