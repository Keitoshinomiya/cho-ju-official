export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  painPoints: string[];
  price: string;
  image: string;
  category: string;
  features: string[];
  link?: string;
  orientation?: 'left' | 'right';
  
  // 3Dモデルパス
  modelPath?: string;
  
  // 詳細ページ用追加データ
  longDescription?: string;
  specs?: { label: string; value: string }[];
  gallery?: string[];
  beforeImage?: string;
  afterImage?: string;
  usageSteps?: { title: string; description: string }[];
  model3d?: { path: string; type: 'gltf' | 'fbx'; scale?: number }; // 3Dモデルデータ
}

export const products: Product[] = [
  {
    id: 'sui-com',
    name: 'SUI-COM',
    tagline: '「片付けなさい」と言う前に。子どもが自分から動き出す魔法。',
    description: 'リビング学習の最大の敵、「消しゴムのカス」。手で集めても床に落ちたり、テーブルに残ったり。SUI-COMは、そんな毎日の小さなイライラを解消します。',
    longDescription: 'SUI-COMは、単なる掃除道具ではありません。子供が自分から「やりたい！」と思えるような、おもちゃのような楽しさと、本格的な吸引力を兼ね備えた「習慣づくり」のためのツールです。シンプルなデザインはリビングに出しっぱなしでもインテリアを損なわず、気になったその瞬間にリセット完了。毎日の食卓が、もっと笑顔あふれる場所に変わります。',
    painPoints: [
      '食卓が消しカスだらけで食事が始まらない',
      '毎回「片付けて」と怒るのに疲れた',
      '勉強の邪魔になる細かなゴミが気になる'
    ],
    price: '¥1,980〜',
    image: '/images/products/sui-com/01.jpg',
    category: 'Desktop Cleaner',
    features: ['直感的なワンボタン操作', '子供の手に馴染むサイズ感', 'インテリアを邪魔しない6色展開', 'USB充電でコードレス'],
    link: 'https://www.amazon.co.jp/dp/B0C36W7DPL',
    orientation: 'left',
    modelPath: '/models/final_product_model.gltf',
    specs: [
      { label: 'サイズ', value: '80mm x 80mm x 60mm' },
      { label: '重量', value: '150g' },
      { label: '充電方式', value: 'USB Type-C' },
      { label: '連続使用時間', value: '約45分' },
      { label: '付属品', value: '充電ケーブル、掃除用ブラシ、日本語説明書' },
    ],
    gallery: [
        '/images/products/sui-com/01.jpg',
        '/images/products/sui-com/02.jpg',
        '/images/products/sui-com/04.jpg',
        '/images/products/sui-com/03.jpg',
        '/images/products/sui-com/06.jpg',
        '/images/products/sui-com/05.jpg',
    ],
    usageSteps: [
        { title: 'Step 1', description: '本体上部のスイッチを一回押して電源ON。' },
        { title: 'Step 2', description: 'ゴミの上をゆっくり滑らせるように移動させます。' },
        { title: 'Step 3', description: '掃除が終わったらもう一度スイッチを押してOFF。' },
        { title: 'ゴミ捨て', description: '底面のカバーを回して外し、溜まったゴミを捨てるだけ。' },
    ],
    model3d: { path: '/3d/final_product_model.gltf', type: 'gltf', scale: 1.5 }
  },
  {
    id: 'yoru-terras',
    name: 'ヨルテラス',
    tagline: '暗闇の不安を、やさしい光の安心へ。',
    description: '夜中のトイレや水飲み。寝ぼけた状態でスイッチを探すのは、実は転倒の危険と隣り合わせです。ヨルテラスは、人の動きを感知してフワッと自動点灯。',
    longDescription: '夜、ふと目が覚めてトイレに行くとき。真っ暗な廊下を歩くのは大人でも少し不安なもの。ましてやご高齢の方にとっては、転倒のリスクという重大な問題です。ヨルテラスは、そんな「見えない不安」を解消します。工事不要でどこでも設置でき、必要な時だけ優しく照らす。それはまるで、家族がそっと見守ってくれているような安心感です。',
    painPoints: [
      '夜中、真っ暗な廊下を歩くのが怖い',
      'スイッチの位置がわからず壁を手探りする',
      '電気をつけると眩しすぎて目が覚める'
    ],
    price: '¥1,980',
    image: '/images/products/yoru-terras/01.jpg',
    category: 'Sensor Light',
    features: ['高感度人感センサー', '目に優しい暖色LED', '配線不要でどこでも設置', '省エネ長持ちバッテリー'],
    link: 'https://www.amazon.co.jp/dp/B0CB89RK9N',
    orientation: 'right',
    gallery: [
        '/images/products/yoru-terras/01.jpg',
        '/images/products/yoru-terras/06.jpg',
        '/images/products/yoru-terras/02.jpg',
        '/images/products/yoru-terras/04.jpg',
        '/images/products/yoru-terras/05.jpg',
        '/images/products/yoru-terras/03.jpg',
    ],
    specs: [
      { label: 'サイズ', value: '200mm x 30mm x 20mm' },
      { label: 'センサー範囲', value: '約3m / 120度' },
      { label: '設置方法', value: 'マグネット / 3M両面テープ' },
      { label: '充電時間', value: '約2時間' },
    ],
     usageSteps: [
        { title: '設置', description: '付属の金属プレートを設置したい場所に貼り付けます。' },
        { title: '装着', description: '本体裏面のマグネットでカチッと装着。' },
        { title: 'モード選択', description: 'AUTOモードにすれば、暗い場所で動きを感知した時だけ点灯します。' },
    ]
  },
  {
    id: 'sui-com-plus',
    name: 'SUI-COM(+)',
    tagline: '「あとでやる」を「今終わらせる」。機動力という性能。',
    description: '大きな掃除機をわざわざ出すほどではないけれど、放っておけない食べこぼしやホコリ。SUI-COM(+)は、手のひらサイズに「吸引・ブロー・空気入れ・空気抜き」の4役を凝縮した多機能ハンディクリーナー。車内やアウトドアでも活躍します。',
    longDescription: '掃除機をクローゼットから出して、コンセントを差して...その手間が「掃除」を億劫にします。SUI-COM(+)なら、気になったその瞬間にサッと取り出し、秒で解決。車内のシートの隙間、窓のサッシ、ソファの隅。今まで見て見ぬふりをしていた場所が、これ一台で驚くほど綺麗になります。パワフルなのに、驚くほど軽い。これが新しい掃除のスタンダードです。',
    painPoints: [
      '掃除機を出すのが重くて面倒',
      '車のシートの隙間のゴミが取れない',
      '階段や高い場所の掃除が大変'
    ],
    price: '¥2,980',
    image: '/images/products/sui-com-plus/01.jpg',
    category: 'Handy Cleaner',
    features: ['4in1の多機能（吸引／ブロー／空気入れ／空気抜き）', '車内・アウトドア・布団圧縮にも対応', 'Type-C充電のコードレス設計', '狭い隙間も狙えるノズル付き'],
    link: 'https://www.amazon.co.jp/dp/B0DLLCY81T', // SUI-COM(+) スイコムプラス（ハンディ4in1・黒）
    orientation: 'left',
    gallery: [
        '/images/products/sui-com-plus/01.jpg',
        '/images/products/sui-com-plus/04.jpg',
        '/images/products/sui-com-plus/05.jpg',
        '/images/products/sui-com-plus/02.jpg',
        '/images/products/sui-com-plus/06.jpg',
        '/images/products/sui-com-plus/03.jpg',
    ],
    specs: [
      { label: '吸引力', value: '13000Pa' },
      { label: '重量', value: '300g' },
      { label: 'フィルター', value: 'HEPAフィルター（水洗い可）' },
      { label: '付属品', value: '隙間ノズル、ブラシノズル、充電ケーブル' },
    ],
    usageSteps: [
        { title: '通常清掃', description: 'そのままで広範囲のゴミを吸引。' },
        { title: '隙間掃除', description: '隙間ノズルを装着して、サッシやシートの隙間へ。' },
        { title: 'ゴミ捨て', description: 'ワンタッチでダストカップを開き、手を汚さずにゴミ捨て完了。' },
    ]
  },
];
