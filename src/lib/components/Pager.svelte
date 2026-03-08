<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import { getPostByPathname, getPostsByCategory } from "$lib/data";

    let post = $derived(getPostByPathname(page.url.pathname));
    let posts = $derived(getPostsByCategory(post?.cat ?? ""));
    let postIndex = $derived(post? posts.indexOf(post): -1);
</script>

<div class="container">
    {#if postIndex > 0}
        <p><a href="{resolve(posts[postIndex - 1].path as any)}">前へ</a></p>
    {/if}
    {#if postIndex < posts.length - 1}
        <p><a href="{resolve(posts[postIndex + 1].path as any)}">次へ</a></p>
    {/if}
</div>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>