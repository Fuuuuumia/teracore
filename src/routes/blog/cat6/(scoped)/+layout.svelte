<script lang="ts">
  let {children} = $props();
</script>

<main class = "simplelog">
  <div class="content">
    {@render children()}
  </div>
</main>

<style>

  :root{
    --accent-color: #003160;
    --font-size-h1: 28em;
    --font-size-h2: 24em;
    --font-size-h3: 20em;
    --font-size-p: 16em;
  }
  @media (max-width: 500px){
    :root{
    --font-size-h1:24em;
    --font-size-h2: 20em;
    --font-size-h3:18em;
    }
}

.simplelog{
  background: #fdfdfd;
  overflow: hidden;
  padding-top: 1rem;
}
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
    font-size: calc(1rem/16);
    line-height: 1.5;
  }

  .simplelog :global(h1) {
    color: var(--accent-color);
    font-size: var(--font-size-h1);
    margin: 1rem 0 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--accent-color);
  }

  .simplelog :global(h2) {
    color: var(--accent-color);
    font-size: var(--font-size-h2);
    margin: 3rem 0 0;
    padding-left: 0.75rem;
    border-left: 5px solid var(--accent-color);
  }

  .simplelog :global(h3) {
    font-size: var(--font-size-h3);
    margin: 2rem 0 0;
    color: #222;
  }

  .simplelog :global(p){
    font-size: var(--font-size-p);
    margin: 1.5rem 0;
  }

  .simplelog :global(ul),
  .simplelog :global(ol) {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  .simplelog :global(li) {
    margin: 0.6rem 0;
  }

  .simplelog :global(li::marker) {
    color: var(--accent-color);
    font-weight: bold;
  }


.simplelog :global(hr) {
  border: none;
  height: 3px;
  background: #e5e7eb;
  margin: 4rem 0;
}


  .simplelog :global(pre) {
    background: #0f172a;
    color: #e2e8f0;
    padding: 1.2rem;
    border-radius: 10px;
    overflow-x: auto;
    margin: 2rem 0;
    font-size: 0.9rem;
  }

  .simplelog :global(code) {
    background: #e6edf5;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  .simplelog :global(pre code) {
    background: transparent;
    padding: 0;
  }


  .simplelog :global(blockquote) {
    border-left: 4px solid var(--accent-color);
    background: #f4f8fc;
    padding: 1rem 1.2rem;
    margin: 2rem 0;
    color: #333;
  }


  .simplelog :global(img) {
    max-width: 60%;
    border-radius: 12px;
    margin: 2.5rem auto;
    display: block;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }


  .simplelog :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
  }

  .simplelog :global(th) {
    background: var(--accent-color);
    color: white;
    padding: 0.8rem;
    text-align: left;
  }

  .simplelog :global(td) {
    padding: 0.8rem;
    border-bottom: 1px solid #ddd;
  }

  .simplelog :global(tr:hover) {
    background: #f2f6fa;
  }


  .simplelog :global(strong) {
    color: var(--accent-color);
    font-weight: 700;
  }

  .simplelog :global(em) {
    color: #555;
  }


  .simplelog :global(a) {
    color: var(--accent-color);
    text-decoration: none;
    border-bottom: 1px solid var(--accent-color);
    transition: 0.2s ease;
  }

  .simplelog :global(a:hover) {
    background: var(--accent-color);
    color: white;
    padding: 0 4px;
  }
</style>