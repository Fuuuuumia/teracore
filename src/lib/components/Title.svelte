<script lang="ts">
  import { page } from "$app/state";
  import { getArticleByPathname, getCategoryById } from "$lib/data";
  
  let { cat = false, chapter = false, date = false, title = true}: { cat?: boolean, chapter?: boolean, date?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
</script>



<div class = "meta">
{#if cat || chapter}
    <h3>
      {#if cat}{category?.name}{/if}
      {#if chapter}{article?.chapter}{/if}
    </h3>
  {/if}

  {#if date}
    <p>Post:{article?.date}</p>
  {/if}

  {#if title}
    <h1>{article?.title}</h1>
  {/if}
</div>

<style>
.meta h3 {
  margin: 0;
}

.meta h1 {
  margin-top: 0.5rem;
}

.meta p {
  color: gray;
  font-size: 0.9rem;
  margin: 0;
}

</style>