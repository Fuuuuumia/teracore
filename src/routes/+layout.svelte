<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import "./reset.css";

  let {children} = $props();
  let sidebarOpen = $state(false);
</script>

<Header />

<div class="container">
  <Sidebar bind:sidebarOpen={sidebarOpen} />
  <main class="{sidebarOpen? "sidebar-open": "sidebar-closed"}">    
    {@render children()}
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
  transition: margin-left 0.3s ease;
  }

  /* 開いている時 */
  main.sidebar-open {
    margin-left: 200px;
  }

  /* 閉じている時 */
  main.sidebar-closed {
    margin-left: 60px;
  }

  main.sidebar-open {
    margin-left: 200px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      main,
      main.sidebar-open,
      main.sidebar-closed {
        margin-left: 0 !important;
      }
    }
  }

  @media (max-width: 480px) {
    main {
      padding: 0 0.5rem;
    }
  }
</style>

