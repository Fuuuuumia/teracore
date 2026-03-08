<script lang="ts">
    import { page } from "$app/state";
    import { getPostByPathname } from "$lib/data";

    let post = $derived(getPostByPathname(page.url.pathname));
</script>

<h1>{post?.title}</h1>