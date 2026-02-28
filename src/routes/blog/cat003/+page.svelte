<script>
  import PostList from '$lib/components/PostList.svelte';
</script>

<div class="category-page">
  <h1>Sample Category3</h1>
  <PostList categoryId="cat003" />
</div>

<style>
  .category-page {
    padding: 2rem;
  }

  .category-page h1 {
    margin-bottom: 2rem;
    color: #003160;
  }
</style>
