import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'お問い合わせ - CHO-JU',
  description: 'CHO-JU（運営：合同会社ヤシノミ）へのお問い合わせはこちら。',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              Contact
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-sumi">お問い合わせ</h1>
            <p className="mt-5 max-w-xl mx-auto text-base text-sumi-soft leading-loose">
              製品に関するご質問、ご要望、その他お気づきの点がございましたら、
              下記の窓口までお気軽にお問い合わせください。
            </p>
          </div>

          {/* お問い合わせフォーム */}
          <ContactForm />

          {/* 連絡先情報 */}
          <div className="mt-12 border border-hai bg-kinari-deep p-8 sm:p-10 space-y-8">
            <div className="flex items-start gap-5">
              <Mail size={24} strokeWidth={1.5} className="text-ai mt-1 shrink-0" />
              <div>
                <h2 className="font-serif text-lg font-medium text-sumi mb-1">メールでのお問い合わせ</h2>
                <a
                  href="mailto:info@yashi-nomi.com"
                  className="text-ai hover:text-ai-deep transition-colors break-all"
                >
                  info@yashi-nomi.com
                </a>
                <p className="mt-2 text-sm text-sumi-soft leading-relaxed">
                  内容を確認のうえ、担当者より順次ご返信いたします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-t border-hai pt-8">
              <Clock size={24} strokeWidth={1.5} className="text-ai mt-1 shrink-0" />
              <div>
                <h2 className="font-serif text-lg font-medium text-sumi mb-1">受付・返信について</h2>
                <p className="text-sm text-sumi-soft leading-relaxed">
                  お問い合わせの受付は24時間承っております。
                  ご返信は、土日祝日を除く2〜3営業日以内を目安にお送りいたします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-t border-hai pt-8">
              <MapPin size={24} strokeWidth={1.5} className="text-ai mt-1 shrink-0" />
              <div>
                <h2 className="font-serif text-lg font-medium text-sumi mb-1">運営会社</h2>
                <p className="text-sm text-sumi-soft leading-relaxed">
                  合同会社ヤシノミ<br />
                  〒563-0032 大阪府池田市石橋1-15-33 平尾ビル2F
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-sumi-soft leading-loose text-center">
            お預かりした個人情報は、
            <a href="/privacy" className="text-ai hover:text-ai-deep transition-colors">プライバシーポリシー</a>
            に基づき適切に取り扱います。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
