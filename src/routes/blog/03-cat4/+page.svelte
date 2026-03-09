<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
</script>

<div class="category-page">
  <h1>音声技術学Ⅱ（理論）</h1> <!--カテゴリ名を表示-->
  <PostList categoryId="03-cat4" /> <!--カテゴリIDで記事の絞り込み-->
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
