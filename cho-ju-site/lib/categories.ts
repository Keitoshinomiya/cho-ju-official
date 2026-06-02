// ブログ記事のカテゴリ定義（100本展開の土台）。
// posts/*.md の frontmatter `category:` には、ここの label をそのまま指定してください。
// 例:  category: "リビング学習"
//
// SEOの考え方（collegrance を参考）:
//  - 各カテゴリ = 検索ニーズのかたまり。1カテゴリにつき10〜20本を目安に量産する。
//  - 記事タイトルは「悩み・シーン・キーワード」を必ず含める。
//  - 関連商品（relatedProduct）を結びつけ、記事末のCTAで購入へつなげる。

export interface BlogCategory {
  // frontmatter / URL で使う表示名
  label: string;
  // 英語の副見出し（デザイン上のラベル）
  en: string;
  // カテゴリ説明（一覧ページや meta に利用）
  description: string;
  // 主に紐づく商品ID（任意）
  relatedProduct?: 'sui-com' | 'yoru-terras' | 'sui-com-plus';
  // 想定検索キーワード（記事企画の指針）
  keywords: string[];
}

export const blogCategories: BlogCategory[] = [
  {
    label: 'リビング学習',
    en: 'Education',
    description: '子どもの学習習慣と、消しカス・散らかり対策。親子のストレスを減らす暮らしの工夫。',
    relatedProduct: 'sui-com',
    keywords: ['リビング学習', '消しカス 掃除', '卓上クリーナー', '子ども 片付け', '勉強机 整理'],
  },
  {
    label: '掃除・片付け',
    en: 'Cleaning',
    description: '毎日の掃除を軽くする、小さな道具と習慣の話。',
    relatedProduct: 'sui-com-plus',
    keywords: ['卓上 掃除', 'ハンディクリーナー', '細かいゴミ', '掃除 時短', 'デスク 掃除'],
  },
  {
    label: 'カーライフ',
    en: 'Car Life',
    description: '車内を快適に保つ清掃術と、ドライブが楽しくなるアイテム。',
    relatedProduct: 'sui-com-plus',
    keywords: ['車内 掃除', '車用 掃除機', 'ハンディクリーナー 車', 'シート 隙間 ゴミ', '洗車'],
  },
  {
    label: '暮らしの工夫',
    en: 'Home Comfort',
    description: '住まいを心地よく整える、ミニマルで長く使えるモノ選び。',
    keywords: ['暮らし 整える', 'シンプル 収納', 'インテリア 雑貨', '時短 家事', 'ミニマリスト'],
  },
  {
    label: '安心・見守り',
    en: 'Safety',
    description: '夜間や高齢のご家族の安全。転倒予防と、やさしい灯りのある暮らし。',
    relatedProduct: 'yoru-terras',
    keywords: ['センサーライト', '足元灯', '夜中 トイレ', '高齢者 転倒 予防', '人感センサー'],
  },
  {
    label: 'ギフト',
    en: 'Gift',
    description: '実用的で気の利いた、贈って喜ばれるプレゼントのアイデア。',
    keywords: ['実用的 プレゼント', 'ギフト 1000円', '引っ越し祝い', '父の日 母の日', 'プチギフト'],
  },
  {
    label: '商品ガイド',
    en: 'Product Guide',
    description: '製品の使い方・お手入れ・比較。購入前後のギモンを解消。',
    keywords: ['使い方', 'お手入れ', '比較', 'スペック', 'よくある質問'],
  },
];

export const categoryLabels = blogCategories.map((c) => c.label);

export function getCategory(label?: string): BlogCategory | undefined {
  if (!label) return undefined;
  return blogCategories.find((c) => c.label === label);
}
