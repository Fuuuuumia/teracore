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
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
  { id: 'sample-category', name: 'Sample Category', path: '/blog/sample-category' },
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
    date: '2026-02-21',
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
  },


    {
    id: 'post003',
    title: 'Jetpack Compose 入門',
    path: '/blog/sample-category/log3',
    author: 'author002',
    date: '2026-02-19',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log3/thumbnail.png',
  },
  {
    id: 'post004',
    title: 'Kotlin 基本文法まとめ',
    path: '/blog/sample-category/log4',
    author: 'author002',
    date: '2026-02-18',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log4/thumbnail.png',
  },
  {
    id: 'post005',
    title: 'レイアウト設計のベストプラクティス',
    path: '/blog/sample-category/log5',
    author: 'author001',
    date: '2026-02-17',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log5/thumbnail.png',
  },
  {
    id: 'post006',
    title: 'RecyclerView の使い方',
    path: '/blog/sample-category/log6',
    author: 'author003',
    date: '2026-02-16',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log6/thumbnail.png',
  },
  {
    id: 'post007',
    title: 'Room データベース入門',
    path: '/blog/sample-category/log7',
    author: 'author001',
    date: '2026-02-15',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log7/thumbnail.png',
  },
  {
    id: 'post008',
    title: 'MVVM アーキテクチャ解説',
    path: '/blog/sample-category/log8',
    author: 'author002',
    date: '2026-02-14',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log8/thumbnail.png',
  },
  {
    id: 'post009',
    title: 'Coroutine の基本',
    path: '/blog/sample-category/log9',
    author: 'author003',
    date: '2026-02-13',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log9/thumbnail.png',
  },
  {
    id: 'post010',
    title: 'Navigation Component の使い方',
    path: '/blog/sample-category/log10',
    author: 'author001',
    date: '2026-02-12',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log10/thumbnail.png',
  },
  {
    id: 'post011',
    title: 'Material Design 3 対応方法',
    path: '/blog/sample-category/log11',
    author: 'author002',
    date: '2026-02-11',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log11/thumbnail.png',
  },
  {
    id: 'post012',
    title: 'アプリの多言語対応',
    path: '/blog/sample-category/log12',
    author: 'author003',
    date: '2026-02-10',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log12/thumbnail.png',
  },
  {
    id: 'post013',
    title: 'Firebase 連携入門',
    path: '/blog/sample-category/log13',
    author: 'author001',
    date: '2026-02-09',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log13/thumbnail.png',
  },
  {
    id: 'post014',
    title: '通知機能の実装方法',
    path: '/blog/sample-category/log14',
    author: 'author002',
    date: '2026-02-08',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log14/thumbnail.png',
  },
  {
    id: 'post015',
    title: 'アニメーションの追加方法',
    path: '/blog/sample-category/log15',
    author: 'author003',
    date: '2026-02-07',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log15/thumbnail.png',
  },
  {
    id: 'post016',
    title: 'テストコードの書き方',
    path: '/blog/sample-category/log16',
    author: 'author001',
    date: '2026-02-06',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log16/thumbnail.png',
  },
  {
    id: 'post017',
    title: 'CI/CD の導入',
    path: '/blog/sample-category/log17',
    author: 'author002',
    date: '2026-02-05',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log17/thumbnail.png',
  },
  {
    id: 'post018',
    title: 'パフォーマンス改善テクニック',
    path: '/blog/sample-category/log18',
    author: 'author003',
    date: '2026-02-04',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log18/thumbnail.png',
  },
  {
    id: 'post019',
    title: 'Play Store 公開手順',
    path: '/blog/sample-category/log19',
    author: 'author001',
    date: '2026-02-03',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log19/thumbnail.png',
  },
  {
    id: 'post020',
    title: 'セキュリティ対策まとめ',
    path: '/blog/sample-category/log20',
    author: 'author002',
    date: '2026-02-02',
    category: 'sample-category',
    thumbnail: '/blog/sample-category/log20/thumbnail.png',
  },
  {
  id: 'post021',
  title: 'Google Maps API の導入方法',
  path: '/blog/sample-category/log21',
  author: 'author003',
  date: '2026-02-01',
  category: 'sample-category',
  thumbnail: '/blog/sample-category/log21/thumbnail.png',
},
{
  id: 'post022',
  title: 'ダークモード対応の実装',
  path: '/blog/sample-category/log22',
  author: 'author001',
  date: '2026-01-31',
  category: 'sample-category',
  thumbnail: '/blog/sample-category/log22/thumbnail.png',
},
{
  id: 'post023',
  title: 'バックグラウンド処理の最適化',
  path: '/blog/sample-category/log23',
  author: 'author002',
  date: '2026-01-30',
  category: 'sample-category',
  thumbnail: '/blog/sample-category/log23/thumbnail.png',
},
{
  id: 'post024',
  title: 'アプリのアクセシビリティ対応',
  path: '/blog/sample-category/log24',
  author: 'author003',
  date: '2026-01-29',
  category: 'sample-category',
  thumbnail: '/blog/sample-category/log24/thumbnail.png',
},
{
  id: 'post025',
  title: 'リリース前チェックリスト',
  path: '/blog/sample-category/log25',
  author: 'author001',
  date: '2026-01-28',
  category: 'sample-category',
  thumbnail: '/blog/sample-category/log25/thumbnail.png',
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
