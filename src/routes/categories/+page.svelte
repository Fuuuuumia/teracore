<script>
  import { categories, getPostsByCategory } from '$lib/data';
  import { resolve } from '$lib/utils/paths';

  $: categoryStats = categories.map(cat => ({
    ...cat,
    postCount: getPostsByCategory(cat.id).length,
  }));
</script>

<div class="categories-container">
  <h1>Categories</h1>
  <p class="subtitle">Browse articles by category</p>

  <div class="categories-grid">
    {#each categoryStats as category}
      <a href={resolve(category.path)} class="category-card">
        <div class="card-content">
          <h2>{category.name}</h2>
          <p class="post-count">{category.postCount} articles</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .categories-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #003160;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .category-card {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    background: white;
    color: #003160;
    text-decoration: none;
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s ease;
    border-left: 4px solid #003160;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .category-card:hover {
    box-shadow: 0 8px 16px rgba(255, 153, 0, 0.2);
    border-left-color: #ff9900;
  }

  .card-content {
    text-align: center;
  }

  .category-card h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .post-count {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .categories-grid {
      grid-template-columns: 1fr;
    }

    .category-card {
      min-height: 80px;
    }
  }
</style>
