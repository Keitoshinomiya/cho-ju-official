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
    <section className="bg-kinari py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-sumi tracking-wide">
            よくあるご質問
          </h2>
          <p className="mt-4 text-base text-sumi-soft">
            お客様から寄せられる質問にお答えします。
          </p>
        </div>

        <div className="border-t border-hai">
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
    <div className="bg-kinari overflow-hidden border-b border-hai">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-base font-medium text-sumi">{question}</span>
        <span className="ml-6 flex-shrink-0 text-ai">
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
            <div className="px-2 pb-6 text-sumi-soft leading-loose">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
