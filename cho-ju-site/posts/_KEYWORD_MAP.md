# キーワードマップ（ロングテールSEO → Amazon送客）

> このファイルは `_` 始まりのためビルド対象外（記事企画用）。
> 戦略: 購買意図の強いロングテール複合語で上位を取り → 記事内CTA＋ProductCTAでAmazonへ送客。
> 計測: GA4 `amazon_click` イベント（記事URL別に送客数を確認）＋ Search Console（表示/クリック/順位）。

## クラスタA: センサーライト（ヨルテラス / yoru-terras）

| # | 狙うキーワード | 検索意図 | 記事 | 状態 |
|---|---|---|---|---|
| A1 | センサーライト 選び方 | 比較検討 | sensor-light-choose | ✅既存 |
| A2 | 夜中 トイレ 怖い/転倒 | 悩み | night-toilet-fear | ✅既存 |
| A3 | 高齢者 転倒 予防 夜 | 悩み | yoru-terras-safety | ✅既存 |
| A4 | センサーライト 電池式 充電式 どっち | 比較検討 | sensor-light-battery-or-rechargeable | ✅今回 |
| A5 | 廊下 電気 つけっぱなし 電気代 | 悩み | hallway-light-electricity-cost | ✅今回 |
| A6 | 階段 足元灯 工事不要 | 用途 | stairs-footlight-no-construction | ✅今回 |
| A7 | クローゼット 照明 後付け | 用途 | closet-light-no-wiring | ✅今回 |
| A8 | 授乳 ライト 夜 眩しくない | 用途 | baby-night-light-nursing | ✅今回 |
| A9 | 停電 自動点灯 ライト 備え | 用途 | blackout-emergency-light | ✅今回 |
| A10 | 実家 親 夜 見守り プレゼント | ギフト | parents-living-alone-night-safety | ✅今回 |
| A11 | センサーライト 置き場所 室内 アイデア | 情報収集 | sensor-light-placement-ideas | ✅今回 |
| A12 | センサーライト 屋外 と 室内 の違い | 比較検討 | sensor-light-outdoor-vs-indoor | ✅今回 |
| A13 | 人感センサー 反応しない 原因 | トラブル | motion-sensor-not-working | ✅今回 |
| A14 | 常夜灯 つけて寝る 眩しい | 悩み | night-light-too-bright | ✅今回 |
| A15 | 防災グッズ 最低限 リスト 灯り | 情報収集 | emergency-light-checklist | ✅今回 |

## クラスタB: 卓上クリーナー（SUI-COM / sui-com）

| # | 狙うキーワード | 検索意図 | 記事 | 状態 |
|---|---|---|---|---|
| B1 | 卓上クリーナー 選び方 | 比較検討 | desk-cleaner-howtochoose | ✅既存 |
| B2 | 消しカス 習慣/リビング学習 | 悩み | eraser-dust-habits, living-learning-magic | ✅既存 |
| B3 | 消しカス 掃除機 吸っていい | 疑問 | eraser-dust-no-vacuum | ✅今回 |
| B4 | 卓上クリーナー 意味ある 効果 | 疑問 | desk-cleaner-worth-it | ✅今回 |
| B5 | キーボード 掃除 ホコリ 食べカス | 用途 | keyboard-crumbs-cleaning | ✅今回 |
| B6 | 勉強 集中できない 机 汚い | 悩み | study-concentration-desk | ✅今回 |
| B7 | 裁縫 糸くず 掃除 | 用途 | handicraft-thread-dust | ✅今回 |
| B8 | 卓上クリーナー 吸わない 原因 | トラブル | desk-cleaner-weak-suction | ✅今回 |
| B9 | シャーペンの芯 こぼした 掃除 | 悩み | mechanical-pencil-lead-spill | ✅今回 |
| B10 | ネイル ダスト 掃除 | 用途 | nail-dust-cleaning | ✅今回 |

## クラスタC: ハンディ4in1（SUI-COM+ / sui-com-plus）

| # | 狙うキーワード | 検索意図 | 記事 | 状態 |
|---|---|---|---|---|
| C1 | 車 シート 隙間 ゴミ | 悩み | car-seat-gap | ✅既存 |
| C2 | 車内 掃除 コツ | 情報収集 | car-cleaning-secret | ✅既存 |
| C3 | 布団圧縮袋 掃除機なし 空気抜き | 疑問 | futon-compression-without-vacuum | ✅今回 |
| C4 | 窓 サッシ 掃除 簡単 | 用途 | window-sash-cleaning-easy | ✅今回 |
| C5 | 浮き輪 空気入れ 電動 | 用途 | pool-float-electric-pump | ✅今回 |
| C6 | キャンプ 掃除/エアポンプ | 用途 | camping-air-pump-cleaning | ✅今回 |

## 執筆ルール
1. タイトルに狙うキーワードをそのまま含める（「キーワード｜ベネフィット」形式）
2. 価格・スペックは lib/products.ts の実データのみ。レビュー引用は実在のもののみ。統計の捏造禁止
3. 記事末に必ず関連商品セクション（frontmatter `productId:` でProductCTA自動表示）
4. 同クラスタの既存記事へ内部リンクを2本以上
5. 日付は公開日。カテゴリは lib/categories.ts の label と一致させる
