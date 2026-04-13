<script lang="ts">
  import Pager from '$lib/components/Pager.svelte';
  import Title from '$lib/components/Title.svelte';

  let {children} = $props();
</script>

<main class = "simplelog">
  <div class="content">
    <Title cat={true} />
    {@render children()}
    <Pager/>
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

  .simplelog :global(th[align="center"]) {
    text-align: center;
  }

  .simplelog :global(th[align="right"]) {
    text-align: right;
  }
  
  .simplelog :global(th[align="left"]) {
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
    font-weight: 500;
    position: relative;
    padding: 0.25rem 0;
    border-bottom: #003160 dashed 1px;
    transition: color 0.2s, border-bottom-color 0.2s;
  }

  .simplelog :global(a:hover) {
    color: #ff9900;
    border-bottom-color: #ff9900;
  }

  @media (max-width: 768px) {

    .content {
      max-width: 95%;
      padding: 2.5rem 1.5rem;
      font-size: 1rem;
    }

    .simplelog :global(h1) {
      font-size: 2.1rem;
    }

    .simplelog :global(h2) {
      font-size: 1.6rem;
    }

    .simplelog :global(img) {
      max-width: 80%;
    }

    .simplelog :global(pre) {
      font-size: 0.85rem;
    }

    .simplelog :global(table) {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

  }

  @media (max-width: 480px) {

    .content {
      max-width: 100%;
      padding: 0.5rem 1.2rem;
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .simplelog :global(h1) {
      font-size: 1.8rem;
      margin-top: 2rem;
    }

    .simplelog :global(h2) {
      font-size: 1.4rem;
    }

    .simplelog :global(h3) {
      font-size: 1.15rem;
    }

    .simplelog :global(img) {
      max-width: 100%;
    }

    .simplelog :global(pre) {
      font-size: 0.8rem;
      padding: 0.9rem;
    }

    .simplelog :global(th),
    .simplelog :global(td) {
      font-size: 0.85rem;
      padding: 0.6rem;
    }

    .simplelog :global(blockquote) {
      padding: 0.8rem 1rem;
    }
  }
</style>