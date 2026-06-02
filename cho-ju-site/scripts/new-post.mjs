#!/usr/bin/env node
/**
 * ブログ記事のひな形を生成するスクリプト（100本量産用）。
 *
 * 使い方:
 *   node scripts/new-post.mjs \
 *     --slug "desk-eraser-dust" \
 *     --title "消しカスが床に散らからない。リビング学習を快適にする3つの習慣" \
 *     --category "リビング学習" \
 *     --product "sui-com" \
 *     --image "/images/blog/living-room-study.jpg" \
 *     --excerpt "リビング学習の悩み「消しカス」。親子のストレスを減らす習慣を紹介します。" \
 *     --tags "リビング学習,消しカス,卓上クリーナー"
 *
 * npm 経由:  npm run new:post -- --slug "..." --title "..." --category "..."
 *
 * slug / title / category は必須。image を省略すると商品カテゴリに応じた既定画像を使います。
 */
import fs from 'fs';
import path from 'path';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : 'true';
      args[key] = val;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

const required = ['slug', 'title', 'category'];
const missing = required.filter((k) => !args[k]);
if (missing.length) {
  console.error(`\n[new-post] 必須項目が足りません: ${missing.join(', ')}`);
  console.error('例: node scripts/new-post.mjs --slug "..." --title "..." --category "リビング学習"\n');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slug = String(args.slug).trim().replace(/[^a-z0-9-]/gi, '-').toLowerCase();

const defaultImageByProduct = {
  'sui-com': '/images/blog/living-room-study.jpg',
  'sui-com-plus': '/images/blog/car-interior-luxury.jpg',
  'yoru-terras': '/images/blog/yoru-hallway.jpg',
};
const image =
  args.image || defaultImageByProduct[args.product] || '/images/desktop-cleaner.jpg';

const tags = (args.tags || '')
  .split(',')
  .map((t) => t.trim())
  .filter(Boolean);

const postsDir = path.join(process.cwd(), 'posts');
const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`\n[new-post] 既に存在します: posts/${slug}.md （上書きを避けて中断）\n`);
  process.exit(1);
}

const frontmatter = [
  '---',
  `title: "${String(args.title).replace(/"/g, '\\"')}"`,
  `date: "${today}"`,
  `category: "${args.category}"`,
  `excerpt: "${(args.excerpt || '').replace(/"/g, '\\"')}"`,
  `image: "${image}"`,
  args.product ? `productId: "${args.product}"` : null,
  tags.length ? `tags: [${tags.map((t) => `"${t}"`).join(', ')}]` : null,
  '---',
].filter(Boolean).join('\n');

// collegrance 流の構成スケルトン（導入→共感→解決→根拠→使い方→まとめ→CTA）
const body = `
## ${args.title.split('。')[0]}

（ここに、読者が「これは自分のことだ」と感じる情景や悩みの描写を書きます。2〜3段落。）

## こんな悩み、ありませんか？

- （あるあるの悩み 1）
- （あるあるの悩み 2）
- （あるあるの悩み 3）

## 解決のヒント

（具体的な解決策を、見出しを分けて丁寧に。**強調**したい言葉は太字に。）

### ポイント1：

### ポイント2：

### ポイント3：

## 暮らしにこう取り入れる

（実際の使用シーン・ビフォーアフターを、写真が浮かぶように描写します。）

## まとめ

（記事の要点を3行程度で振り返り、行動（試してみる・見てみる）をやさしく後押しします。）
`;

fs.writeFileSync(filePath, `${frontmatter}\n${body}`, 'utf8');
console.log(`\n[new-post] 作成しました → posts/${slug}.md`);
console.log(`  title:    ${args.title}`);
console.log(`  category: ${args.category}`);
console.log(`  product:  ${args.product || '(なし)'}`);
console.log(`  image:    ${image}\n`);
