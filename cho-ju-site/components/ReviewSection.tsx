'use client';

import { Star, CheckCircle, ThumbsUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/lib/products';

const reviews = [
  {
    id: 1,
    name: 'さくらママ',
    rating: 5,
    title: '子供が進んで掃除をするようになりました！',
    content: 'リビング学習の消しゴムのカス問題にずっと悩んでいました。SUI-COMを置いてからは、子供が遊び感覚で掃除してくれるようになり、私のストレスが激減。もっと早く買えばよかったです。吸引力も十分で、音も静かなので夜でも気になりません。',
    date: '2023年8月15日',
    image: '/images/review-child-study.jpg',
    verified: true,
    helpful: 124,
  },
  {
    id: 2,
    name: 'K.T',
    rating: 5,
    title: 'デスク周りがスッキリ。デザインも最高。',
    content: '在宅ワークでデスク周りの埃や食べこぼしが気になり購入。出しっぱなしにしていてもインテリアを邪魔しないシンプルなデザインが気に入っています。USB-Cで充電できるのも地味に便利です。',
    date: '2023年9月10日',
    image: '/images/review-clean-desk.jpg',
    verified: true,
    helpful: 89,
  },
  {
    id: 3,
    name: '猫好き会社員',
    rating: 4,
    title: '猫の毛対策に導入',
    content: 'キーボードの隙間に入り込む猫の毛や、デスク上の細かいゴミをサッと吸い取れます。今まで粘着クリーナーを使っていましたが、こちらの方が断然楽です。ただ、少しダストボックスが小さいかな？こまめに捨てれば問題なしです。',
    date: '2023年10月5日',
    verified: true,
    helpful: 45,
  },
  {
    id: 4,
    name: 'Y.S',
    rating: 5,
    title: 'パンくず掃除の救世主',
    content: '朝食後のパンくず掃除用にダイニングテーブルに常備しています。布巾で拭くと床に落ちてしまうストレスから解放されました。吸引力が強くて、一往復で綺麗になります。',
    date: '2023年11月22日',
    image: '/images/review-messy-desk.jpg', // 散らかった状態のビフォーとして使用
    verified: true,
    helpful: 210,
  },
  {
    id: 5,
    name: 'ヨルテラス購入者',
    rating: 5,
    title: '夜中のトイレが怖くなくなりました',
    content: '高齢の両親のために廊下に設置しました。センサーの感度が良く、パッと明るくなるので安心感があります。工事不要で簡単に取り付けられたのも良かったです。',
    date: '2023年9月2日',
    verified: true,
    helpful: 56,
  },
  {
    id: 6,
    name: 'Amazon Customer',
    rating: 4,
    title: '車用としても使えます',
    content: '本来は卓上用ですが、車のドリンクホルダー周りの掃除にも使っています。コードレスで小回りが利くので便利です。吸引力はそこそこですが、砂利とかでなければ十分吸います。',
    date: '2023年12月1日',
    verified: true,
    helpful: 12,
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 tracking-wide uppercase mb-2">Customer Reviews</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-4">
            30,000人以上の<br className="md:hidden"/>お客様に選ばれています
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
             </div>
             <span className="text-2xl font-bold text-gray-900">4.8</span>
             <span className="text-gray-500 text-lg">/ 5.0</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 masonry-grid mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                        {review.name.charAt(0)}
                    </div>
                    <span className="font-medium text-sm text-gray-900">{review.name}</span>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                {review.verified && (
                    <span className="ml-2 text-xs text-orange-600 font-medium flex items-center">
                        Amazonで購入
                    </span>
                )}
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{review.title}</h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                {review.content}
              </p>

              {review.image && (
                <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group cursor-pointer">
                    <Image 
                        src={review.image} 
                        alt="Review image" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-gray-400 text-xs">
                <span className="flex items-center hover:text-gray-600 cursor-pointer transition-colors">
                    <ThumbsUp size={14} className="mr-1" /> 役に立った ({review.helpful})
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
            <h3 className="text-center text-lg font-bold text-gray-900 mb-8">各商品のレビューをAmazonで見る</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {products.map((product) => (
                    <a 
                        key={product.id}
                        href={`${product.link}#averageCustomerReviewsAnchor`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden mr-3 relative">
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-medium">{product.category}</div>
                                <div className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{product.name}</div>
                            </div>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-indigo-600" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
