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

export interface Post {
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
  { id: '01-cat1', name: 'PAシステム基礎', path: '/blog/01-cat1' },
  { id: '02-cat2', name: 'デジタルケーブル基礎', path: '/blog/02-cat2'},
  { id: '03-cat3', name: '音声技術学Ⅰ（基礎）', path:  '/blog/03-cat3'},
  { id: '03-cat4', name: '音声技術学Ⅱ（理論）', path: '/blog/03-cat4'},
  { id: '03-cat5', name: '音声技術学Ⅲ（発展）/ DTM', path: '/blog/03-cat5'},
  { id: '04-aviutlscript', name: 'AviUtlスクリプト（Lua）', path: '/blog/04-aviutlscript'},
];

export const posts: Post[] = [
  {
    id: '01-cat1-01',
    cat: '01-cat1',
    path: '/blog/01-cat1/fumi1',
    title: '第一回 音がスピーカから鳴るまでの流れ',
    ath: '01',
    date: '2026-03-03',
    index: 1,
  },
  {
    id: '01-cat1-02',
    cat: '01-cat1',
    path: '/blog/01-cat1/fumi2',
    title: '第二回 信号の種類① バランス信号とアンバランス信号',
    ath: '01',
    date: '2026-03-04',
    index: 2,
  },
    {
    id: '02-cat2-01',
    cat: '02-cat2',
    path: '/blog/02-cat2/log1',
    title: '1.デジタル信号とは',
    ath: '02',
    date: '2026-03-04',
    index: 1,
  },
  {
    id: '02-cat2-02',
    cat: '02-cat2',
    path: '/blog/02-cat2/log2',
    title: '2.デジタル信号の用途',
    ath: '02',
    date: '2026-03-04',
    index: 2,
  },
  {
    id: '02-cat2-03',
    cat: '02-cat2',
    path:  '/blog/02-cat2/log3',
    title: '3.映像を伝えるケーブル①',
    ath: '02',
    date: '2026-03-04',
    index: 3,
  },
  {
    id: '02-cat2-04',
    cat: '02-cat2',
    path:  '/blog/02-cat2/log4',
    title: '4.映像を伝えるケーブル②',
    ath: '02',
    date: '2026-03-04',
    index: 4,
  },
  {
    id: '02-cat2-05',
    cat: '02-cat2',
    path:  '/blog/02-cat2/log5',
    title: '5.ネットワークを作るケーブル',
    ath: '02',
    date: '2026-03-04',
    index: 5,
  },
  {
    id: '01-cat1-03',
    cat: '01-cat1',
    path: '/blog/01-cat1/fumi3',
    title: '第三回 信号の種類② マイクレベルとラインレベル',
    ath: '01',
    date: '2026-03-05',
    index: 3
  },
  {
    id: '03-cat3-01',
    cat: '03-cat3',
    path: '/blog/03-cat3/file3-1',
    title: 'Ⅰ / 第一講「音声ファイルとは」',
    ath: '03',
    date: '2026-03-05',
    index: 1,
  },
  {
    id: '03-cat4-01',
    cat: '03-cat4',
    path: '/blog/03-cat4/file4-1',
    title: 'Ⅱ / 第一講「音声ファイル切り貼りの極意」',
    ath: '03',
    date: '2026-03-05',
    index: 1,
   },
   {
    id: '02-cat2-06',
    cat: '02-cat2',
    path: '/blog/02-cat2/log6',
    title: '6.パソコンと周辺機器を繋ぐケーブル①',
    ath: '02',
    date: '2026-03-04',
    index: 6,
  },
  {
    id: '02-cat2-07',
    cat: '02-cat2',
    path: '/blog/02-cat2/log7',
    title: '7.パソコンと周辺機器を繋ぐケーブル②',
    ath: '02',
    date: '2026-03-04',
    index: 7,
  },
  {
    id: '01-cat1-04',
    cat: '01-cat1',
    path: '/blog/01-cat1/fumi4',
    title: '第四回 具体的な端子の種類',
    ath: '02',
    date: '2026-03-06',
    index: 4,
  },
  {
    id: '01-cat1-05',
    cat: '01-cat1',
    path: '/blog/01-cat1/fumi5',
    title: '第五回 端子の変換ケーブル',
    ath: '02',
    date: '2026-03-06',
    index: 5,
  },
  {
    id: '02-cat2-08',
    cat: '02-cat2',
    path: '/blog/02-cat2/log8',
    title: '8.充電するためのケーブル',
    ath: '02',
    date: '2026-03-06',
    index: 8,
  },
  {
    id: '02-cat2-09',
    cat: '02-cat2',
    path: '/blog/02-cat2/log9',
    title: '9.複雑化したUSB規格',
    ath: '02',
    date: '2026-03-07',
    index: 9,
  },
  {
    id: '02-cat2-10',
    cat: '02-cat2',
    path: '/blog/02-cat2/log10',
    title: '10.USBハブの役割',
    ath: '02',
    date: '2026-03-08',
    index: 10,
  },
  {
    id: '02-cat2-11',
    cat: '02-cat2',
    path: '/blog/02-cat2/log11',
    title: '11.HDMI分配器',
    ath: '02',
    date: '2026-03-08',
    index: 11,
  },
  {
    id: '02-cat2-12',
    cat: '02-cat2',
    path: '/blog/02-cat2/log12',
    title: '12.キャプチャーボードとATEM',
    ath: '02',
    date: '2026-03-08',
    index: 12,
  },
  {
    id: '02-cat2-13',
    cat: '02-cat2',
    path: '/blog/02-cat2/log13',
    title: '13.映像信号をLANケーブルで伝える',
    ath: '02',
    date: '2026-03-08',
    index: 13,
  },
  {
    id: '04-aviutlscript-01',
    cat: '04-aviutlscript',
    path: '/blog/04-aviutlscript/01',
    title: '1.AviUtlスクリプトとは',
    ath: '04',
    date: '2026-03-09',
    index: 1,
  },
  {
    id: 'fumi6',
    cat: 'cat1',
    path: '/blog/cat1/fumi6',
    title: '第六回 マイクの基礎',
    ath: 'fumi',
    date: '2026-03-07',
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

export function getPostByPathname(url: string){
  return posts.find((post) => resolve(post.path as any) === url);
}