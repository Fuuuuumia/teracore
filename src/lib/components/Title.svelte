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
      {#if date}
        {article?.date} 》
      {/if}
      {#if cat}
        <a href="./">
          {category?.name} 
        </a>
      {/if}
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
  color: #000;
  font-size: 0.9rem;
  margin: 0;
  margin-right: 0.5rem;
}

</style>