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
    --bg-color: #fdfdfd;
    --main-color: #003160;
    --sub-color: #e6edf5;
    --pre-bg-color: #262626;
    --pre-code-color: #fdfdfd;
    --font-size-h1: calc(28rem / 16);
    --font-size-h2: calc(24rem / 16);
    --font-size-h3: calc(20rem / 16);
    --font-size-p: calc(16rem / 16);
  }
  @media (max-width: 500px){
    :root{
    --font-size-h1: calc(24rem / 16);
    --font-size-h2: calc(20rem / 16);
    --font-size-h3: calc(18rem / 16);
    }
  }

  .simplelog{
    background: var(--bg-color);
    overflow: hidden;
    padding-top: 1rem;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
    line-height: 1.5;
  }

  .simplelog :global(h1) {
    color: var(--main-color);
    font-size: var(--font-size-h1);
    margin: 1rem 0 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--main-color);
  }
  .simplelog :global(h2) {
    color: var(--main-color);
    font-size: var(--font-size-h2);
    margin: 3rem 0 0;
    padding-left: 0.75rem;
    border-left: 3px solid var(--main-color);
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
    font-size: var(--font-size-p);
    margin: 0.5rem 0;
  }
  .simplelog :global(li::marker) {
    color: var(--main-color);
    font-weight: bold;
  }

  .simplelog :global(hr) {
    height: 2px;
    margin: 3rem 0;
    background: var(--sub-color);
    border: none;
  }

  .simplelog :global(code) {
    font-size: calc(var(--font-size-p) * 0.9);
    padding: 0.2rem 0.3rem;
    background: var(--sub-color);
    border-radius: 0.25rem;
  }
  .simplelog :global(pre) {
    font-size: 0.9rem;
    background: var(--pre-bg-color);
    color: var(--pre-code-color);
    padding: 1.2rem;
    border-radius: 10px;
    margin: 2rem 0;
    overflow-x: auto;
  }
  .simplelog :global(pre code) {
    background: transparent;
    padding: 0;
  }

  .simplelog :global(blockquote) {
    padding: 0.5rem 1.5rem;
    margin: 2rem 0;
    color: color-mix(in srgb, currentColor 80%, var(--bg-color));;
    overflow: hidden;
    background-color: color-mix(in srgb, var(--main-color) 20%, var(--bg-color));
    border-left: 2px solid var(--main-color);
  }

  .simplelog :global(img) {
    max-width: calc((100vw - 48px)*0.8);
    max-height: calc((100vw - 48px)*0.8);
    width: auto;
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
    background: var(--main-color);
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
    color: var(--main-color);
    font-weight: 700;
  }

  .simplelog :global(em) {
    color: #555;
  }


  .simplelog :global(a) {
    color: var(--main-color);
    text-decoration: none;
    border-bottom: 1px solid var(--main-color);
    transition: 0.2s ease;
  }

  .simplelog :global(a:hover) {
    background: var(--main-color);
    color: white;
    padding: 0 4px;
  }
</style>