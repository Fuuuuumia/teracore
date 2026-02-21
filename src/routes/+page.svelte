<script>
  const starCount = 100;

  // 星データを乱数で生成
  const stars = Array.from({ length: starCount }, () => ({
    top: Math.random() * 100 + '%',     // 0~100% のランダム位置
    left: Math.random() * 100 + '%',
    size: Math.random() * 2 + 1 + 'px', // 1~3px
    delay: Math.random() * 5 + 's',     // アニメーション開始時間をランダム化
  }));
</script>

<section class="hero">
  <div class="hero-content">
    <h1>teraCore</h1>
    <p>ICT関連技術の継承・向上のための技術録です。</p>
  </div>

  <!-- 浮く装飾SVG -->
  <svg class="hero-illustration" width="200" height="200" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#ff8800" opacity="0.3"/>
    <rect x="20" y="20" width="60" height="60" fill="#ffcc00" opacity="0.2"/>
  </svg>

  <!-- 背景の星 -->
  <div class="stars">
    {#each stars as star}
      <div class="star"
           style="top:{star.top}; left:{star.left}; width:{star.size}; height:{star.size}; animation-delay:{star.delay};">
      </div>
    {/each}
  </div>
</section>

<style>
.hero {
  position: relative;
  width: 100%;
 height: calc(100vh - 72px); /* ヘッダー高さ分を引く */
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero h1 {
  font-size: clamp(6rem, 20vw, 12rem); /* 元3~6rem → 約2倍 */
  margin: 0;
  letter-spacing: 0.05em;
  animation: pulse 9s ease-in-out infinite;
}

/* モバイル対応 */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 3.5rem; /* 小さい画面用に縮小 */
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hero p {
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-top: 1rem;
  color: #ddd;
}

.hero-illustration {
  position: absolute;
  bottom: 10%;
  right: 10%;
  transform: rotate(-20deg);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-20deg); }
  50% { transform: translateY(-30px) rotate(-25deg); }
}

/* 星 */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 3s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-10px); }
}

/* スマホ対応 */
@media (max-width: 600px) {
  .hero h1 { font-size: 2.5rem; }
  .hero p { font-size: 1rem; }
  .hero-illustration { width: 100px; height: 100px; bottom: 5%; right: 5%; }
}
</style>