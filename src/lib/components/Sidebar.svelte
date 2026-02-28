<script>
  import { resolve } from '$lib/utils/paths';
  import { categories } from '$lib/data';
  
  // アルファベット順にグループ化
  let grouped = {};

  categories.forEach(cat => {
    const first = cat.name[0].toUpperCase();
    if (!grouped[first]) grouped[first] = [];
    grouped[first].push({
      name: cat.name,
      path: resolve(cat.path)
    });
  });

  // アルファベット順にソート
  const letters = Object.keys(grouped).sort();
</script>

<aside>
  <a href={resolve('/categories')} class="Categories">Categories</a>

  {#each letters as letter}
    <div class="category-group">
      <h4>{letter}</h4>
      <ul>
        {#each grouped[letter] as cat}
          <li><a href={cat.path}>{cat.name}</a></li>
        {/each}
      </ul>
    </div>
  {/each}
</aside>

<style>

/* サイドバー全体 */
aside {
  position: fixed;
  top: 60px;        /* ヘッダーの高さ分下げる */
  left: 0;
  width: 200px;
  padding: 1rem;
  background: #ededf6; /* 少し落ち着かせた灰色 */
  height: calc(100vh - 60px); /* ヘッダー高さ分を引く */
  border-right: 0.1rem solid #00316010 ;  
  border-bottom: 0.1rem solid #00316010 ;  
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;    


}

aside::-webkit-scrollbar {
  width: 0px;
}

/* タイトル */
.Categories {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #003160;          /* 落ち着いた濃い色 */
}

/* リンクリスト */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* リンク装飾 */
ul li a {
  text-decoration: none;
  color: #255982;              /* 少し淡い文字色 */
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s, background-color 0.2s;
  border-right: 0.25rem solid transparent; /* 現在ページ用 */
  word-break: break-word;
  overflow-wrap: anywhere;
  line-height: 1.4;
}

.category-group{
  color: #003160;
  font-weight: normal;
}

/* ホバー時 */
ul li a:hover {
  color: #ffbb00;           /* 強調色 */
}

/* 下線アニメーション */
ul li a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffbb00;
  transition: width 0.3s;
}

ul li a:hover::after {
  width: 100%;
}

/* 現在ページ */
ul li a.active {
  color: #ff9900;            /* 落ち着いたオレンジ */
  border-right: 0.25rem solid #ff9900;
}
</style>