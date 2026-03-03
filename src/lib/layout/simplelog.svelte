<script lang="ts">
  let {children} = $props();
</script>

<main class="simplelog">
  {@render children()}
</main>

<style>
  .simplelog :global(h1) {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  .simplelog :global(h2) {
    font-size: 1.8rem;
    border-left: 4px solid #888;
    padding-left: 0.5rem;
  }

  .simplelog :global(hr) {
    border: none;
    height: 2px;
    background: #ddd;
    margin: 3rem 0;
  }

  .simplelog :global(li) {
    margin-left: 1.5rem;
    font-size: 1.1rem;
  }

  .simplelog :global(li::marker) {
    color: #888;
  }

  .simplelog :global(pre) {
    background: #000;
    color: #fff;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.9rem;
    margin: 1.5rem 0;
  }

  .simplelog :global(code) {
    font-family: monospace;
    margin: 0 0.25rem;
    font-size: 0.9rem;
    background: #eee;
    padding: 0.25rem;
    border-radius: 4px;
  }
</style>