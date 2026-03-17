<script lang="ts">
  import { page } from "$app/state";
  import { getArticleByPathname, getCategoryById } from "$lib/data";
  
  let { cat = false, chapter = false, date = false, title = true}: { cat?: boolean, chapter?: boolean, date?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
</script>



<div class = "meta">
{#if cat || date}
    <p>
      {#if cat}
        <a href="./">
          {category?.name}
        </a>
       {/if}
      {#if date}
        《      {article?.date}
      {/if}
    </p>
  {/if}

  {#if chapter}
    <h3>{article?.chapter}</h3>
  {/if}


  {#if title}
    <h1>{article?.title}</h1>
  {/if}
</div>

<style>
div.meta h3 {
  margin: 0;
  font-size: 1.2rem;
}

div.meta h1 {
  margin-top: 0rem;
}

div.meta p {
  color: gray;
  font-size: 0.9rem;
  margin: 0;
}
div.meta a {
  color: gray;
  font-size: 0.9rem;
  margin: 0;
  border-bottom: 0;
}

</style>