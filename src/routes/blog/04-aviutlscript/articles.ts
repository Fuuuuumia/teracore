import type { Article } from "$lib/data";

// 固定値
const CAT="04-aviutlscript";
const common = {
  index: null,
  id: null,
  path: null,
  cat: CAT,
  ath: "04",
};

type InputArticle = Omit<Article, keyof typeof common> & Partial<Article>;

// 記事リスト
const input: InputArticle[] = [
  {
    title: "1.AviUtlスクリプトとは",
    date: "2026-03-12",
  },
  {
    title: "2.Luaの文法",
    date: "2026-03-12",
  },
];

// 固定値 + index補完
export const articles: Article[] =
  input.map((data, i) => ({
    ...common,
    index: i + 1,
    id : CAT + "-" + String(i+1).padStart(2, '0'),
    path :  "/blog/" + CAT + "/" + String(i+1).padStart(2, '0'),
    ...data,
  }));
  