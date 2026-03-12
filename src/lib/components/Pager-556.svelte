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
</script>

{#if atcIndex !== -1}<div class="pager">
  {#each offset as i}
    {@const targetIndex = atcIndex + i}
    {#if targetIndex >= 0 && targetIndex < articles.length}
      <a href="{resolve(articles[targetIndex].path as any)}">
        <p style="font-size:0.8em">{(i < 0 ? "前" : "次") + "の記事へ"}</p>
        <p style="font-size:1rem; font-weight: 700;">{articles[targetIndex].title as any}</p>
      </a>
    {/if}
  {/each}
</div>{/if}

<style>

  .pager {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .pager a{
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
    border: solid 2px;
    border-radius: 0.5rem;
    font-weight: 700;
  }
  .pager p {
    margin: 0 0.5rem !important;
  }

</style>