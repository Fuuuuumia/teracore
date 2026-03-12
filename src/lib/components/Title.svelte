<script lang="ts">
  import { page } from "$app/state";
  import { getArticleByPathname, getCategoryById } from "$lib/data";
  
  let { cat = false, title = true}: { cat?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
</script>

{#if cat}
<h3>{category?.name}</h3>
{/if}
{#if title}
<h1>{article?.title}</h1>
{/if}