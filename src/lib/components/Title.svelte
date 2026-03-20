<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import { getArticleByPathname, getCategoryById } from "$lib/data";
  
  let {cat = false, chapter = false, date = false, title = true}: {cat?: boolean, chapter?: boolean, date?: boolean, title?: boolean} = $props();

  let article = $derived(getArticleByPathname(page.url.pathname));
  let category = $derived(getCategoryById(<string>article?.cat));
</script>



<div class = "nav">
  {#if date}
    <div class = "meta">
      {#if date}
        <p>
          Post: {article?.date}
        </p>
      {/if}
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

</style>