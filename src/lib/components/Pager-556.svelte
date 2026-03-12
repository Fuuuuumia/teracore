<!-- 
  +layout.svelte style例

  .simplelog :global(a){
    color: var(--main-color);
    text-decoration: none;
    transition: 0.2s ease;
    border-color: var(--main-color);
  }
  .simplelog :global(a:not(.pager a)) {
    background: var(--bg-color);
    padding: 0 2px;
    border-bottom: 1px solid var(--main-color);
  }
  .simplelog :global(a:hover) {
    background: var(--main-color);
    color: var(--th-color);
  }
  .simplelog :global(a:not(.pager a):hover) {
    border-radius: 0.25rem;
  }

  TOCを使う場合は :not(.toc a) も追加

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