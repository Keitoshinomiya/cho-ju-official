'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // キーボード操作（Esc / ← / →）と背景スクロールのロック
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${name} の画像 ${i + 1} を拡大`}
            className="group relative aspect-square w-full bg-white border border-hai overflow-hidden cursor-zoom-in"
          >
            <Image
              src={src}
              alt={`${name} ギャラリー ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-sumi/0 group-hover:bg-sumi/5 transition-colors duration-300" />
            <span className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center bg-kinari/90 text-sumi border border-hai opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={16} />
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-sumi/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} 画像ビューア`}
        >
          {/* 閉じる */}
          <button
            type="button"
            onClick={close}
            aria-label="閉じる"
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-kinari/80 hover:text-kinari border border-kinari/20 hover:border-kinari/50 transition-colors"
          >
            <X size={22} />
          </button>

          {/* 前へ */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="前の画像"
              className="absolute left-3 sm:left-6 w-11 h-11 flex items-center justify-center text-kinari/80 hover:text-kinari border border-kinari/20 hover:border-kinari/50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* 画像本体 */}
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex!]}
              alt={`${name} 拡大画像 ${openIndex! + 1}`}
              fill
              sizes="90vw"
              className="object-contain p-4"
              priority
            />
          </div>

          {/* 次へ */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="次の画像"
              className="absolute right-3 sm:right-6 w-11 h-11 flex items-center justify-center text-kinari/80 hover:text-kinari border border-kinari/20 hover:border-kinari/50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* カウンター */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-kinari/70 text-sm tracking-[0.2em] tabular-nums">
            {openIndex! + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
