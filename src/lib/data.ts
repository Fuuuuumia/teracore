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

export interface Post {
  id: string;
  cat: string;
  path: string;
  thum?: string;
  title: string;
  ath: string;
  date: string;
}

export const writers: Writer[] = [
  { id: 'ath1', name: 'Fumi', icon: '/icons/ath1.png' },
  { id: 'ath2', name: 'Kanata', icon: '' },

];

export const categories: Category[] = [
  { id: 'cat1', name: 'PAシステム基礎', path: '/blog/cat1' },

];

export const posts: Post[] = [
  {
    id: 'log1',
    cat: 'cat1',
    path: '/blog/cat1/log1',
    thum: '/blog/cat1/log1/thumbnail.png',
    title: 'Ⅰ PA機材のいろは スピーカから音が鳴るまで',
    ath: 'fumi',
    date: '2026-02-21',
  },

  
];

export function getPostsByCategory(categoryId: string): Post[] {
  if (categoryId === 'all') {
    return posts;
  }
  return posts.filter((post) => post.cat === categoryId);
}

export function getPostsByath(athId: string): Post[] {
  return posts.filter((post) => post.ath === athId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

export function getWriterById(writerId: string): Writer | undefined {
  return writers.find((writer) => writer.id === writerId);
}
