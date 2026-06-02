import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              About
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sumi">会社概要</h1>
          </div>

          <div className="border-t border-hai mb-16">
            <dl>
              {[
                ['ショップ名', 'CHO-JU（チョウジュ）'],
                ['運営会社', '合同会社ヤシノミ'],
                ['所在地', '〒563-0032 大阪府池田市石橋1-15-33 平尾ビル2F'],
                ['代表者', '四宮 慶人'],
                ['事業内容', '生活雑貨の企画・製造・販売'],
              ].map(([term, desc]) => (
                <div key={term} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-6 border-b border-hai">
                  <dt className="font-medium text-sumi text-sm">{term}</dt>
                  <dd className="sm:col-span-2 text-sumi-soft leading-relaxed">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          <h2 className="font-serif text-2xl font-medium text-sumi mb-6 pl-4 border-l-2 border-shu">
            ブランドコンセプト
          </h2>
          <div className="space-y-5 text-sumi-soft leading-loose">
            <p>
              CHO-JUは、日本の家族の生活に寄り添うブランドです。
              「長寿」という言葉には、製品を長く愛用していただきたいという願いと、
              使う人の健康で豊かな生活が長く続くようにという想いが込められています。
            </p>
            <p>
              シンプルで飽きのこないデザイン、必要十分な機能、そして誰もが手に取りやすい価格。
              これらをバランスよく実現することで、皆様の日常の「ちょっとした不便」を解消し、
              笑顔の時間を増やすお手伝いができれば幸いです。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
