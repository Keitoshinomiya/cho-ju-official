'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // 記事本文内のH2, H3タグを取得
    const elements = Array.from(document.querySelectorAll('.prose h2, .prose h3'));
    const items: TocItem[] = elements.map((elem, index) => {
        // IDがなければ付与
        if (!elem.id) {
            elem.id = `heading-${index}`;
        }
        return {
            id: elem.id,
            text: elem.textContent || '',
            level: Number(elem.tagName.charAt(1)),
        };
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block pl-6 border-l border-hai">
      <h4 className="text-xs font-medium text-sumi-soft uppercase tracking-[0.2em] mb-5">
        目次
      </h4>
      <ul className="space-y-3 text-sm leading-relaxed">
        {headings.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block transition-colors duration-200 ${
                activeId === item.id
                  ? 'text-ai font-medium'
                  : 'text-sumi-soft hover:text-sumi'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
