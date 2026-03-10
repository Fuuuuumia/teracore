import type { Article } from "$lib/data";

// 固定値
const common = {
  cat: new URL(".", import.meta.url).pathname.split("/").filter(Boolean).at(-1)!,
  ath: "04",
};

type InputArticle = Omit<Article, keyof typeof common | "index"> & Partial<Article>;

// 記事リスト
const input: InputArticle[] = [
  {
    id: "04-aviutlscript-01",
    path: "/blog/04-aviutlscript/01",
    title: "1.AviUtlスクリプトとは",
    date: "2026-03-09",
  },
];

// 固定値 + index補完
export const articles: Article[] =
  input.map((data, i) => ({
    index: i + 1,
    ...common,
    ...data,
  }));
  