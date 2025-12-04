import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import BlogSection from '@/components/BlogSection';
import ReviewSection from '@/components/ReviewSection';
import FAQSection from '@/components/FAQSection';
import AssuranceSection from '@/components/AssuranceSection';
import Footer from '@/components/Footer';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* 安心感を醸成する保証セクションを早い段階で見せる */}
        <AssuranceSection />
        
        <ProductShowcase />
        
        {/* 第三者の評価で信頼性を高める */}
        <ReviewSection />
        
        {/* Philosophy Section */}
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Philosophy</h2>
                <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
                    CHO-JU（長寿）に込めた想い
                </h3>
                <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
                    モノが溢れる現代だからこそ、<br />
                    私たちは「長く愛される道具」を作ることにこだわります。<br /><br />
                    それは耐久性があるということだけではありません。<br />
                    生活の一部として馴染み、<br />
                    使う人の心を豊かにし続ける存在であること。<br /><br />
                    あなたの、そしてご家族の健やかな毎日が<br />
                    一日でも長く続きますように。
                </p>
            </div>
        </section>
        
        {/* 購入前の不安を解消 */}
        <FAQSection />

        <BlogSection posts={allPostsData} />
      </main>
      <Footer />
    </div>
  );
}
