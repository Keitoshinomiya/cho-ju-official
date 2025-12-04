'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  imageSrc: string;
  alt: string;
}

export default function BeforeAfter({ imageSrc, alt }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      <div className="text-center mb-6">
         <h3 className="text-lg font-bold text-gray-900">驚きの変化を体験してください</h3>
         <p className="text-sm text-gray-500">スライダーを左右に動かして比較</p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-xl"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Base) - Clean and Bright */}
        <div className="absolute inset-0 w-full h-full">
           <div className="absolute top-4 right-4 bg-white/80 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-bold z-10">
             AFTER (SUI-COM使用後)
           </div>
           <Image
            src={imageSrc}
            alt={`${alt} After`}
            fill
            className="object-cover"
          />
        </div>

        {/* Before Image (Overlay) - Clipped */}
        <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
        >
           <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold z-10">
             BEFORE
           </div>
           <div className="relative w-full h-full">
             {/* Simulated "Dirty" effect using filters on the same image since we don't have pairs */}
             <Image
                src={imageSrc}
                alt={`${alt} Before`}
                fill
                className="object-cover filter sepia brightness-50 blur-[2px]" 
             />
             {/* Add some noise/grain overlay if possible, or text elements */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-4xl opacity-40 rotate-12 border-4 border-white p-4">
                    STRESS...
                </span>
             </div>
           </div>
        </div>

        {/* Slider Handle */}
        <div 
            className="absolute inset-y-0 w-1 bg-white shadow-lg z-20 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center -ml-0.5 text-indigo-600">
                <ChevronsLeftRight size={20} />
            </div>
        </div>
      </div>
    </div>
  );
}
