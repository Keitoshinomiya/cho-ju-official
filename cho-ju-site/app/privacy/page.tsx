import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'プライバシーポリシー - CHO-JU',
  description: 'CHO-JU（運営：合同会社ヤシノミ）の個人情報の取り扱いについて。',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              Privacy Policy
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sumi">プライバシーポリシー</h1>
          </div>

          <div className="space-y-12 text-sumi-soft leading-loose">
            <p>
              合同会社ヤシノミ（以下「当社」といいます）は、当社が運営するブランド「CHO-JU」のウェブサイト（以下「本サイト」といいます）における、
              利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">1. 個人情報の定義</h2>
              <p>
                本ポリシーにおいて「個人情報」とは、個人情報保護法に定める「個人情報」を指し、生存する個人に関する情報であって、
                氏名、住所、メールアドレス等により特定の個人を識別できる情報をいいます。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">2. 取得する情報</h2>
              <p>当社は、本サイトの運営にあたり、以下の情報を取得することがあります。</p>
              <ul className="mt-4 space-y-2 list-disc list-inside marker:text-shu">
                <li>お問い合わせ時にご入力いただく氏名・メールアドレス・内容等</li>
                <li>本サイトの閲覧履歴、Cookie、アクセス解析により自動取得される情報</li>
                <li>ご利用の端末・ブラウザの種類、IPアドレス等の技術情報</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">3. 利用目的</h2>
              <p>取得した個人情報は、以下の目的の範囲内で利用します。</p>
              <ul className="mt-4 space-y-2 list-disc list-inside marker:text-shu">
                <li>お問い合わせへの対応およびご連絡のため</li>
                <li>本サイトの運営・改善、利便性向上のため</li>
                <li>製品・サービスに関する情報のご案内のため</li>
                <li>利用状況の分析および統計データの作成のため</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">4. 第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、あらかじめ利用者の同意を得ることなく、個人情報を第三者に提供しません。
                ただし、利用目的の達成に必要な範囲で業務委託先に取り扱いを委託する場合があり、その際は適切な監督を行います。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">5. Cookie・アクセス解析</h2>
              <p>
                本サイトでは、利便性の向上やアクセス状況の把握のためにCookieおよびアクセス解析ツールを利用することがあります。
                これらにより個人を特定する情報は取得しません。ブラウザの設定によりCookieを無効化することができますが、
                その場合、本サイトの一部機能がご利用いただけないことがあります。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">6. 開示・訂正・削除等の請求</h2>
              <p>
                利用者は、当社が保有する自己の個人情報について、開示・訂正・追加・削除・利用停止等を請求することができます。
                ご請求の際は、本ポリシー末尾のお問い合わせ窓口までご連絡ください。本人確認のうえ、合理的な範囲で速やかに対応いたします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">7. 安全管理措置</h2>
              <p>
                当社は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">8. 本ポリシーの変更</h2>
              <p>
                当社は、法令の変更や運営上の必要に応じて、本ポリシーを変更することがあります。
                変更後の内容は、本サイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-sumi mb-4 pl-4 border-l-2 border-shu">9. お問い合わせ窓口</h2>
              <div className="border-t border-hai mt-4">
                <dl>
                  {[
                    ['事業者名', '合同会社ヤシノミ'],
                    ['所在地', '〒563-0032 大阪府池田市石橋1-15-33 平尾ビル2F'],
                    ['連絡先', 'info@yashi-nomi.com'],
                  ].map(([term, desc]) => (
                    <div key={term} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-5 border-b border-hai">
                      <dt className="font-medium text-sumi text-sm">{term}</dt>
                      <dd className="sm:col-span-2 text-sumi-soft">{desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <p className="text-sm text-sumi-soft pt-4">制定日：2026年1月1日</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
