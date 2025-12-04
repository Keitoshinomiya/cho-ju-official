'use client';

import { products } from '@/lib/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export default function ProductList() {
  return (
    <div id="products" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">Collection</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                家族のライフシーンを彩る
            </p>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
                それぞれの生活シーンに合わせた、シンプルで使いやすい製品をご紹介します。
            </p>
          </motion.div>
        </div>
        <div className="grid gap-y-10 gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
