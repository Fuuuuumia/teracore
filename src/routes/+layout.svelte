<script>
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { sidebarOpen } from '$lib/stores/sidebar';
  import "./reset.css";
</script>

<Header />

<div class="container">
  <Sidebar />
  <main class:sidebar-open={$sidebarOpen}>
    <slot />
  </main>
</div>

<style>
  .container {
    display: flex;
  }
  
  main {
    flex: 1;
    padding: 0;
    margin-top: 60px;
    margin-left: 200px;
    transition: margin-left 0.3s ease;
  }

  main.sidebar-open {
    margin-left: 200px;
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

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    main {
      margin-left: 0;
      margin-top: 60px;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    main {
      padding: 0 0.5rem;
    }
  }
</style>