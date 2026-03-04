<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
</script>

<div class="category-page">
  <h1>デジタルケーブル基礎</h1> <!--カテゴリ名を表示-->
  <PostList categoryId="cat2" /> <!--カテゴリIDで記事の絞り込み-->
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