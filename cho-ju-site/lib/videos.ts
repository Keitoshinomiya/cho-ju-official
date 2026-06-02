export interface VideoItem {
  // YouTubeのURL末尾の動画ID（例: https://www.youtube.com/watch?v=XXXXXXXXXXX の XXXXXXXXXXX 部分）
  youtubeId: string;
  // 動画タイトル（サイト上の見出しとして表示）
  title: string;
  // 紹介してくれたチャンネル名（任意）
  channel?: string;
  // 関連商品ID（'sui-com' / 'yoru-terras' / 'sui-com-plus'）。指定すると商品詳細ページにも表示できる（任意）
  productId?: string;
  // YouTubeショート（縦型動画）の場合は true
  vertical?: boolean;
}

// ここにYouTube動画を追加すると、トップページの「Media」セクションに自動で並びます。
// 配列が空のあいだはセクション自体が非表示になります。
export const videos: VideoItem[] = [
  {
    youtubeId: 'WzQXcPDHj6c',
    title: '【主婦のリアル片付け】押入れ・廊下収納をスッキリ掃除／センサーライトで快適生活',
    channel: 'yukari home 暮らし プチプラ購入品',
    productId: 'yoru-terras',
  },
  {
    youtubeId: 'uVyYhbdnGM4',
    title: '最強の卓上クリーナーならゴミ四天王も撃破出来るんじゃね？',
    channel: 'こはにゃん',
    productId: 'sui-com',
    vertical: true,
  },
  {
    youtubeId: 'eEkHLw-95Os',
    title: '【Morning Routine】家族の休日・雪遊び／車掃除グッズ',
    channel: 'tenaga',
    productId: 'sui-com-plus',
  },
  {
    youtubeId: '3QvLDmKgOzo',
    title: '車内清掃が楽しくなるハンディクリーナーがこれです！',
    channel: '監督モータース',
    productId: 'sui-com-plus',
  },
  {
    youtubeId: 'rz0Fqpd1Phk',
    title: '【キャンピングカーの掃除って？】車中泊・バンライフの片付け',
    channel: 'かなたにさんち',
    productId: 'sui-com-plus',
    vertical: true,
  },
];
