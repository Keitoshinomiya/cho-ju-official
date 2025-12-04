'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface RichFeatureProps {
  features: string[];
  painPoints: string[];
  image: string;
  description: string;
}

export default function RichFeatureSection({ features, painPoints, image, description }: RichFeatureProps) {
  return (
    <section className="bg-white">
      {/* Section 1: The Story (Image Left, Text Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={image}
              alt="Product Lifestyle"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4">The Concept</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              生活のノイズを取り除く、<br/>
              静かなる美学。
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-justify">
              {description}
            </p>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">
                解決する日常のストレス
              </h4>
              <ul className="space-y-4">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4">
                        <span className="text-red-500 text-xs font-bold">!</span>
                    </div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: The Features (Dark Background) */}
      <div className="bg-gray-900 text-white py-24 lg:py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">妥協なき機能性</h2>
            <p className="text-gray-400 text-lg">
              シンプルに見えるその内部には、<br className="hidden sm:block"/>
              快適さを支えるこだわりが詰まっています。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/50">
                  <Check className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  ユーザー体験を第一に考え、細部までチューニングされた設計。
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
