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
  { id: 'cat001', name: 'Sample Category', path: '/blog/cat001' },
  { id: 'cat002', name: 'Sample Category2', path: '/blog/cat002' },
  { id: 'cat003', name: 'Sample Category3', path: '/blog/cat003' },
  

];

export const writers: Writer[] = [
  { id: 'author001', name: 'Fumi', icon: '' },
  { id: 'author002', name: 'taka-------y', icon: '' },

];

export const posts: Post[] = [
  {
    id: 'post001',
    title: 'SvelteKit 書き方まとめ',
    path: '/blog/cat001/log001',
    author: 'author002',
    date: '2026-02-21',
    category: 'cat001',
    thumbnail: '/blog/cat001/log001/thumbnail.png',
  },
  {
    id: 'post002',
    title: 'Android Studio 入門ガイド',
    path: '/blog/cat002/log001',
    author: 'author001',
    date: '2026-02-20',
    category: 'cat002',
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
