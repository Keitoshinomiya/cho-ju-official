'use client';

import { products } from '@/lib/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export default function ProductList() {
  return (
    <div id="products" className="bg-kinari py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              Collection
            </div>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-sumi leading-snug">
                家族のライフシーンを彩る
            </p>
            <p className="mt-5 max-w-xl mx-auto text-base text-sumi-soft leading-loose">
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
