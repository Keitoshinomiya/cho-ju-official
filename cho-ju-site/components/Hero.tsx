'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-indigo-50 to-blue-50 opacity-60 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-amber-50 to-orange-50 opacity-60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Simple Life with CHO-JU
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              大切なのは、<br />
              <span className="text-indigo-600">家族と笑う時間</span>を<br />
              増やすこと。
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed">
              「片付けなさい」と怒る時間を減らしたい。<br />
              暗い廊下を歩く不安を取り除きたい。<br />
              CHO-JUは、そんな家族の「あたりまえの幸せ」を守るための<br className="hidden lg:block"/>
              シンプルで機能的な道具を作っています。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                製品を見る
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all hover:border-gray-300"
              >
                ブランドについて
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 lg:col-span-6 relative"
          >
             {/* Hero Image Composition */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image 
                    src="/images/desktop-cleaner.jpg" 
                    alt="Child using SUI-COM"
                    width={800}
                    height={600}
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                    <p className="text-white font-medium text-lg">SUI-COM</p>
                    <p className="text-white/80 text-sm">自ら片付ける習慣を。</p>
                </div>
             </div>
             
             {/* Floating Card */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
             >
                <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                        <ArrowRight className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">時短効率 UP</p>
                        <p className="text-sm text-gray-500 mt-1">毎日の「名もなき家事」を<br/>瞬時に解決します。</p>
                    </div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
