<script>
  import { categories, getPostsByCategory } from '$lib/data';
  import { resolve } from '$lib/utils/paths';

  $: categoryStats = categories.map(cat => ({
    ...cat,
    postCount: getPostsByCategory(cat.id).length,
  }));

  const getTotalCount = () => categoryStats.length;
  const getStartItem = () => categoryStats.length === 0 ? 0 : 1;
  const getEndItem = () => categoryStats.length;
</script>

<div class="categories-container">
  <h1>Categories</h1>

  {#if categoryStats.length > 0}
    <div class="results-header">
      全{getTotalCount()}件中 {getStartItem()}–{getEndItem()}件を表示
    </div>
  {/if}

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
    padding: 2rem;
  }

  h1 {
    display: block;
    font-size: 2em;
    color: #003160;
    font-weight: bold;
    unicode-bidi: isolate;
    margin-bottom: 0.5rem;
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .category-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: #003160;
    text-decoration: none;
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid #e5e7eb;
    border-left: 4px solid #003160;
    height: 160px;
    cursor: pointer;
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

  .results-header {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  @media (max-width: 768px) {
    .categories-container {
      padding: 1.5rem 1rem;
    }

    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    .categories-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .category-card {
      height: 120px;
      padding: 1.5rem;
    }

    .category-card h2 {
      font-size: 1.25rem;
    }

    .post-count {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .categories-container {
      padding: 1rem 0.75rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .category-card {
      height: 100px;
      padding: 1rem;
    }

    .category-card h2 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .post-count {
      font-size: 0.85rem;
    }

    .results-header {
      font-size: 0.8rem;
    }
  }
</style>
