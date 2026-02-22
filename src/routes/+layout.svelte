<script>
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<Header />

<div class="container">
  <Sidebar />
  <main>
    <slot />
  </main>
</div>

<style>
  .container {
    display: flex;
  }
  main {
    flex: 1;
    padding:0;
    margin-top: 60px;   /* ヘッダー分 */
    margin-left: 200px; /* サイドバー分 */
  }

  html, body {
  margin: 0;
  padding: 0;
   width: 100%;
  height: 100%;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>