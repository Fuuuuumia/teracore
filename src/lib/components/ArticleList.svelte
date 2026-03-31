<script lang="ts">
  import { getArticlesByCategory, getWriterById, writers } from '$lib/data';
  import { resolve } from '$app/paths';
  
  let {categoryId} = $props();

  const ITEMS_PER_PAGE = 20;
  
  let currentPage = $state(1);
  let filterath = $state('');
  let sortOrder = $state('desc'); // 'desc' | 'asc'
  let selectedTags = $state<string[]>([]);

  let allArticles = $derived(getArticlesByCategory(categoryId));

  let availableTags = $derived([
    ...new Set(allArticles.flatMap(a => a.tags ?? []))
  ].sort());

  let filteredArticles = $derived(allArticles.filter(article => {
    if (filterath && article.ath !== filterath) return false;
    if (selectedTags.length > 0) {
      const articleTags = article.tags ?? [];
      const hasAllSelectedTags = selectedTags.every(tag => articleTags.includes(tag));
      if (!hasAllSelectedTags) return false;
    }
    return true;
  }));

  let sortedArticles = $derived([...filteredArticles].sort((a, b) => {
    let comparison = a.date.localeCompare(b.date);
    if(comparison === 0) comparison = a.index - b.index;
    return sortOrder === 'desc' ? -comparison : comparison;
  }));

  let totalPages = $derived(Math.ceil(sortedArticles.length / ITEMS_PER_PAGE));
  let paginatedArticles = $derived(sortedArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ));

  // $: if (currentPage > totalPages && totalPages > 0) {
  //   currentPage = totalPages;
  // }

  const resetFilters = () => {
    currentPage = 1;
    filterath = '';
    sortOrder = 'desc';
    selectedTags = [];
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const getStartItem = () => {
    return sortedArticles.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  };

  const getEndItem = () => {
    return Math.min(currentPage * ITEMS_PER_PAGE, sortedArticles.length);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
    currentPage = 1; // フィルタ変更時は1ページ目に戻す
  };
</script>

{#if allArticles.length === 0}
  <p class="no-articles">このカテゴリに記事はまだありません</p>
{:else}
  <div class="filter-section">
    <div class="filter-row">
      <button class="reset-btn" onclick={resetFilters}>リセット</button>
      <div class="filter-input">
        <label for="ath-filter">著者</label>
        <select id="ath-filter" bind:value={filterath}>
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
    </div>
    <div class="filter-row">
      <div class="filter-input">
        <p class="label">タグ選択</p>
        {#if availableTags.length === 0}
          <p class="label" style="font-weight: 500; color: #666;">このカテゴリにはタグがありません</p>
        {:else}
          <div class="tags-outer">
            {#each availableTags as tag}
              <button 
                class:active={selectedTags.includes(tag)}
                onclick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>

  
  {#if paginatedArticles.length > 0}
    <div class="results-header">
      全{sortedArticles.length}件中 {getStartItem()}–{getEndItem()}件を表示
    </div>

    
    <div class="articles-grid">
      {#each paginatedArticles as article (article.id)}
        <a href={resolve(article.path as any)} class="article-card-link">
          <div class="article-card">
            <div class="card-base">
              <div class="thum">
                {#if article.thum}
                  <img src={resolve(article.thum as any)} alt={article.title} />
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
                  {article.title}
                </h3>
                <div class="meta">
                  {#each article.tags as tag}
                    <span class="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M 4 5 h 8 L 22 15 L 14 23 L 4 13 Z"/>
                        <circle fill="currentColor" cx="9" cy="10" r="1"/>
                      </svg>
                      {tag}
                    </span>
                  {/each}
                  {#if getWriterById(article.ath)}
                    <span class="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {getWriterById(article.ath)?.name}
                    </span>
                  {/if}
                  <span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {formatDate(article.date)}
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
          onclick={() => {currentPage--;}}
        >
          ← 前へ
        </button>

        <div class="page-indicator">
          {currentPage} / {totalPages}
        </div>

        <button 
          class="nav-btn"
          disabled={currentPage === totalPages}
          onclick={() => {currentPage++;}}
        >
          次へ →
        </button>
      </div>
    {/if}
  {:else}
    <p class="no-articles">フィルタ条件に一致する記事がありません</p>
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
    padding: 0.5rem 1rem;
    background-color: white;
    border-radius: 12px;
  }

  .filter-input {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .filter-input label,
  .filter-input .label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .tags-outer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .filter-input select,
  .filter-input button {
    padding: 0.6rem 0.8rem;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    font-size: 0.875rem;
    font-family: inherit;
    background-color: white;
    transition: border-color 0.2s;
  }

  .filter-input select:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.1);
  }
  .filter-input button.active{
    background: #f0f2f5;
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

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .article-card-link {
    text-decoration: none;
  }

  .article-card {
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

  .article-card-link:hover .article-card {
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

  .thum {
    flex: 0 0 180px;
    background-color: #f0f2f5;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thum img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thum .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thum svg {
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

  .meta-item{
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.7rem;
    color: #666;
  }

  .meta-item svg{
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
    min-height: 44px;
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

  .no-articles {
    text-align: center;
    color: #999;
    padding: 2rem;
    font-style: italic;
  }

  @media (max-width: 1024px) {
    .articles-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .filter-row {
      flex-direction: column;
      padding: 0.75rem;
    }

    .filter-input {
      width: 100%;
    }

    .filter-input label,
    .filter-input .label {
      font-size: 0.7rem;
    }

    .filter-input select,
    .filter-input button  {
      padding: 0.7rem 0.8rem;
      min-height: 44px;
      font-size: 1rem;
    }

    .reset-btn {
      width: 100%;
      min-height: 44px;
      padding: 0.8rem;
    }

    .articles-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .article-card {
      height: auto;
      flex-direction: column;
    }

    .thum {
      flex: 0 0 160px;
      min-height: 160px;
    }

    .card-info {
      padding: 0.75rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .title {
      font-size: 0.95rem;
      line-height: 1.3;
      margin-bottom: 0.5rem;
    }

    .meta {
      gap: 0.4rem;
    }

    .meta-item {
      font-size: 0.75rem;
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
      padding: 1rem;
    }

    .page-indicator {
      width: 100%;
    }

    .nav-btn {
      width: 100%;
      padding: 0.8rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .results-header {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    .article-card {
      height: auto;
    }

    .thum {
      flex: 0 0 120px;
      min-height: 120px;
    }

    .card-info {
      padding: 0.5rem;
    }

    .title {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }

    .meta-item {
      font-size: 0.7rem;
    }

    .filter-input select,
    .filter-input button  {
      font-size: 16px;
    }

    .pagination {
      gap: 0.3rem;
    }

    .page-indicator {
      font-size: 0.8rem;
    }
  }
</style>
