import { products, Product } from '@/lib/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Star, ChevronDown } from 'lucide-react';
import BeforeAfter from '@/components/BeforeAfter';
import StickyCTA from '@/components/StickyCTA';
import ModelViewerWrapper from '@/components/ModelViewerWrapper';
import RichFeatureSection from '@/components/RichFeatureSection';
import ReviewSection from '@/components/ReviewSection'; // Added ReviewSection

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        
        {/* 1. Cinematic Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-50">
             <div className="absolute inset-0 z-0">
                {/* Background Image with subtle parallax effect (simulated with fixed bg) */}
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover opacity-90 scale-105 animate-subtle-zoom"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             </div>
             
             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm uppercase tracking-widest">
                        {product.category}
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-none drop-shadow-lg">
                        {product.name}
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 font-light mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                        {product.tagline}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <a
                            href={product.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center">
                                Amazonで購入 <ShoppingBag size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                        <div className="flex items-center text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                             <div className="flex text-yellow-400 mr-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                             </div>
                             <span className="text-sm font-medium border-l border-white/30 pl-3">Based on 1,200+ Reviews</span>
                        </div>
                    </div>
                </div>
             </div>

             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
                <ChevronDown size={32} />
             </div>
        </section>

        {/* 2. Rich Feature Storytelling */}
        <RichFeatureSection 
            features={product.features} 
            painPoints={product.painPoints} 
            image={product.image}
            description={product.longDescription || product.description}
        />

        {/* 3. 3D Model Showcase (Dark Mode) */}
        {product.modelPath && (
            <section className="py-32 bg-black text-white overflow-hidden relative">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50"></div>
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="text-center mb-16">
                        <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-2 block">Technology</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">360° Experience</h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            指先ひとつで、その質感とフォルムを体感する。<br/>
                            シンプルを極めたデザインを、あらゆる角度から。
                        </p>
                     </div>
                     
                     <div className="h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
                         <ModelViewerWrapper path={product.modelPath} height="100%" />
                     </div>
                 </div>
            </section>
        )}
        
        {/* 4. Before / After Interactive */}
        <section className="py-32 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                         <h2 className="text-4xl font-bold text-gray-900 mb-6">劇的な変化を、その手で。</h2>
                         <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            「片付かない」というストレスは、実はほんの数秒で解消できます。<br/>
                            スライダーを動かして、SUI-COMがある生活とない生活の違いを体験してください。
                         </p>
                         <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">ここがポイント</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• 散らかった消しカスも一往復でスッキリ</li>
                                <li>• 手を汚さずにゴミ捨てまで完了</li>
                                <li>• 机に置いたままでも絵になるデザイン</li>
                            </ul>
                         </div>
                    </div>
                    <div className="order-1 lg:order-2 h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <BeforeAfter imageSrc={product.image} alt={product.name} />
                    </div>
                 </div>
             </div>
        </section>

        {/* 5. Usage Steps (Clean Layout) */}
        {product.usageSteps && (
            <section className="py-32 bg-gray-50 border-t border-gray-200">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">使い方は、驚くほどシンプル。</h2>
                        <p className="text-xl text-gray-500">複雑な操作は一切ありません。</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-12">
                        {product.usageSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -top-4 -left-4 text-9xl font-bold text-white drop-shadow-sm select-none z-0">
                                    {index + 1}
                                </div>
                                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-200">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        )}

        {/* 6. Technical Specs (Modern Grid) */}
        {product.specs && (
            <section className="py-32 bg-white">
                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
                        {product.specs.map((spec, index) => (
                            <div key={index} className="bg-white p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 md:mb-0">{spec.label}</span>
                                <span className="text-lg font-bold text-gray-900 text-right">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        )}

        {/* 7. Reviews (Integrated) */}
        <ReviewSection />

      </main>
      
      <StickyCTA 
        link={product.link || '#'} 
        price={product.price} 
        productName={product.name} 
      />
      
      <Footer />
    </div>
  );
}
