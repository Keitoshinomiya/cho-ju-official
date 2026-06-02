'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { PostData } from '@/lib/posts';

interface BlogListProps {
  posts: PostData[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [active, setActive] = useState<string>('すべて');

  // 実際に記事が存在するカテゴリだけをタブに出す（記事数が増えても自動で並ぶ）
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.category && set.add(p.category));
    return ['すべて', ...Array.from(set)];
  }, [posts]);

  const filtered = useMemo(
    () => (active === 'すべて' ? posts : posts.filter((p) => p.category === active)),
    [posts, active]
  );

  return (
    <>
      {/* カテゴリ絞り込み */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                active === cat
                  ? 'bg-sumi text-kinari border-sumi'
                  : 'bg-kinari text-sumi-soft border-hai hover:border-sumi/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between group cursor-pointer">
            <Link
              href={`/blog/${post.id}`}
              className="w-full relative overflow-hidden aspect-[16/9] sm:aspect-[3/2]"
            >
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
                  <span className="relative z-10 border border-hai px-3 py-1.5 font-medium text-sumi-soft">
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
                  <p className="font-medium text-sumi">
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

      {filtered.length === 0 && (
        <p className="text-center text-sumi-soft py-16">このカテゴリの記事は準備中です。</p>
      )}
    </>
  );
}
