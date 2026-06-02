'use client';

import { Star, ThumbsUp, ExternalLink, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/lib/products';

// ---------------------------------------------------------------------------
// 実際のAmazonカスタマーレビューより抜粋（2026-06-02 時点）
//  SUI-COM    : 4.2★ / 475件
//  ヨルテラス : 4.3★ / 1,848件
//  ※掲載しているのはAmazonで購入された実在のレビューです（読みやすさのため一部抜粋）。
// ---------------------------------------------------------------------------
const reviews = [
  {
    id: 1,
    product: 'ヨルテラス',
    name: 'mink',
    rating: 5,
    title: '人感センサーも明るさも満足',
    content:
      '薄くてコンパクト、設置も簡単、人感センサーの感度も良く、明るさも十分で、充電も簡単です。夜間のトイレ用に廊下につけてみたのですが、とても良いので、停電時用に階段にもつけようと思い追加発注しました。',
    date: '2026年2月24日',
    verified: true,
    helpful: 1,
  },
  {
    id: 2,
    product: 'SUI-COM',
    name: 'non',
    rating: 5,
    title: '消しカスのイライラ解消',
    content:
      '小学1年生の息子に購入して、約1年経ちました。毎日宿題道具のセットの中に入ってます。消しカスが出る度に気軽にボタンで吸引できるので、息子もすぐ処理してくれるし、私もダイニングテーブルが汚れる苛立ちもなく、Win-Winなものです。購入してよかった、と感じます。',
    date: '2026年3月22日',
    verified: true,
    helpful: 0,
  },
  {
    id: 3,
    product: 'ヨルテラス',
    name: 'KOUJI',
    rating: 5,
    title: '良い買い物できました！',
    content:
      '夜によくバイク乗るのですがリアボックスの中が暗くて中のグローブやら小物が見にくいので取り付けました。開けたらすぐに点灯。明るい！アルミの取り付け部分もしっかり張り付きました。走ってても今のところ外れません。雨の日は取り外すのも簡単で良きです。',
    date: '2026年3月25日',
    verified: true,
    helpful: 2,
  },
  {
    id: 4,
    product: 'SUI-COM',
    name: 'す',
    rating: 4,
    title: '綺麗になる！',
    content:
      '机の下に落とすと床が黒くなるから、このクリーナーを子どもに使ってもらってます。星マイナス1なのは、専用のやや短いケーブルじゃないと充電できないところ。もっと充電器の線を伸ばしてくれると嬉しい。でも吸引力もあるし使いやすいよ。',
    date: '2025年12月12日',
    verified: true,
    helpful: 3,
  },
  {
    id: 5,
    product: 'ヨルテラス',
    name: 'うにじゃ',
    rating: 4,
    title: '軽く、明るく、使い勝手抜群',
    content:
      '軽くて明るく、ちょっと薄暗いスペースを見るのに簡単に手に取って使えます。磁石が内蔵されているので、金属が近くにあればそこに貼り付けて使うことも可能。充電もType-Cケーブルで簡単です。2個目も購入し、1個は車に置いて使っています。',
    date: '2026年5月5日',
    verified: true,
    helpful: 1,
  },
  {
    id: 6,
    product: 'SUI-COM',
    name: 'sayaka',
    rating: 5,
    title: '買って良かった',
    content:
      '購入するか迷いましたが、購入して良かったです！吸引力もあって机がきれいになります！',
    date: '2026年3月26日',
    verified: true,
    helpful: 0,
  },
];

// Amazonの実データに基づく集計（SUI-COM + ヨルテラス、2026-06-02 時点）
const summary = {
  average: '4.3',
  totalReviews: '2,300',
  shipped: '30,000',
  distribution: [
    { star: 5, percent: 63 },
    { star: 4, percent: 19 },
    { star: 3, percent: 9 },
    { star: 2, percent: 3 },
    { star: 1, percent: 6 },
  ],
};

export default function ReviewSection() {
  return (
    <section className="bg-kinari-deep py-28 border-t border-hai/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
            <span className="w-6 h-px bg-shu mr-3" />
            Customer Reviews
          </div>
          <p className="font-serif text-3xl sm:text-4xl font-medium text-sumi leading-snug">
            累計3万台以上。<br className="md:hidden" />
            実際に使った方の声
          </p>
          <p className="mt-5 max-w-xl mx-auto text-base text-sumi-soft leading-loose">
            ここに掲載しているのは、Amazonで実際に購入された
            <span className="text-sumi font-medium">本物のレビュー</span>です。
            飾らない毎日の声を、そのままお届けします。
          </p>
        </div>

        {/* 信頼サマリー：平均評価＋星分布＋出荷台数 */}
        <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-kinari border border-hai p-8 sm:p-10">
          {/* 左：平均評価 */}
          <div className="text-center md:border-r md:border-hai md:pr-12">
            <div className="font-serif text-6xl font-medium text-sumi leading-none">
              {summary.average}
              <span className="text-2xl text-sumi-soft"> / 5.0</span>
            </div>
            <div className="flex items-center justify-center text-shu mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(Number(summary.average)) ? 'fill-shu' : 'text-hai'}
                  fill={i < Math.round(Number(summary.average)) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-sumi-soft">
              Amazon 累計 {summary.totalReviews}件以上の評価より
            </p>
          </div>

          {/* 右：星分布バー */}
          <div className="space-y-2.5">
            {summary.distribution.map((d) => (
              <div key={d.star} className="flex items-center gap-3 text-sm">
                <span className="text-sumi-soft w-10 shrink-0">星{d.star}</span>
                <div className="flex-grow h-2.5 bg-kinari-deep border border-hai/60 overflow-hidden">
                  <div className="h-full bg-shu/80" style={{ width: `${d.percent}%` }} />
                </div>
                <span className="text-sumi-soft w-10 shrink-0 text-right tabular-nums">
                  {d.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* レビューカード */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-kinari p-7 border border-hai flex flex-col h-full hover:border-sumi/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-kinari-deep flex items-center justify-center text-sumi-soft font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-medium text-sm text-sumi">{review.name}</span>
                </div>
                <span className="text-[11px] text-sumi-soft border border-hai px-2 py-0.5">
                  {review.product}
                </span>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < review.rating ? 'text-shu fill-shu' : 'text-hai'}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
                {review.verified && (
                  <span className="ml-2 text-xs text-sumi-soft font-medium flex items-center">
                    <BadgeCheck size={13} className="mr-1 text-ai" />
                    Amazonで購入
                  </span>
                )}
              </div>

              <h3 className="font-serif text-base text-sumi mb-2 leading-relaxed">
                {review.title}
              </h3>

              <p className="text-sm text-sumi-soft mb-4 leading-relaxed flex-grow">
                {review.content}
              </p>

              <div className="mt-auto pt-4 border-t border-hai/60 flex items-center justify-between text-sumi-soft/70 text-xs">
                <span className="flex items-center">
                  <ThumbsUp size={14} className="mr-1" /> 役に立った（{review.helpful}）
                </span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 各商品のAmazonレビューへの導線 */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-lg text-sumi mb-8">
            すべてのレビューをAmazonで見る
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {products.map((product) => (
              <a
                key={product.id}
                href={`${product.link}#averageCustomerReviewsAnchor`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-kinari border border-hai hover:border-ai transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white border border-hai overflow-hidden mr-3 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="40px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-sumi-soft font-medium">{product.category}</div>
                    <div className="text-sm font-bold text-sumi group-hover:text-ai transition-colors">
                      {product.name}
                    </div>
                  </div>
                </div>
                <ExternalLink size={16} className="text-sumi-soft/60 group-hover:text-ai" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
