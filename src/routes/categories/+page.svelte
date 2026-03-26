<script lang="ts">
  import { categories, getArticlesByCategory } from '$lib/data';
  import { resolve } from '$app/paths';

  let categoryStats = categories.map(cat => ({
    ...cat,
    postCount: getArticlesByCategory(cat.id).length,
  }));

  const getTotalCount = () => categoryStats.length;
  const getStartItem = () => categoryStats.length === 0 ? 0 : 1;
  const getEndItem = () => categoryStats.length;
</script>

<div class="categories-container">
  <h1>Categories</h1>

  {#if categoryStats.length > 0}
    <div class="results-header">
      全{getTotalCount()}件中 {getStartItem()}-{getEndItem()}件を表示
    </div>
  {/if}

  <div class="categories-grid">
    {#each categoryStats as category}
      <a href={resolve(category.path as any)} class="category-card">
        <h2>{category.name}</h2>
        <div class="card-content">
          <div class="meta">
            <span class="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="1"/>
                  <path d="M 6 7 h 12"/>
                  <path d="M 6 12 h 12"/>
              </svg>
              {category.postCount} articles
            </span>
            {#each category.tags as tag}
              <span class="meta-item" style="font-size: 0.9rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M 4 5 h 8 L 22 15 L 14 23 L 4 13 Z"/>
                  <circle fill="currentColor" cx="9" cy="10" r="1"/>
                </svg>
                {tag}
              </span>
            {/each}
          </div>
          <div class="line"></div>
          <div class="category-detail">
            {category.detail}
          </div>
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
    flex-direction: column;
    position: relative;
    min-height: 160px;
    padding: 1rem 2rem;
    background: white;
    color: #003160;
    text-decoration: none;
    border: 1px solid #e5e7eb;
    border-left: 4px solid #003160;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .category-card:hover {
    box-shadow: 0 8px 16px rgba(255, 153, 0, 0.2);
    border-left-color: #ff9900;
    color: #ff9900;
  }

  .category-card h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .card-content{
    padding: 0 0.5rem;
    display: flex;
    height: 100%;
  }
  
  .meta{
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }

  .meta-item{
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
  }

  .line{
    width:1px;
    height: auto;
    margin: 0 1rem;
    background: #e5e7eb;
  }

  .category-detail{
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    white-space: pre-line;
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
      min-height: 120px;
      padding: 1rem 1.5rem;
    }

    .category-card h2 {
      font-size: 1.25rem;
    }

    .card-content{
      flex-direction: column;
    }

    .line{
      height: 1px;
      width: auto;
      margin:1rem 0;
      background: #e5e7eb;}

    .meta-item {
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
      min-height: 100px;
      padding: 1rem 1.5rem;
    }

    .category-card h2 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .meta-item {
      font-size: 0.85rem;
    }

    .results-header {
      font-size: 0.8rem;
    }
  }
</style>
