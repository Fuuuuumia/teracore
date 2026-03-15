import type { Article } from "$lib/data";

// 固定値
const CAT="01-pasystem_f";
const common = {
  index: null,
  id: null,
  path: null,
  cat: CAT,
  ath: "01",
};

type InputArticle = Omit<Article, keyof typeof common> & Partial<Article>;

// 記事リスト
const input: InputArticle[] = [
  {
    title: '1.音がスピーカから鳴るまでの流れ',
    date: '2026-03-03',
  },
  {
    title: '2.信号の種類① バランス信号とアンバランス信号',
    date: '2026-03-04',
  },
  {
    title: '3.信号の種類② マイクレベルとラインレベル',
    date: '2026-03-05',
  },
  {
    title: '4.具体的な端子の種類',
    date: '2026-03-06',
  },
  {
    title: '5.端子の変換ケーブル',
    date: '2026-03-06',
  },
  {
    title: '6.マイクの基礎',
    date: '2026-03-07',
  },
  {
    title: '7.アンプの基礎',
    date: '2026-03-11',
  },
  {
    title: '8.スピーカの基礎',
    date: '2026-03-11',
  },
  {
    title: '9.DACの基礎',
    date: '2026-03-15',
  },
  {
    title: '10.DIの基礎',
    date: '2026-03-15',
  },
  {
    title: '11.DIの基礎',
    date: '2026-03-15',
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
  