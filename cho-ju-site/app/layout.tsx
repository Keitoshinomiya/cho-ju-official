import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CHO-JU | Simple Lifestyle Goods',
  description: 'シンプルかつ機能的な生活雑貨（ハンディクリーナー、卓上クリーナー、センサーライト）をお届けするCHO-JUの公式サイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans text-sumi antialiased bg-kinari">{children}</body>
    </html>
  );
}
