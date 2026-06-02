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
    <section className="bg-kinari">
      {/* Section 1: The Story (Image Left, Text Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square lg:aspect-[4/5] overflow-hidden border border-hai bg-white"
          >
            <Image
              src={image}
              alt="Product"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              The Concept
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl font-medium text-sumi mb-8 leading-relaxed">
              生活のノイズを取り除く、<br/>
              静かなる美学。
            </h3>
            <p className="text-lg text-sumi-soft mb-10 leading-loose text-justify">
              {description}
            </p>

            <div className="space-y-6">
              <h4 className="font-serif text-sumi text-lg border-b border-hai pb-2">
                解決する日常のストレス
              </h4>
              <ul className="space-y-4">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 text-shu mt-1 mr-3 leading-none">―</span>
                    <span className="text-sumi-soft">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: The Features (Dark Background) */}
      <div className="bg-ai-deep text-kinari py-24 lg:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-3xl lg:text-5xl font-medium mb-6">妥協なき機能性</h2>
            <p className="text-kinari/60 text-lg leading-relaxed">
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
                className="bg-kinari/[0.04] backdrop-blur-sm p-8 border border-kinari/15 hover:border-kinari/40 transition-colors flex flex-col"
              >
                <Check className="text-shu mb-6" strokeWidth={1.5} size={28} />
                <h3 className="font-serif text-xl leading-relaxed">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
