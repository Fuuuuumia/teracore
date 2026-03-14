<script lang="ts">
  import ArticleList from '$lib/components/ArticleList.svelte';
</script>

<div class="category-page">
  <h1>音声技術Ⅰ（基礎）/ 音声技術Ⅱ（理論）</h1> <!--カテゴリ名を表示-->
  <ArticleList categoryId="03-AudioRefine" /> <!--カテゴリIDで記事の絞り込み-->
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
