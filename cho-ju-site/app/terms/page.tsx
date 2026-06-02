import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '利用規約 - CHO-JU',
  description: 'CHO-JU（運営：合同会社ヤシノミ）ウェブサイトの利用規約。',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              Terms of Service
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sumi">利用規約</h1>
          </div>

          <div className="space-y-12 text-sumi-soft leading-loose">
            <p>
              この利用規約（以下「本規約」といいます）は、合同会社ヤシノミ（以下「当社」といいます）が運営するブランド「CHO-JU」の
              ウェブサイト（以下「本サイト」といいます）の利用条件を定めるものです。利用者は、本サイトを利用することにより、本規約に同意したものとみなされます。
            </p>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第1条（適用）</h2>
              <p>
                本規約は、利用者と当社との間の本サイトの利用に関わる一切の関係に適用されるものとします。
                当社が本サイト上で掲載する個別規定その他のガイドラインは、本規約の一部を構成するものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第2条（禁止事項）</h2>
              <p>利用者は、本サイトの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="mt-4 space-y-2 list-disc list-inside marker:text-shu">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社または第三者の知的財産権、肖像権、プライバシーその他の権利を侵害する行為</li>
                <li>本サイトの運営を妨害し、またはそのおそれのある行為</li>
                <li>不正アクセスを試みる行為、または本サイトのネットワーク・システムに過度の負荷をかける行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第3条（本サイトの提供の停止等）</h2>
              <p>
                当社は、システムの保守点検、火災・停電・天災等の不可抗力、その他やむを得ない事由が生じた場合には、
                利用者に事前に通知することなく、本サイトの全部または一部の提供を停止または中断することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第4条（著作権・知的財産権）</h2>
              <p>
                本サイトに掲載される文章、画像、ロゴ、デザイン、製品情報等のコンテンツに関する著作権その他の知的財産権は、
                当社または正当な権利者に帰属します。利用者は、私的使用の範囲を超えてこれらを複製、転載、改変、配布等することはできません。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第5条（外部リンク）</h2>
              <p>
                本サイトには、Amazon等の外部サイトへのリンクが含まれることがあります。これら外部サイトの内容について、
                当社は一切の責任を負いません。外部サイトのご利用は、各サイトの規約に従うものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第6条（免責事項）</h2>
              <p>
                当社は、本サイトに掲載する情報の正確性・完全性・有用性等について、可能な限り正確な情報の提供に努めますが、
                これらを保証するものではありません。本サイトの利用により利用者に生じた損害について、当社の故意または重過失による場合を除き、
                当社は責任を負わないものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第7条（規約の変更）</h2>
              <p>
                当社は、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。
                変更後の本規約は、本サイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">第8条（準拠法・裁判管轄）</h2>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。本サイトに関して紛争が生じた場合には、
                当社の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <p className="text-sm text-sumi-soft pt-4">制定日：2026年1月1日</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
