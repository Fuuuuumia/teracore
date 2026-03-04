# ブランチの命名規則

ブランチは以下の規則に従って命名します．

- 新機能 feature/<機能の名前>
- バグ修正 fix/<修正部分>
- 新規記事 articles/<あなたのauthorID>

# 記事の書き方
## 初めて記事を書く人
初めて記事を書く人は、src/lib/data.tsの配列writersに、自分のことを表すオブジェクトを追加して、次の新しいカテゴリーをつくる人に進んでください。
## 新しいカテゴリーをつくる人
新しいカテゴリー(記事のシリーズ)をつくる人は、src/lib/data.tsの配列categoriesに、そのカテゴリーのことを表すオブジェクトを追加してください。pathプロパティには、そのカテゴリのルートからのパスを入力してください。さらに、src/routes/blog/(そのカテゴリのパスに指定した名前)というフォルダを作り、src/routes/blog/+layout.svelte.sampleをそのフォルダにコピーして、最後の.sampleを消してください。できたら、次の新しい記事を書く人に進んでください。
## 新しい記事を書く人
新しい記事を書く人は、src/lib/data.tsの配列articlesにその記事のことを表すオブジェクトを追加してください。pathプロパティには、その記事のルートからのパスを入力してください。
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
