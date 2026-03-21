<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import { getArticleByPathname, getCategoryById, getWriterById } from "$lib/data";
  
  let {meta = false, cat = false, chapter = false, title = true}: {meta?: boolean, cat?: boolean, chapter?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
  let writer = $derived(getWriterById(<string>article?.ath));

  
</script>



<div class = "nav">
  {#if meta}
    <div class = "meta">
      <p class="meta-inline">
        <span class="ath">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          {writer?.name}
        </span>

        <span class="date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {article?.date}
        </span>
      </p>
    </div>
  {/if}

  {#if cat || chapter}
    <p>
      <a href={resolve('/categories')}>
        Categories 
      </a>
      》
      <a href="./">
        {category?.name} 
      </a>

      {#if chapter}
        》
        <a href="./">
          {article?.chapter}
        </a>
      {/if}
    </p>
  {/if}

  {#if title}
    <h1>{article?.title}</h1>
  {/if}
</div>

<style>

div.nav h1 {
  margin-top: 0rem;
}

div.nav p {
  color: #000;
  font-size: 0.9rem;
  margin: 0;
  text-indent: 0;
}

div.nav a {
  color: #000;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

div.meta p {
  color: gray;
  font-size: 0.9rem;
  margin: 0;
}

.meta-inline {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.meta-inline .ath,
.meta-inline .date {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: #666;
}

.meta-inline svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

</style>