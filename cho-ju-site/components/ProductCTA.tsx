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
    <div className="my-12 bg-white border-2 border-indigo-50 rounded-2xl overflow-hidden shadow-lg">
      <div className="bg-indigo-50 px-6 py-3">
        <h3 className="text-indigo-900 font-bold text-sm uppercase tracking-wider flex items-center">
           <ShoppingBag size={16} className="mr-2" />
           Featured Item
        </h3>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-full sm:w-1/3 relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-2/3">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {product.description}
            </p>
            <div className="mb-6">
                {product.features.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500 mb-1">
                        <Check size={14} className="text-green-500 mr-2" />
                        {f}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                <a 
                    href={product.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
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
