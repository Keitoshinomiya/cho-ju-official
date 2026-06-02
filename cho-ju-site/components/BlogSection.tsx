import Link from 'next/link';
import Image from 'next/image';
import { PostData } from '@/lib/posts';
import { ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  posts: PostData[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <div id="blog" className="bg-kinari-deep py-28 sm:py-32 border-t border-hai/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-sumi">
            Journal
          </h2>
          <p className="mt-4 text-base leading-8 text-sumi-soft">
            暮らしを整えるアイデアと、CHO-JUのある風景。
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between group cursor-pointer">
              <Link href={`/blog/${post.id}`} className="w-full relative overflow-hidden aspect-[16/9] sm:aspect-[3/2]">
                <Image
                  src={post.image || '/images/desktop-cleaner.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-sumi/10" />
              </Link>
              <div className="max-w-xl">
                <div className="mt-7 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-sumi-soft">
                    {post.date}
                  </time>
                  {post.category && (
                    <span className="relative z-10 border border-hai px-3 py-1 font-medium text-sumi-soft">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-sumi group-hover:text-ai transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-sumi-soft">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                   <div className="text-sm leading-6">
                    <p className="font-semibold text-sumi">
                      <span className="absolute inset-0" />
                      CHO-JU Editorial
                    </p>
                    <p className="text-sumi-soft">Life with Comfort</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Link href="/blog" className="text-sm font-medium tracking-wide leading-6 text-sumi hover:text-ai flex items-center justify-center gap-2 group transition-colors">
             View all posts <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </div>
  );
}
