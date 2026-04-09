import { resolve } from "$app/paths";

export interface Writer {
  id: string;
  name: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  path: string;
  detail?: string;
  tags?: string[];
}

export interface Article {
  id: string;
  cat: string;
  path: string;
  thum?: string;
  chapter?: string;
  title: string;
  ath: string;
  date: string;
  index: number;
  tags?: string[];
}

export const writers: Writer[] = [
  { id: '01', name: 'Fumi', icon: '/icons/ath1.png' },
  { id: '02', name: 'Kanata', icon: '' },
  { id: '03', name: 'きなこ氏', icon: '' },
  { id: '04', name: '556', icon: '' },
];

export const categories: Category[] = [
  { id: '01-pasystem_f', name: 'PAシステム基礎', path: '/blog/01-pasystem_f' ,
    detail: `知識ゼロ~基本のシステム構築までに必要な知識を整理して説明します！`,
    tags: ["音響", "舞台演出"]
  },
  { id: '02-digital_cable', name: 'デジタルケーブル基礎', path: '/blog/02-digital_cable'},
  { id: '03-DAW', name: '音楽ソフトのつかいかた', path: '/blog/03-DAW'},
  { id: '03-AudioRefine', name: '音声技術Ⅰ / 音声技術Ⅱ', path: '/blog/03-AudioRefine'},
  { id: '03-Mastering', name: '音声技術Ⅲ / DTM', path: '/blog/03-Mastering'},
  {
    id: '04-aviutlscript', name: 'AviUtlスクリプト（Lua）', path: '/blog/04-aviutlscript', tags: ["プログラミング", "動画編集"], 
    detail: `AviUtlスクリプト関連資料集` 
  },
  {id: '02-obs_studio', name: 'OBS Studio入門', path: '/blog/02-obs_studio'},
];

let articles: Article[]= [];
const modules = import.meta.glob("/src/routes/blog/*/articles.ts", {import: "articles", eager: true});
for(const path in modules){
  articles = articles.concat(modules[path] as Article[]);
}

articles = articles.map(article => {
  const category = categories.find(cat => cat.id === article.cat);
  return {
    ...article,
    tags: category?.tags || article.tags || []
  };
});

export function getArticlesByCategory(categoryId: string): Article[] {
  if (categoryId === 'all') {
    return articles;
  }
  return articles.filter((article) => article.cat === categoryId);
}

export function getArticlesByath(athId: string): Article[] {
  return articles.filter((article) => article.ath === athId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

export function getWriterById(writerId: string): Writer | undefined {
  return writers.find((writer) => writer.id === writerId);
}

export function getArticleByPathname(url: string){
  return articles.find((article) => resolve(article.path as any) === url);
}