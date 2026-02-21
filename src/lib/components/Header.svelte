<script>
</script>

<header>
  <a href="/" class="teraCore">teraCore</a>
  <nav>
    <a href="/">Home</a>
    <a href="/New Log">New log</a>
    <a href="/about">About Us</a>
    <a href="/contact">お問い合わせ・リクエスト</a>
  </nav>
</header>

<style>
/* ヘッダー全体 */
header {
  position: relative; /* タイトル絶対配置用 */
  display: flex;
  justify-content: center; /* navを中央に配置 */
  align-items: center;     /* 縦中央 */
  padding: 1.5rem;
  width: 100%;
  background: #222;
  box-sizing: border-box;
 
}

/* タイトル左端 */
.teraCore {
  position: absolute;      /* 左端に固定 */
  left: 2rem;              /* 左余白 */
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* ナビ中央 */
nav {
  display: flex;
  gap: 2rem;
}

/* リンク共通 */
nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s;
}

/* ホバー */
nav a:hover {
  color: #ffcc00;
}

/* 現在ページ / クリック */
nav a:active,
nav a.active {
  color: #ff8800;
}

/* 下線アニメーション */
nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffcc00;
  transition: width 0.3s;
}

nav a:hover::after {
  width: 100%;
}
</style>