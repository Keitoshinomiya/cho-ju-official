'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface StickyCTAProps {
  link: string;
  price: string;
  productName: string;
}

export default function StickyCTA({ link, price, productName }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-500">CHO-JU Collection</p>
              <p className="text-lg font-bold text-gray-900">{productName}</p>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <p className="text-xl font-bold text-gray-900 sm:mr-4">{price}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Amazonで購入 <ShoppingBag size={18} className="ml-2" />
                </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
