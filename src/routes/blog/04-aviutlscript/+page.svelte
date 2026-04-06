<script lang="ts">
  import ArticleList from '$lib/components/ArticleList.svelte';
  import { getCategoryById } from '$lib/data';

  const CAT = "04-aviutlscript"; //カテゴリIDを入力
  const CAT_RECORD = getCategoryById(CAT);
</script>

<div class="category-page">
  <h1>{CAT_RECORD?.name}</h1> 
  <p>{CAT_RECORD?.detail}</p> 
  <ArticleList categoryId="{CAT}" /> 
</div>

<style>
  .category-page {
    padding: 2rem;
  }

  .category-page h1 {
    color: #003160;
    margin: 0 0 1rem;
  }
  .category-page p {
    margin: 0 0 1rem;
  }
</style>
