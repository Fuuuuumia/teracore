<script lang="ts">
  let {children} = $props();
</script>

<main class = "simplelog">
  <div class="content">
    {@render children()}
  </div>
</main>

<style>
  .content {
    max-width: 75%;
    margin: 0 auto;
    padding: 3rem 2rem;
    line-height: 1.9;
    font-size: 1.05rem;
  }


  .simplelog :global(h1) {
    font-size: 2.6rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: #003160;
    border-bottom: 3px solid #003160;
    padding-bottom: 0.5rem;
  }

  .simplelog :global(h2) {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-left: 5px solid #003160;
    padding-left: 0.75rem;
    color: #003160;
  }

  .simplelog :global(h3) {
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
    color: #222;
  }


  .simplelog :global(p) {
    margin: 1.3rem 0;
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
    color: #003160;
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
    border-left: 4px solid #003160;
    background: #f4f8fc;
    padding: 1rem 1.2rem;
    margin: 2rem 0;
    color: #333;
  }


  .simplelog :global(img) {
    max-width: 60%;
    width: auto;
    border-radius: 12px;
    margin: 2.5rem auto;
    display: block;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }


  .simplelog :global(table) {
  width: auto;
  border-collapse: collapse;
  margin: 2rem auto;
}

  .simplelog :global(th) {
    background: #003160;
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
    color: #003160;
    font-weight: 700;
  }

  .simplelog :global(em) {
    color: #555;
  }


  .simplelog :global(a) {
    color: #003160;
    text-decoration: none;
    border-bottom: 1px solid #003160;
    transition: 0.2s ease;
  }

  .simplelog :global(a:hover) {
    background: #003160;
    color: white;
    padding: 0 4px;
  }
</style>