<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import { getArticleByPathname, getCategoryById } from "$lib/data";
  
  let {cat = false, chapter = false, date = false, title = true}: {cat?: boolean, chapter?: boolean, date?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
</script>



<div class = "meta">
  {#if cat || chapter || date}
    <p>
      {#if cat || chapter}
        <a href={resolve('/categories')}>
          Categories 
        </a>
        》
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

      {#if date}
        {#if cat || chapter}
           <br>
        {/if}
        Post: {article?.date}
      {/if}
    </p>
  {/if}

  {#if title}
    <h1>{article?.title}</h1>
  {/if}
</div>

<style>

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
  margin-right: 0.5rem;
}

</style>