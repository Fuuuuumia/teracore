<style>
th, td {border: 1px solid;}
</style>

# 命名規則など

## ブランチ

| 目的 | 命名規則 |
| --- | --- |
| 新機能 | feature/<機能の名前> |
| バグ修正| fix/<修正部分> |
| 新規記事 | articles/<著者name> |

## 著者
`src/lib/data.ts`内の配列`writers`を編集してください。

| 項目 | 命名規則 |
| --- | --- |
| id | 01からカウント（文字列） |
| name | 任意の文字列 |
| icon | 要校閲というかよくわかってないです。誰か書いてください。 |

## カテゴリ

`src/lib/data.ts`の配列`categories`を編集してください。  
<>に囲まれている部分は書き換えてください。

| 項目 | 命名規則 |
| --- | --- |
| id | <著者id>-<任意の文字列> |
| name | 任意の文字列 |
| path | src/routes/blog/<カテゴリid> |

ファイル操作が必要になります。まずは図を載せます。

```
/
└─ src
   ├─ lib 
   │  └─ data.ts
   └─ routes
      └─ blog
         ├─ +layout.svelte.sample  --これをコピー
         ├─ +page.svelte.sample    --これもコピー
         └─ <カテゴリid>            --作成
            ├─ +page.svelte        --
            └─ (scoped)
               ├─ +layout.svelte
               ├─ 01
               │  └─ +page.svx
               ├─ 02
               │  └─ +page.svx
               ...  
```

ここから文章で説明します。  
`src/routes/blog/<カテゴリid>`を作成し、そのフォルダのルートからのパスを`path`プロパティに入力してください。  
さらに、`src/routes/blog/<カテゴリid>/(scoped)`を作成し、src/routes/blog/+layout.svelte.sampleをそのフォルダにコピーして、最後の.sampleを消してください。 
SvelteKitでは、()でかこったフォルダは実際のページのパスには影響を与えません。
何言ってるか意味が分からないと思うので、わかってそうな人に聞くか、フォルダ構成を見て察してください。できたら、次の新しい記事を書く人に進んでください。

## 記事id
<カテゴリid>-<01からカウントアップ>
## 記事フォルダ名
<01からカウントアップ>

# 命名規則と新規作成手順
命名規則と、変更する場所を示しておきます
何言っているか分からないと思うので、他の人が作ったものを見て察するかわかってる人に聞いてほしいです。  
なんなら書き直してほしいです。ごめんなさい。


## 新規カテゴリー（記事のシリーズ）

## 新しい記事を書く人
新しい記事を書く人は、src/lib/data.tsの配列articlesにその記事のことを表すオブジェクトを追加してください。pathプロパティには、その記事のルートからのパスを入力してください。そしたら、src/routes/blog/辻褄の合う名前/(scoped)/辻褄の合う名前　に+page.svxというファイルを作り、そこにマークダウンを記入してください。

## 記事の見た目を変えたい人
記事の見た目を変えたい人は、新しいカテゴリを作るときにコピーしてもらった+layout.svelteをいじってください。


# ブランチの命名規則

ブランチは以下の規則に従って命名します．

- 新機能 feature/<機能の名前>
- バグ修正 fix/<修正部分>
- 新規記事 articles/<あなたのauthorID>

# 記事の書き方
説明が怪文書で何言っているか分からないと思うので、他の人が作ったフォルダを見て察するかわかってる人に聞いてほしいです。なんなら書き直してほしいです。ごめんなさい。

## 初めて記事を書く人
初めて記事を書く人は、src/lib/data.tsの配列writersに、自分のことを表すオブジェクトを追加して、次の新しいカテゴリーをつくる人に進んでください。

## 新しいカテゴリーをつくる人
新しいカテゴリー(記事のシリーズ)をつくる人は、src/lib/data.tsの配列categoriesに、そのカテゴリーのことを表すオブジェクトを追加してください。pathプロパティには、そのカテゴリのルートからのパスを入力してください。さらに、src/routes/blog/オブジェクトと辻褄の合う値/(scoped)というフォルダを作ってください。(SvelteKitでは、()でかこったフォルダは実際のページのパスには影響を与えません。)src/routes/blog/+layout.svelte.sampleをそのフォルダにコピーして、最後の.sampleを消してください。何言ってるか意味が分からないと思うので、わかってそうな人に聞くか、フォルダ構成を見て察してください。できたら、次の新しい記事を書く人に進んでください。

## 新しい記事を書く人
新しい記事を書く人は、src/lib/data.tsの配列articlesにその記事のことを表すオブジェクトを追加してください。pathプロパティには、その記事のルートからのパスを入力してください。そしたら、src/routes/blog/辻褄の合う名前/(scoped)/辻褄の合う名前　に+page.svxというファイルを作り、そこにマークダウンを記入してください。

## 記事の見た目を変えたい人
記事の見た目を変えたい人は、新しいカテゴリを作るときにコピーしてもらった+layout.svelteをいじってください。

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types ts --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
