<script lang="ts">
  import ArticleList from '$lib/components/ArticleList.svelte';
  import { getCategoryById } from '$lib/data';

  const CAT = "01-pasystem_f"; //カテゴリIDを入力
  const CAT_RECORD = getCategoryById(CAT);
</script>

<div class="category-page">
  <h1>{CAT_RECORD?.name}</h1> 
  <ArticleList categoryId="{CAT}" /> 
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
