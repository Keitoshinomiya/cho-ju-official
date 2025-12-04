import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="ja" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans text-gray-900 antialiased bg-white">{children}</body>
    </html>
  );
}
