import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">会社概要</h1>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-12">
            <dl className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-bold text-gray-900">ショップ名</dt>
                <dd className="sm:col-span-2 text-gray-600">CHO-JU（チョウジュ）</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-bold text-gray-900">運営会社</dt>
                <dd className="sm:col-span-2 text-gray-600">合同会社Detail Design</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-bold text-gray-900">所在地</dt>
                <dd className="sm:col-span-2 text-gray-600">〒123-4567 東京都〇〇区〇〇 1-2-3</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-bold text-gray-900">代表者</dt>
                <dd className="sm:col-span-2 text-gray-600">〇〇 〇〇</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-bold text-gray-900">事業内容</dt>
                <dd className="sm:col-span-2 text-gray-600">生活雑貨の企画・製造・販売</dd>
              </div>
            </dl>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">ブランドコンセプト</h2>
          <div className="prose prose-indigo text-gray-600">
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
