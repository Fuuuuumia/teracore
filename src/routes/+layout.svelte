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
    padding: 2rem;
  }
</style>