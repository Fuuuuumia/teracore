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
    title: '第一回 音がスピーカから鳴るまでの流れ',
    date: '2026-03-03',
  },
  {
    title: '第二回 信号の種類① バランス信号とアンバランス信号',
    date: '2026-03-04',
  },
  {
    title: '第三回 信号の種類② マイクレベルとラインレベル',
    date: '2026-03-05',
  },
  {
    title: '第四回 具体的な端子の種類',
    date: '2026-03-06',
  },
  {
    title: '第五回 端子の変換ケーブル',
    date: '2026-03-06',
  },
  {
    title: '第六回 マイクの基礎',
    date: '2026-03-07',
  },
  {
    title: '第七回 アンプの基礎',
    date: '2026-03-11',
  },
  {
    title: '第八回 スピーカの基礎',
    date: '2026-03-11',
  },
  {
    title: '第九回 DACの基礎',
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
  