import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import BlogSection from '@/components/BlogSection';
import ReviewSection from '@/components/ReviewSection';
import VideoSection from '@/components/VideoSection';
import FAQSection from '@/components/FAQSection';
import AssuranceSection from '@/components/AssuranceSection';
import Footer from '@/components/Footer';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* 安心感を醸成する保証セクションを早い段階で見せる */}
        <AssuranceSection />
        
        <ProductShowcase />
        
        {/* 第三者の評価で信頼性を高める */}
        <ReviewSection />

        {/* YouTube紹介動画（lib/videos.ts に動画を追加すると表示される） */}
        <VideoSection />

        {/* Philosophy Section */}
        <section id="about" className="relative py-32 bg-kinari overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-6">
                    <span className="w-6 h-px bg-shu mr-3" />
                    Philosophy
                    <span className="w-6 h-px bg-shu ml-3" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-sumi mb-10 tracking-wide">
                    CHO-JUに込めた想い
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-sumi-soft leading-loose">
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
