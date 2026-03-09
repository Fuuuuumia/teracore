# 新規作成と命名規則

ブランチ以外の作成手順と、命名規則を書きます。  
説明が不十分なところ・わかりにくいところがありますので、他の人が作ったものも見て理解する方がいいです。

## ブランチ

| 目的 | 命名規則 |
| --- | --- |
| 新機能 | feature/<機能の名前> |
| バグ修正| fix/<修正部分> |
| 新規記事 | articles/<著者name> |

`feature`と`fix`はMerge後に削除してください。  
`articles`に関しては。同じ名前のものを使い続けることが予想されるので削除は不要です。

## 著者
`src/lib/data.ts`内の配列`writers`を編集してください。  
**※追加は配列の一番下に**
| 項目 | 命名規則 |
| --- | --- |
| id | <01からカウント> |
| name | <任意の文字列> |
| icon | <`static`からみたアイコン画像のパス 空文字列も可> |

## カテゴリ

`src/lib/data.ts`の配列`categories`を編集してください。  

| 項目 | 命名規則 |
| --- | --- |
| id | <著者id>-<任意の文字列> |
| name | <任意の文字列> |
| path | /blog/<カテゴリid> |

さらにいろいろやります。まずは図を載せます。

```
/
└─ src
   ├─ lib 
   │  └─ data.ts  ------------------- 編集
   └─ routes
      └─ blog
         ├─ +layout.svelte.sample  -- コピー
         ├─ +page.svelte.sample  ---- コピー
         └─ <カテゴリid>  ------------ 作成
            ├─ +page.svelte  -------- ペースト＆リネーム＆編集
            └─ (scoped)  ------------ 作成
               └─ +layout.svelte  --- ペースト＆リネーム
```

ここから文章で説明します。  
  
`src/routes/blog/<カテゴリid>`を作成してください。  
`routes`からみたこのフォルダのパスが`categories`の`path`プロパティの値と同じになったら正解です。  
  
`src/routes/blog/<カテゴリid>/(scoped)`を作成してください。  
SvelteKitでは、( )でかこわれた名前のフォルダは実際のページのパスには影響を与えません。  
  
下の表に従ってファイルをコピー&ペーストしてください。

| コピーするファイル | ペーストする場所 | リネーム後ファイル名 |
| --- | --- | --- |
| `src/routes/blog/+layout.svelte.sample` | `src/routes/blog/<カテゴリid>` | `+layout.svelte` |
| `src/routes/blog/+page.svelte.sample` | `src/routes/blog/<カテゴリid>/(scoped)` | `+page.svelte` |
  
`+page.svelte`のこの部分↓を、先ほど`categories`に追加した`id`と`name`に従って編集してください。
```html
<div class="category-page">
  <h1></h1> <!--h1にカテゴリnameを入力-->
  <PostList categoryId="" /> <!--categoryIdにカテゴリIDを入力-->
</div>
```

これでカテゴリ作成は終わりです。

## 記事

`src/lib/data.ts`の配列`articles`を編集してください。  

| 項目 | 命名規則 |
| --- | --- |
| id | <カテゴリid>-<01からカウント> |
| cat | <カテゴリid> |
| path | /blog/<カテゴリid>/<任意の文字列> |
| title | <任意の文字列> |
| ath | <著者id> |
| date | <yyyy-mm-dd形式の日付> |
| index | <カテゴリ内の何番目の記事か(number)> |

さらにいろいろやります。まずは図を載せます。

```
/
└─ src
   ├─ lib 
   │  └─ data.ts  ------------------ 編集
   └─ routes
      └─ blog
         ├─ +page.svx.sample ------- サンプルページ
         └─ <カテゴリid>
            └─ (scoped)
               ├─ +layout.svelte  -- 見た目かえたいとき編集
               └─ <任意の文字列>  --- 作成
                  └─ +page.svx  ---- 作成
```

ここから文章で説明します。  
  
`src/routes//blog/<カテゴリid>/<任意の文字列>`を作成してください。  
`routes`からみたこのフォルダのパスが`articles`の`path`プロパティの値と同じになったら正解です。  
  
`src/routes//blog/<カテゴリid>/<01からカウント>/+page.svx`を作成してください。  
このページにMarkdown形式で記入した内容が記事の内容となります。  
Markdown記法は`src/routes/blog/+page.svx.sample`にまとめてあります。  
  
これで記事作成は終わりです。  
  
### 記事の見た目変更

`+layout.svelte`を編集してください。  
なお、`src/routes/blog/+page.svx.sample`はほとんどのMarkdown記法を網羅している~~はずな~~ので、をコピーしてきて`+page.svx`とリネームして使うとcssの編集が楽になるかと思います。

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