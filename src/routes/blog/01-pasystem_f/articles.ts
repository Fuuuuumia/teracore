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
    chapter: '第1章 PA機材のいろは',
    title: '1.音がスピーカから鳴るまでの流れ',
    date: '2026-03-03',
  },
  {
    chapter: '第2章 適切な信号を使おう！',
    title: '2.信号の種類① バランス信号とアンバランス信号',
    date: '2026-03-04',
  },
  {
    chapter: '第2章 適切な信号を使おう！',
    title: '3.信号の種類② マイクレベルとラインレベル',
    date: '2026-03-05',
  },
  {
    chapter: '第2章 適切な信号を使おう！',
    title: '4.具体的な端子の種類',
    date: '2026-03-06',
  },
  {
    chapter: '第2章 適切な信号を使おう！',
    title: '5.端子の変換ケーブル',
    date: '2026-03-06',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '6.マイクの基礎',
    date: '2026-03-07',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '7.アンプの基礎',
    date: '2026-03-11',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '8.スピーカの基礎',
    date: '2026-03-11',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '9.DACの基礎',
    date: '2026-03-15',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '10.DIの基礎',
    date: '2026-03-15',
  },
  {
    chapter: '第3章 機材の基礎を押さえよう',
    title: '11.ミキサの基礎',
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
  