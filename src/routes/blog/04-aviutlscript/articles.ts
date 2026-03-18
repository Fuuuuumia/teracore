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
    date: "2026-03-17",
  },
  {
    title: "3.スクリプトファイルの構成",
    date: "2026-03-17",
  },
/*
  {
    title: "4.スクリプトを読もう",
    date: "2026-03-16",
  },
  {
    title: "5.スクリプトを書こう",
    date: "2026-03-16",
  },
  {
    title: "6.既存のスクリプトを読もう",
    date: "2026-03-16",
  },
  {
    title: "7.エラーの読み方",
    date: "2026-03-16",
  },
  {
    title: "8.便利サイトまとめ",
    date: "2026-03-16",
  },
  */
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
  