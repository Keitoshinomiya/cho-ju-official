import type { Metadata } from 'next';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, ShoppingBag } from 'lucide-react';
import TableOfContents from '@/components/TableOfContents';
import ProductCTA from '@/components/ProductCTA';
import { products } from '@/lib/products';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// SEO: 記事ごとに <title> / description / keywords / OGP を出力する
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const postData = await getPostData(id);
  const title = `${postData.title}｜CHO-JU`;
  const description = postData.description;
  const images = postData.image ? [postData.image] : [];

  return {
    title,
    description,
    keywords: postData.tags && postData.tags.length ? postData.tags : undefined,
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/blog/${id}`,
      images,
      publishedTime: postData.date || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

export default async function Post({ params }: PageProps) {
  const { id } = await params;
  const postData = await getPostData(id);
  const pickupProduct = postData.relatedProduct
    ? products.find((p) => p.id === postData.relatedProduct)
    : null;

  // SEO Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postData.title,
    image: postData.image ? [`https://cho-ju.com${postData.image}`] : [], // Example domain
    datePublished: postData.date,
    description: postData.description,
    author: {
      '@type': 'Organization',
      name: 'CHO-JU Editorial',
    },
  };

  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb / Back */}
            <div className="mb-8">
                 <Link href="/#blog" className="inline-flex items-center text-sm font-medium text-sumi-soft hover:text-ai transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    記事一覧に戻る
                 </Link>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                
                {/* Main Content Area */}
                <article className="lg:col-span-8">
                    
                    {/* Article Header */}
                    <header className="mb-10">
                        <div className="flex items-center space-x-4 text-sm text-sumi-soft mb-5">
                            <span className="border border-hai text-sumi-soft px-3 py-1 font-medium flex items-center">
                                <Tag size={14} className="mr-1.5" />
                                {postData.category}
                            </span>
                            <span className="flex items-center">
                                <Calendar size={14} className="mr-1.5" />
                                <time dateTime={postData.date}>{postData.date}</time>
                            </span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-sumi tracking-tight leading-[1.4] mb-7">
                            {postData.title}
                        </h1>

                        <div className="relative w-full aspect-[16/9] overflow-hidden border border-hai">
                            <Image
                                src={postData.image || '/images/desktop-cleaner.jpg'}
                                alt={postData.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </header>

                    {/* Article Body */}
                    <div
                        className="prose prose-lg max-w-none text-sumi-soft
                        prose-headings:font-serif prose-headings:font-medium prose-headings:text-sumi
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pl-4 prose-h2:border-l-2 prose-h2:border-shu
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:leading-8 prose-a:text-ai prose-img:border prose-img:border-hai prose-strong:text-sumi"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                    />
                    
                    {/* CTA at the end of article */}
                    {postData.relatedProduct && (
                        <div className="mt-16">
                             <h3 className="text-center font-serif text-xl font-medium text-sumi mb-6">
                                この記事で紹介したアイテム
                             </h3>
                             <ProductCTA productId={postData.relatedProduct} />
                        </div>
                    )}

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-hai flex items-center justify-between">
                        <p className="font-medium text-sumi">Share this article</p>
                        <div className="flex space-x-4">
                            <button className="p-2 border border-hai hover:border-sumi text-sumi-soft transition-colors">
                                <Share2 size={20} />
                            </button>
                            {/* Add real share buttons here */}
                        </div>
                    </div>

                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-4 pl-8">
                    <div className="sticky top-32 space-y-12">

                        {/* TOC */}
                        <TableOfContents />

                        {/* Sidebar CTA (compact card sized for the narrow column) */}
                        {pickupProduct && (
                            <div className="border border-hai bg-kinari">
                                <div className="relative aspect-[4/3] bg-white border-b border-hai overflow-hidden">
                                    <Image
                                        src={pickupProduct.image}
                                        alt={pickupProduct.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 320px"
                                        className="object-contain p-3"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-[0.65rem] font-medium text-sumi-soft uppercase tracking-[0.2em] mb-3">
                                        Pickup Item
                                    </p>
                                    <h3 className="font-serif text-lg font-medium text-sumi mb-1">
                                        {pickupProduct.name}
                                    </h3>
                                    <p className="text-sm text-sumi-soft leading-relaxed line-clamp-2 mb-4">
                                        {pickupProduct.tagline}
                                    </p>
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="font-serif text-lg text-sumi whitespace-nowrap">
                                            {pickupProduct.price}
                                        </span>
                                        <a
                                            href={pickupProduct.link || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-kinari bg-ai hover:bg-ai-deep transition-colors whitespace-nowrap"
                                        >
                                            <ShoppingBag size={15} className="mr-1.5" />
                                            見る
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </aside>

            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
