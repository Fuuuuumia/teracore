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
}

export interface Article {
  id: string;
  cat: string;
  path: string;
  thum?: string;
  title: string;
  ath: string;
  date: string;
  index: number;
}

export const writers: Writer[] = [
  { id: '01', name: 'Fumi', icon: '/icons/ath1.png' },
  { id: '02', name: 'Kanata', icon: '' },
  { id: '03', name: 'きなこ氏', icon: '' },
  { id: '04', name: '556', icon: '' },
];

export const categories: Category[] = [
  { id: '01-pasystem_f', name: 'PAシステム基礎', path: '/blog/01-pasystem_f' },
  { id: '02-cat2', name: 'デジタルケーブル基礎', path: '/blog/02-cat2'},
  { id: '03-cat3', name: '音声技術学Ⅰ（基礎）', path:  '/blog/03-cat3'},
  { id: '03-cat4', name: '音声技術学Ⅱ（理論）', path: '/blog/03-cat4'},
  { id: '03-cat5', name: '音声技術学Ⅲ（発展）/ DTM', path: '/blog/03-cat5'},
  { id: '04-aviutlscript', name: 'AviUtlスクリプト（Lua）', path: '/blog/04-aviutlscript'},
];

let articles: Article[]= [];
const modules = import.meta.glob("/src/routes/blog/*/articles.ts", {import: "articles", eager: true});
for(const path in modules){
  articles = articles.concat(modules[path] as Article[]);
}

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