import Image from 'next/image';
import { products } from '@/lib/products';
import { ShoppingBag, Check } from 'lucide-react';

interface ProductCTAProps {
  productId: string;
}

export default function ProductCTA({ productId }: ProductCTAProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) return null;

  return (
    <div className="my-12 bg-kinari border border-hai overflow-hidden shadow-lg">
      <div className="bg-ai px-6 py-3">
        <h3 className="text-kinari font-medium text-sm uppercase tracking-[0.15em] flex items-center">
           <ShoppingBag size={16} className="mr-2" />
           Featured Item
        </h3>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-full sm:w-1/3 relative aspect-square overflow-hidden bg-white border border-hai">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-contain p-3"
            />
          </div>
          <div className="w-full sm:w-2/3">
            <h4 className="font-serif text-2xl text-sumi mb-2">{product.name}</h4>
            <p className="text-sumi-soft mb-4 text-sm leading-relaxed">
              {product.description}
            </p>
            <div className="mb-6">
                {product.features.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-sumi-soft mb-1">
                        <Check size={14} className="text-ai mr-2" />
                        {f}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <p className="font-serif text-2xl text-sumi">{product.price}</p>
                <a
                    href={product.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-kinari bg-ai hover:bg-ai-deep transition-colors"
                >
                    Amazonで見る
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
