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
  { id: 'fumi', name: 'Fumi', icon: '/icons/ath1.png' },
  { id: 'kanata', name: 'Kanata', icon: '' },

];

export const categories: Category[] = [
  { id: 'cat1', name: 'PAシステム基礎', path: '/blog/cat1' },
  { id: 'cat2', name: 'デジタルケーブル基礎', path: '/blog/cat2'},
];

export const posts: Post[] = [
  {
    id: 'fumi1',
    cat: 'cat1',
    path: '/blog/cat1/fumi1',
    title: '第一回 音がスピーカーから鳴るまでの流れ',
    ath: 'fumi',
    date: '2026-03-03',
  },
  {
    id: 'fumi2',
    cat: 'cat1',
    path: '/blog/cat1/fumi2',
    title: '第二回 信号の種類① バランス信号とアンバランス信号',
    ath: 'fumi',
    date: '2026-03-04',
  },
    {
    id: 'cat2-log1',
    cat: 'cat2',
    path: '/blog/cat2/log1',
    title: '1.デジタルケーブル、デジタル信号とは',
    ath: 'kanata',
    date: '2026-03-04',
  },
  {
    id: 'cat2-log2',
    cat: 'cat2',
    path: '/blog/cat2/log2',
    title: '2.デジタル信号の用途',
    ath: 'kanata',
    date: '2026-03-04',
  },
  {
    id: 'cat2-log3',
    cat: 'cat2',
    path:  '/blog/cat2/log3',
    title: '3.映像を伝えるケーブル①',
    ath: 'kanata',
    date: '2026-03-04',
  },
  {
    id: 'cat2-log4',
    cat: 'cat2',
    path:  '/blog/cat2/log4',
    title: '4.映像を伝えるケーブル②',
    ath: 'kanata',
    date: '2026-03-04',
  },
  {
    id: 'cat2-log5',
    cat: 'cat2',
    path:  '/blog/cat2/log5',
    title: '5.ネットワークを作るケーブル',
    ath: 'kanata',
    date: '2026-03-04',
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
