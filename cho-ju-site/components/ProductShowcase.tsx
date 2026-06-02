'use client';

import Image from 'next/image';
import { products } from '@/lib/products';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <div id="products" className="bg-kinari py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
            <span className="w-6 h-px bg-shu mr-3" />
            Products
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sumi leading-snug mb-5">
            「なんとなく不便」を解消する。
          </h2>
          <p className="text-base text-sumi-soft leading-loose">
            毎日の暮らしの中に潜む小さなストレス。
            それらを取り除くことで、時間はもっと有効に使えます。
          </p>
        </div>

        <div className="space-y-28">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-white border border-hai">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs text-sumi-soft tracking-[0.2em] uppercase">{product.category}</span>
                  <span className="font-serif text-2xl text-sumi">{product.name}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-sumi leading-relaxed mb-5">
                  {product.tagline}
                </h3>

                <p className="text-base text-sumi-soft leading-loose mb-8">
                  {product.description}
                </p>

                <div className="border-t border-b border-hai py-6 mb-8">
                  <h4 className="text-xs font-medium text-sumi-soft uppercase tracking-[0.2em] mb-4">
                    こんな悩みを解決します
                  </h4>
                  <ul className="space-y-3">
                    {product.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 text-ai mt-1 mr-3 text-sm leading-none">―</span>
                        <span className="text-sumi-soft leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                  <p className="font-serif text-3xl text-sumi">{product.price}</p>
                  <a
                    href={`/products/${product.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-kinari bg-ai hover:bg-ai-deep transition-colors duration-300"
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
