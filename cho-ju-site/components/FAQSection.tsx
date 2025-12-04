'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '保証期間はありますか？',
    answer: 'はい、CHO-JUの全製品には購入日から1年間のメーカー保証が付帯しています。万が一、通常の使用で故障した場合は、無償で交換または修理対応いたします。',
  },
  {
    question: 'SUI-COMのフィルター交換は必要ですか？',
    answer: '基本的には水洗いで繰り返し使用可能ですが、破損や汚れが落ちなくなった場合は交換用フィルター（別売）のご購入をおすすめしています。',
  },
  {
    question: 'センサーライトの電池持ちはどのくらいですか？',
    answer: '使用頻度によりますが、1日10回程度の点灯で約2〜3ヶ月持続します。USB充電式のため、電池交換の手間やコストはかかりません。',
  },
  {
    question: '領収書の発行は可能ですか？',
    answer: 'はい、可能です。ご注文時または購入履歴から領収書の発行を申請いただけます。インボイス制度にも対応しております。',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            よくあるご質問
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            お客様から寄せられる質問にお答えします。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0 text-indigo-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
