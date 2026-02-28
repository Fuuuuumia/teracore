<script>
  import { getPostsByCategory, getWriterById, writers } from '$lib/data';
  import { resolve } from '$lib/utils/paths';

  export let categoryId;

  const ITEMS_PER_PAGE = 20;
  
  let currentPage = 1;
  let filterAuthor = '';
  let sortOrder = 'desc'; // 'desc' | 'asc'

  $: allPosts = getPostsByCategory(categoryId);
  
  $: filteredPosts = allPosts.filter(post => {
    if (filterAuthor && post.author !== filterAuthor) return false;
    return true;
  });

  $: sortedPosts = [...filteredPosts].sort((a, b) => {
    const comparison = a.date.localeCompare(b.date);
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  $: totalPages = Math.ceil(sortedPosts.length / ITEMS_PER_PAGE);
  $: paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  $: if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const resetFilters = () => {
    currentPage = 1;
    filterAuthor = '';
    sortOrder = 'desc';
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const getStartItem = () => {
    return sortedPosts.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  };

  const getEndItem = () => {
    return Math.min(currentPage * ITEMS_PER_PAGE, sortedPosts.length);
  };
</script>

{#if allPosts.length === 0}
  <p class="no-posts">このカテゴリに記事はまだありません</p>
{:else}
  <div class="filter-section">
    <div class="filter-row">
      <div class="filter-input">
        <label for="author-filter">著者</label>
        <select id="author-filter" bind:value={filterAuthor}>
          <option value="">すべて</option>
          {#each writers as writer}
            <option value={writer.id}>{writer.name}</option>
          {/each}
        </select>
      </div>

      <div class="filter-input">
        <label for="sort-order">並び順</label>
        <select id="sort-order" bind:value={sortOrder}>
          <option value="desc">新しい順</option>
          <option value="asc">古い順</option>
        </select>
      </div>

      <button class="reset-btn" on:click={resetFilters}>リセット</button>
    </div>
  </div>

  
  {#if paginatedPosts.length > 0}
    <div class="results-header">
      全{sortedPosts.length}件中 {getStartItem()}–{getEndItem()}件を表示
    </div>

    
    <div class="posts-grid">
      {#each paginatedPosts as post (post.id)}
        <a href={resolve(post.path)} class="post-card-link">
          <div class="post-card">
            <div class="card-base">
              <div class="thumbnail">
                {#if post.thumbnail}
                  <img src={resolve(post.thumbnail)} alt={post.title} />
                {:else}
                  <div class="placeholder">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" fill="#e0e0e0"/>
                      <path d="M 35 35 L 65 20 L 65 65 L 35 65 Z" stroke="#999" stroke-width="2" fill="none"/>
                      <circle cx="55" cy="35" r="5" fill="#999"/>
                    </svg>
                  </div>
                {/if}
              </div>

              <div class="card-info">
                <h3 class="title">
                  {post.title}
                </h3>
                <div class="meta">
                  {#if getWriterById(post.author)}
                    <span class="author">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {getWriterById(post.author).name}
                    </span>
                  {/if}
                  <span class="date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    
    {#if totalPages > 1}
      <div class="pagination">
        <button 
          class="nav-btn"
          disabled={currentPage === 1}
          on:click={() => currentPage = currentPage - 1}
        >
          ← 前へ
        </button>

        <div class="page-indicator">
          {currentPage} / {totalPages}
        </div>

        <button 
          class="nav-btn"
          disabled={currentPage === totalPages}
          on:click={() => currentPage = currentPage + 1}
        >
          次へ →
        </button>
      </div>
    {/if}
  {:else}
    <p class="no-posts">フィルタ条件に一致する記事がありません</p>
  {/if}
{/if}

<style>
  .filter-section {
    margin-bottom: 2rem;
  }

  .filter-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 1rem;
    background-color: white;
    border-radius: 12px;
  }

  .filter-input {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .filter-input label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .filter-input select,
  .filter-input input {
    padding: 0.6rem 0.8rem;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    font-size: 0.875rem;
    font-family: inherit;
    background-color: white;
    transition: border-color 0.2s;
  }

  .filter-input select:focus,
  .filter-input input:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.1);
  }

  .reset-btn {
    padding: 0.6rem 1.2rem;
    background-color: white;
    color: #333;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .reset-btn:hover {
    background-color: #f9f9f9;
    border-color: #999;
  }

  .results-header {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .post-card-link {
    text-decoration: none;
  }

  .post-card {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-left: 4px solid #003160;
    transition: all 0.3s ease;
    display: flex;
    height: 160px;
    cursor: pointer;
  }

  .post-card-link:hover .post-card {
    border-left-color: #ff9900;
    box-shadow: 0 8px 16px rgba(255, 153, 0, 0.2);
  }

  .card-base {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .thumbnail {
    flex: 0 0 180px;
    background-color: #f0f2f5;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thumbnail svg {
    width: 50%;
    height: 50%;
    opacity: 0.3;
  }

  .card-info {
    flex: 1;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .date,
  .author {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.7rem;
    color: #666;
  }

  .date svg,
  .author svg {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }

  .title {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    line-height: 1.3;
    color: #003160;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 12px;
  }

  .nav-btn {
    padding: 0.7rem 1.2rem;
    background-color: white;
    color: #003160;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .nav-btn:hover:not(:disabled) {
    background-color: #003160;
    color: white;
    border-color: #003160;
  }

  .nav-btn:disabled {
    color: #ccc;
    border-color: #e5e7eb;
    cursor: not-allowed;
  }

  .page-indicator {
    font-weight: 600;
    color: #003160;
    min-width: 100px;
    text-align: center;
    font-size: 0.875rem;
  }

  .no-posts {
    text-align: center;
    color: #999;
    padding: 2rem;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .posts-grid {
      grid-template-columns: 1fr;
    }

    .post-card {
      height: auto;
      flex-direction: column;
    }

    .thumbnail {
      flex: 0 0 160px !important;
    }

    .filter-row {
      flex-direction: column;
    }

    .filter-input {
      width: 100%;
    }

    .reset-btn {
      width: 100%;
    }

    .pagination {
      flex-direction: column;
      gap: 0.5rem;
    }

    .page-indicator {
      width: 100%;
    }

    .nav-btn {
      width: 100%;
    }
  }
</style>
