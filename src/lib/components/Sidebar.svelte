<script>
  
  const categories = [
    { name: 'AVIUtill', path: '/blog/aviutill' },
    { name: 'BlackMagic ATEM', path: '/blog/blackmagic-atem' },
    { name: 'Davinci Resolve', path: '/blog/davinci-resolve' },
    { name: 'OBS Studio', path: '/blog/obs-studio' },
    { name: 'Android Studio', path: '/blog/android-studio' },

    { name: 'PA', path: '/blog/public-adress-system' },
    { name: 'SveltKit', path: '/blog/sveltekit' }
    
  ];

  // アルファベット順にグループ化
  let grouped = {};

  categories.forEach(cat => {
    const first = cat.name[0].toUpperCase();
    if (!grouped[first]) grouped[first] = [];
    grouped[first].push(cat);
  });

  // アルファベット順にソート
  const letters = Object.keys(grouped).sort();
</script>

<aside>
  <a href="/categories" class="Categories">Categories</a>

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
  width: 240px;
  padding: 1rem;
  background: #e0e0e0; /* 少し落ち着かせた灰色 */
 height: calc(100vh - 72px); /* ヘッダー高さ分を引く */

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* タイトル */
.Categories {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #222;          /* 落ち着いた濃い色 */
  margin-bottom: 2rem;
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
  color: #444;              /* 少し淡い文字色 */
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s, background-color 0.2s;
  border-right: 0.25rem solid transparent; /* 現在ページ用 */
}

/* ホバー時 */
ul li a:hover {
  color: #ff8800;           /* 強調色 */
}

/* 下線アニメーション */
ul li a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ff8800;
  transition: width 0.3s;
}

ul li a:hover::after {
  width: 100%;
}

/* 現在ページ */
ul li a.active {
  color: #d67c00;            /* 落ち着いたオレンジ */
  border-right: 0.25rem solid #d67c00;
}
</style>