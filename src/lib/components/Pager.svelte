<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import { getArticleByPathname, getArticlesByCategory } from "$lib/data";

    let post = $derived(getArticleByPathname(page.url.pathname));
    let posts = $derived([...getArticlesByCategory(post?.cat ?? "")].sort((a, b)=>(a.index - b.index)));
    let postIndex = $derived(post? posts.indexOf(post): -1);
</script>

<div class="container">
    {#if postIndex !== -1}
        {#if postIndex > 0}
            <p><a href="{resolve(posts[postIndex - 1].path as any)}">前へ</a></p>
        {/if}
        {#if postIndex < posts.length - 1}
            <p><a href="{resolve(posts[postIndex + 1].path as any)}">次へ</a></p>
        {/if}
    {/if}
</div>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>