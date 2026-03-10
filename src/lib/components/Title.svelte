<script lang="ts">
    import { page } from "$app/state";
    import { getArticleByPathname } from "$lib/data";

    let post = $derived(getArticleByPathname(page.url.pathname));
</script>

<h1>{post?.title}</h1>