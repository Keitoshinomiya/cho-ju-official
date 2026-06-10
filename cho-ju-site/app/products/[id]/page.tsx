import { products, Product } from '@/lib/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import StickyCTA from '@/components/StickyCTA';
import ModelViewerWrapper from '@/components/ModelViewerWrapper';
import RichFeatureSection from '@/components/RichFeatureSection';
import ReviewSection from '@/components/ReviewSection'; // Added ReviewSection
import ProductVideos from '@/components/ProductVideos';
import ProductGallery from '@/components/ProductGallery';

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

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} | CHO-JU`,
    description: product.description,
    openGraph: {
      title: `${product.name} | CHO-JU`,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Product 構造化データ（検索結果のリッチリザルト用）
  const priceNumber = product.price.replace(/[^0-9]/g, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://cho-ju.com${product.image}`,
    brand: { '@type': 'Brand', name: 'CHO-JU' },
    ...(priceNumber && product.link
      ? {
          offers: {
            '@type': 'Offer',
            price: priceNumber,
            priceCurrency: 'JPY',
            url: product.link,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };

  return (
    <div className="min-h-screen bg-kinari flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">

        {/* 1. Hero — クリーンな分割レイアウト（和モダン） */}
        <section className="relative bg-kinari pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-hai/60">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/#products" className="inline-flex items-center text-sm text-sumi-soft hover:text-ai transition-colors mb-10">
                    <ArrowLeft size={16} className="mr-2" /> 製品一覧へ戻る
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* 左：コピー */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-6">
                            <span className="w-6 h-px bg-shu mr-3" />
                            {product.category}
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl font-medium text-sumi tracking-tight mb-6 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-lg md:text-xl text-sumi-soft font-light mb-10 leading-loose max-w-xl">
                            {product.tagline}
                        </p>

                        <div className="flex flex-wrap items-end gap-x-8 gap-y-5 mb-10">
                            <div>
                                <span className="block text-xs text-sumi-soft uppercase tracking-[0.2em] mb-1">Price</span>
                                <span className="font-serif text-3xl text-sumi">{product.price}</span>
                            </div>
                            <a
                                href={product.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center px-9 py-4 bg-ai text-kinari text-base font-medium hover:bg-ai-deep transition-colors"
                            >
                                Amazonで購入 <ShoppingBag size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {product.specs && (
                            <dl className="flex flex-wrap gap-x-10 gap-y-3 border-t border-hai pt-6">
                                {product.specs.slice(0, 3).map((spec, i) => (
                                    <div key={i}>
                                        <dt className="text-xs text-sumi-soft uppercase tracking-wider mb-0.5">{spec.label}</dt>
                                        <dd className="text-sm text-sumi font-medium">{spec.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>

                    {/* 右：商品画像 */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-square w-full bg-white border border-hai overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain p-6"
                            />
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* 2. Product Gallery */}
        {product.gallery && product.gallery.length > 0 && (
            <section className="py-24 lg:py-32 bg-kinari-deep">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
                            <span className="w-6 h-px bg-shu mr-3" />
                            Gallery
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-medium text-sumi">細部まで、見てください。</h2>
                    </div>
                    <ProductGallery images={product.gallery} name={product.name} />
                 </div>
            </section>
        )}

        {/* 3. Rich Feature Storytelling */}
        <RichFeatureSection
            features={product.features}
            painPoints={product.painPoints}
            image={product.gallery?.[1] ?? product.image}
            description={product.longDescription || product.description}
        />

        {/* 3. 3D Model Showcase (Dark Mode) */}
        {product.modelPath && (
            <section className="py-32 bg-ai-deep text-kinari overflow-hidden relative">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="text-center mb-16">
                        <span className="text-kinari/60 tracking-[0.3em] uppercase text-sm mb-3 block">Technology</span>
                        <h2 className="font-serif text-4xl md:text-6xl font-medium text-kinari mb-6">360° Experience</h2>
                        <p className="text-kinari/60 text-xl max-w-2xl mx-auto leading-relaxed">
                            指先ひとつで、その質感とフォルムを体感する。<br/>
                            シンプルを極めたデザインを、あらゆる角度から。
                        </p>
                     </div>

                     <div className="h-[500px] lg:h-[600px] w-full overflow-hidden border border-kinari/10 bg-sumi/30 backdrop-blur-sm">
                         <ModelViewerWrapper path={product.modelPath} height="100%" />
                     </div>
                 </div>
            </section>
        )}
        
        {/* 4. Before / After (課題 → 解決) */}
        <section className="py-32 bg-kinari">
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
                        <span className="w-6 h-px bg-shu mr-3" />
                        Before &amp; After
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-medium text-sumi">
                        その「ちょっとした不満」、<br className="sm:hidden" />手放しませんか。
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-hai border border-hai overflow-hidden">
                    {/* BEFORE */}
                    <div className="bg-kinari-deep p-10 lg:p-12">
                        <span className="inline-block px-4 py-1 border border-hai text-sumi-soft text-xs font-medium uppercase tracking-[0.2em] mb-8">
                            Before
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-sumi mb-8 leading-snug">
                            こんな毎日に、<br/>心当たりはありませんか。
                        </h3>
                        <ul className="space-y-5">
                            {product.painPoints.map((point, index) => (
                                <li key={index} className="flex items-start text-sumi-soft leading-relaxed">
                                    <span className="text-shu font-serif text-lg mr-4 leading-none mt-0.5 select-none">―</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AFTER */}
                    <div className="bg-ai-deep text-kinari p-10 lg:p-12">
                        <span className="inline-block px-4 py-1 border border-kinari/30 text-kinari/80 text-xs font-medium uppercase tracking-[0.2em] mb-8">
                            After
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-kinari mb-4 leading-snug">
                            {product.name} のある暮らし。
                        </h3>
                        <p className="text-kinari/70 leading-loose mb-8">
                            {product.tagline}
                        </p>
                        <ul className="space-y-5">
                            {product.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-start text-kinari/90 leading-relaxed">
                                    <Check size={18} className="text-shu mr-4 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
        </section>

        {/* 5. Usage Steps (Clean Layout) */}
        {product.usageSteps && (
            <section className="py-32 bg-kinari-deep border-t border-hai/60">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-3xl md:text-5xl font-medium text-sumi mb-6">使い方は、驚くほどシンプル。</h2>
                        <p className="text-xl text-sumi-soft">複雑な操作は一切ありません。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {product.usageSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -top-4 -left-4 font-serif text-9xl text-kinari drop-shadow-sm select-none z-0">
                                    {index + 1}
                                </div>
                                <div className="relative z-10 bg-kinari p-8 border border-hai hover:border-ai hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 bg-ai text-kinari flex items-center justify-center font-serif text-xl mb-6">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-serif text-2xl font-medium text-sumi mb-4">{step.title}</h3>
                                    <p className="text-sumi-soft leading-loose">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        )}

        {/* 6. Technical Specs (Modern Grid) */}
        {product.specs && (
            <section className="py-32 bg-kinari">
                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-medium text-sumi mb-12 text-center tracking-tight">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hai border border-hai overflow-hidden">
                        {product.specs.map((spec, index) => (
                            <div key={index} className="bg-kinari p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-kinari-deep transition-colors">
                                <span className="text-sm font-medium text-sumi-soft uppercase tracking-wider mb-2 md:mb-0">{spec.label}</span>
                                <span className="text-lg font-bold text-sumi text-right">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        )}

        {/* 7. Reviews (Integrated) */}
        <ReviewSection />

        {/* 8. 商品別のYouTube紹介動画（該当があれば表示） */}
        <ProductVideos productId={product.id} />

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
