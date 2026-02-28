<script>
  const starCount = 100;

  const stars = Array.from({ length: starCount }, () => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.random() * 2 + 1 + 'px',
    delay: Math.random() * 5 + 's',
  }));
</script>

<section class="hero">
  <div class="hero-content">
    <h1>teraCore</h1>
    <p>ICT関連技術の継承・向上のための技術録です。</p>
  </div>

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
  width: auto;
  height: calc(100vh - 72px);
  margin: 6px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero h1 {
  font-size: clamp(2.5rem, 15vw, 12rem);
  margin: 0;
  letter-spacing: 0.05em;
  animation: pulse 9s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 1rem;
  max-width: 90vw;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hero p {
  font-size: clamp(0.9rem, 4vw, 2rem);
  margin-top: 1rem;
  color: #ddd;
  line-height: 1.6;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-20deg); }
  50% { transform: translateY(-30px) rotate(-25deg); }
}

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

@media (max-width: 768px) {
  .hero {
    height: calc(100vh - 60px);
    margin: 0;
  }

  .hero h1 {
    font-size: clamp(2rem, 12vw, 4rem);
  }

  .hero p {
    font-size: clamp(0.85rem, 3vw, 1.2rem);
    margin-top: 0.75rem;
  }

  .hero-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: calc(100vh - 60px);
  }

  .hero h1 {
    font-size: 1.75rem;
    letter-spacing: 0.02em;
  }

  .hero p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  .hero-content {
    padding: 0.75rem;
  }

  .star {
    animation: none;
    opacity: 0.3;
  }
}
</style>