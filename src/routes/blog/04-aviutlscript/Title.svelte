<script lang="ts">
    import { page } from "$app/state";
    import { getArticleByPathname, getCategoryById } from "$lib/data";

    let article = $derived(getArticleByPathname(page.url.pathname));
	 let category = $derived(getCategoryById(<string>article?.cat));
</script>

<h3><a href="./">{category?.name}</a></h3>
<h1>{article?.title}</h1>