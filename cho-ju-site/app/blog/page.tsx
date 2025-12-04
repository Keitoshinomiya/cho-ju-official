import { getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Journal - CHO-JU',
  description: '暮らしを整えるアイデアと、CHO-JUのある風景。',
};

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Journal
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              All Stories
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allPosts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between group cursor-pointer">
                <Link href={`/blog/${post.id}`} className="w-full relative overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[3/2]">
                  <Image
                    src={post.image || '/images/desktop-cleaner.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    {post.category && (
                      <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900 group-hover:text-gray-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-6 flex items-center gap-x-4">
                     <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        CHO-JU Editorial
                      </p>
                      <p className="text-gray-600">Life with Comfort</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
