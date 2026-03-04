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
