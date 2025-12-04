'use client';

import Image from 'next/image';
import { products } from '@/lib/products';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShoppingBag } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <div id="products" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Products</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            「なんとなく不便」を解消する。
          </p>
          <p className="mt-4 text-xl text-gray-500">
            毎日の暮らしの中に潜む小さなストレス。
            それらを取り除くことで、時間はもっと有効に使えます。
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                     <p className="text-sm font-medium opacity-90 mb-1">{product.category}</p>
                     <p className="text-2xl font-bold">{product.name}</p>
                  </div>
                </div>
                
                {/* Decorative blobs */}
                <div className={`absolute -z-10 w-64 h-64 rounded-full filter blur-3xl opacity-20 
                  ${index % 3 === 0 ? 'bg-blue-400 -top-10 -left-10' : 
                    index % 3 === 1 ? 'bg-amber-300 -bottom-10 -right-10' : 
                    'bg-purple-400 -top-10 -right-10'}`} 
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {product.tagline}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    こんな悩みを解決します
                  </h4>
                  <ul className="space-y-3">
                    {product.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="ml-3 text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <p className="text-3xl font-bold text-gray-900 mr-4">{product.price}</p>
                  <a 
                    href={`/products/${product.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    詳細を見る <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
