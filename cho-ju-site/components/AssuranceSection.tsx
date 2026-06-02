import { ShieldCheck, Truck, MessageCircle, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '1年間の安心保証',
    description: '万が一の故障も無償交換対応。長く安心してお使いいただけます。',
  },
  {
    icon: Truck,
    title: '最短翌日配送',
    description: 'Amazon配送センターより、365日休まず迅速にお届けします。',
  },
  {
    icon: MessageCircle,
    title: '日本人スタッフ対応',
    description: 'お問い合わせには、国内のサポートチームが丁寧に対応いたします。',
  },
  {
    icon: RefreshCw,
    title: '30日間返品可能',
    description: 'イメージと違った場合でも、30日以内なら返品・返金が可能です。',
  },
];

export default function AssuranceSection() {
  return (
    <section className="bg-ai-deep py-20 text-kinari">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 ${
                index > 0 ? 'lg:border-l lg:border-kinari/15' : ''
              }`}
            >
              <feature.icon size={32} strokeWidth={1.5} className="text-kinari/70 mb-5" />
              <h3 className="font-serif text-lg mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-kinari/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
