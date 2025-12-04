import { getPostData, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import TableOfContents from '@/components/TableOfContents';
import ProductCTA from '@/components/ProductCTA';

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

export default async function Post({ params }: PageProps) {
  const { id } = await params;
  const postData = await getPostData(id);
  
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
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb / Back */}
            <div className="mb-8">
                 <Link href="/#blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                    記事一覧に戻る
                 </Link>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                
                {/* Main Content Area */}
                <article className="lg:col-span-8">
                    
                    {/* Article Header */}
                    <header className="mb-10">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium flex items-center">
                                <Tag size={14} className="mr-1.5" />
                                {postData.category}
                            </span>
                            <span className="flex items-center">
                                <Calendar size={14} className="mr-1.5" />
                                <time dateTime={postData.date}>{postData.date}</time>
                            </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                            {postData.title}
                        </h1>
                        
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
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
                        className="prose prose-lg prose-indigo max-w-none text-gray-600 
                        prose-headings:font-bold prose-headings:text-gray-900 
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:leading-8 prose-img:rounded-xl prose-strong:text-indigo-900 prose-strong:bg-indigo-50 prose-strong:px-1"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                    />
                    
                    {/* CTA at the end of article */}
                    {postData.relatedProduct && (
                        <div className="mt-16">
                             <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
                                この記事で紹介したアイテム
                             </h3>
                             <ProductCTA productId={postData.relatedProduct} />
                        </div>
                    )}
                    
                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <p className="font-bold text-gray-900">Share this article</p>
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
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
                        
                        {/* Sidebar CTA */}
                        {postData.relatedProduct && (
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                    Pickup Item
                                </p>
                                <ProductCTA productId={postData.relatedProduct} />
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
