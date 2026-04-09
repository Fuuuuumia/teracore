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
    title: "1.このカテゴリーについて",
    date: "2026-04-06",
  },
  {
    title: "2.独学用ロードマップ",
    date: "2026-04-06",
  },
  {
    title: "3.Luaの文法",
    date: "2026-04-06",
  },
  /*
  {
    title: "4.自作スクリプト解説1(anm)",
    date: "2026-04-06",
  },
  {
    title: "5.自作スクリプト解説2（obj）",
    date: "2026-04-06",
    },
  {
    title: "ex1.AviUtl ExEdit2での変化",
    date: "2026-04-06",
  },
  */
];

export const articles: Article[] =
  input.map((data, i) => ({
    ...common,
    index: i+1,
    id: CAT + "-" + String(i+1).padStart(2, '0'),
    path: "/blog/" + CAT + "/" + String(i+1).padStart(2, '0'),
    ...data,
  }));