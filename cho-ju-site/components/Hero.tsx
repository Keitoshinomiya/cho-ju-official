'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-kinari min-h-[92vh] flex items-center overflow-hidden">
      {/* 余白を活かした静かな背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-full bg-hai/50 hidden lg:block lg:left-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-24 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-8">
              <span className="w-6 h-px bg-shu mr-3" />
              Simple Life with CHO-JU
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-sumi leading-[1.4] mb-8">
              大切なのは、<br />
              <span className="text-ai">家族と笑う時間</span>を<br />
              増やすこと。
            </h1>

            <p className="text-base sm:text-lg text-sumi-soft mb-10 leading-loose">
              「片付けなさい」と怒る時間を減らしたい。<br />
              暗い廊下を歩く不安を取り除きたい。<br />
              CHO-JUは、家族の「あたりまえの幸せ」を守るための<br className="hidden lg:block" />
              シンプルで機能的な道具を作っています。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-9 py-4 text-base font-medium text-kinari bg-ai hover:bg-ai-deep transition-colors duration-300"
              >
                製品を見る
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-9 py-4 text-base font-medium text-sumi border border-hai hover:border-sumi transition-colors duration-300"
              >
                ブランドについて
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 lg:mt-0 lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/images/desktop-cleaner.jpg"
                alt="SUI-COMを使う子ども"
                width={800}
                height={640}
                className="object-cover w-full"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sumi/55 to-transparent p-8">
                <p className="font-serif text-kinari text-xl tracking-wide">SUI-COM</p>
                <p className="text-kinari/75 text-sm mt-1 tracking-wide">自ら片付ける習慣を。</p>
              </div>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-8 -left-6 lg:-left-10 bg-kinari border border-hai px-7 py-5 max-w-xs hidden md:block"
            >
              <p className="font-serif text-sumi text-lg">時短という、やさしさ。</p>
              <p className="text-sm text-sumi-soft mt-1.5 leading-relaxed">
                毎日の「名もなき家事」を<br />瞬時に解決します。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
