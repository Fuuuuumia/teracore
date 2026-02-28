export interface Category {
  id: string;
  name: string;
  path: string;
}

export interface Writer {
  id: string;
  name: string;
  icon: string;
}

export interface Post {
  id: string;
  title: string;
  path: string;
  author: string;
  date: string;
  category: string;
  thumbnail?: string;
}

export const categories: Category[] = [
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },

];

export const writers: Writer[] = [
  { id: 'author001', name: 'Fumi', icon: '' },
];

export const posts: Post[] = [
  {
    id: 'post001',
    title: 'Android Studio 初期設定ガイド',
    path: '/blog/sample-category/log1',
    author: 'author001',
    date: '2026-2-20',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log1/thumbnail.png',
  },
  {
    id: 'post002',
    title: 'Androidエミュレーターの最適化',
    path: '/blog/sample-category/log3',
    author: 'author001',
    date: '2026-02-20',
    category: 'sample-category',
    preview: 'エミュレーターの動作が遅い？このガイドでパフォーマンスを大幅に改善する方法を学べます。',
  },
];

export function getPostsByCategory(categoryId: string): Post[] {
  if (categoryId === 'all') {
    return posts;
  }
  return posts.filter((post) => post.category === categoryId);
}

export function getPostsByAuthor(authorId: string): Post[] {
  return posts.filter((post) => post.author === authorId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

export function getWriterById(writerId: string): Writer | undefined {
  return writers.find((writer) => writer.id === writerId);
}
