import Link from 'next/link';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-ai-deep text-kinari">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <span className="text-2xl font-bold tracking-[0.2em]">CHO-JU</span>
            <p className="mt-5 text-sm text-kinari/60 leading-loose max-w-xs">
              家族の「あたりまえの幸せ」を守るための、
              シンプルで機能的な道具を。
              健やかな毎日が、一日でも長く続きますように。
            </p>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-kinari/50 mb-5">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm text-kinari/80 hover:text-kinari transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-kinari/50 mb-5">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-kinari/80 hover:text-kinari transition-colors">ブランドについて</a></li>
              <li><Link href="/blog" className="text-sm text-kinari/80 hover:text-kinari transition-colors">Journal</Link></li>
              <li><a href="#products" className="text-sm text-kinari/80 hover:text-kinari transition-colors">製品一覧</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-kinari/50 mb-5">Shop</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-kinari/80 hover:text-kinari transition-colors"
                  >
                    {product.name}（Amazon）
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-kinari/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-kinari/50 hover:text-kinari/80 transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="text-xs text-kinari/50 hover:text-kinari/80 transition-colors">利用規約</Link>
            <Link href="/contact" className="text-xs text-kinari/50 hover:text-kinari/80 transition-colors">お問い合わせ</Link>
          </nav>
          <p className="text-xs text-kinari/50">
            &copy; {new Date().getFullYear()} CHO-JU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
