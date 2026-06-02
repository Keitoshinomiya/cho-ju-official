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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-kinari/85 backdrop-blur-lg border-t border-hai shadow-[0_-4px_20px_rgba(28,26,23,0.08)]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="hidden sm:block">
              <p className="text-xs font-medium text-sumi-soft tracking-[0.15em] uppercase">CHO-JU Collection</p>
              <p className="font-serif text-lg text-sumi">{productName}</p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <p className="font-serif text-xl text-sumi sm:mr-4">{price}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-3 text-base font-medium text-kinari bg-ai hover:bg-ai-deep transition-colors duration-300"
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
