# nextjs-blog

Next.js でブログをつくっていくレポジトリです

## メモ

- \_app.js
  - このアプリのトップレベルのファイル
  - アプリ全体で適用させたい設定やスタイルはここに書く
- index.js
  - ルートドメインの`/`にアクセスしたときに表示されるページ
- globals.css
  - 全体で適用させたいスタイルやリセット CSS

### ブログ記事の書き方

- 3 つのハイフンで挟まれた部分を Frontmatter と呼ぶ。
- 必要な情報を追加する。
- なんでも追加できる。

```
---
id: "1"
title: "1つ目の記事"
date: "2021-10-25"
image: ""
except: ""
---

これが 1 つめのブログ記事です。

```

## markdown を React で扱う

```bash
yarn add raw-loader gray-matter react-markdown
```

- raw-loader: markdown の読み込み
- gray-matter: frontmatter 部分の読み込み
- react-markdown: react コンポーネントでのマークダウン処理
