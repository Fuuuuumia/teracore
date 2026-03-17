<!-- 
  +layout.svelte style例

  .simplelog :global(a){
    color: <強調色>;
    text-decoration: none;
    transition: 0.2s ease;
    border-color: <強調色>;
  }
  .simplelog :global(a:not(.pager a)) {
    border-bottom: 1px solid <強調色>;
  }
  .simplelog :global(.pager a) {
    background: <背景色>;
  }
  .simplelog :global(a:not(.pager a)) {
    padding: 0 2px;
  }
  .simplelog :global(a:hover) {
    background: <強調色>;
    color: <強調色中の文字色>;
  }
  .simplelog :global(a:not(.pager a):hover) {
    border-radius: 0.25rem;
  }

-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { getArticleByPathname, getArticlesByCategory } from "$lib/data";

  let { offset = [-1, 1]}: { offset?: number[]} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let articles = $derived([...getArticlesByCategory(article?.cat ?? "")].sort((a, b) => a.index - b.index));
  let atcIndex = $derived(article ? articles.indexOf(article) : -1);
  let targetList = $derived(offset.map(i => atcIndex + i).filter(item => item >= 0 && item < articles.length));
</script>

{#if atcIndex !== -1}<div class="pager" style="--cols: {targetList.length};">
  {#each targetList as i}
    {#if i >= 0 && i < articles.length}
      <a href="{resolve(articles[i].path as any)}">
        <p style="font-size:0.8em">{(i < 0 ? "前" : "次") + "の記事へ"}</p>
        <p style="font-size:1rem; font-weight: 700;">{articles[i].title as any}</p>
      </a>
    {/if}
  {/each}
</div>{/if}

<style>

  .pager {
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(var(--cols, 2), 1fr);
    justify-content: center;
    gap: 1rem 3rem;
  }
  @media (max-width: 500px){
    .pager {
      grid-template-columns: 1fr;
    }
  }
  .pager a{
    padding: 0.8rem 1rem;
    border: solid 2px;
    border-radius: 0.5rem;
    font-weight: 700;
  }
  .pager p {
    margin: 0 0.5rem !important;
  }

</style>