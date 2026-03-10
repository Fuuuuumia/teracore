<script lang="ts">
  import Pager from '$lib/components/Pager-556.svelte';
    import Title from '../Title.svelte';
  let {children} = $props();
</script>

<main class = "simplelog">
  <div class="bg"></div>
  <div class="content">
    <Title/>
    {@render children()}
  <hr>
  <Pager/>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Zen+Maru+Gothic:wght@500;700&display=swap');

  :root{
    --bg-color: #fdfdfd;
    --main-color: #003160;
    --sub-color: #e6edf5;
    --p-color: #111;
    --th-color: #fff;

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

  /*Pager-556用*/
  .simplelog:global(.pager .inner){
    background: var(--bg-color) !important;
    border-color: var(--p-color);
  }


  .simplelog{
    overflow: hidden;
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 3rem;
  }
  .bg{
    width: 100%;
    height: 100vh;
    position: fixed;
    background: var(--bg-color);
    z-index: -1;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 36px 1rem;
    line-height: 1.75;
    color: var(--p-color);
  }

  ::selection {
  background-color: #c7c7c7;
  }

  .simplelog :global(h1) {
    color: var(--main-color);
    font-size: var(--font-size-h1);
    margin: 1rem 0 3rem;
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
  }
  .simplelog :global(p){
    font-size: var(--font-size-p);
    margin: 1rem 0;
  }
  
  .simplelog :global(hr) {
    height: 2px;
    margin: 3rem 0;
    background: var(--sub-color);
    border: none;
  }
  
  .simplelog :global(strong) {
    color: var(--main-color);
    font-weight: 700;
  }
  
  /*.simplelog :global(em) {
    }*/
    
  .simplelog :global(ul),.simplelog :global(ol){
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
  
  .simplelog :global(a){
      color: var(--main-color);
      text-decoration: none;
      transition: 0.2s ease;
      border-color: var(--main-color);
  }
  .simplelog :global(a:not(.pager a)) {
    padding: 0 2px;
    border-bottom: 1px solid var(--main-color);
    border-radius: 0.25rem;
  }
  .simplelog :global(a:hover) {
    background: var(--main-color);
    color: var(--th-color);
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
    line-height: 1.25 !important;
  }
  .simplelog :global(pre code) {
    background: transparent;
    padding: 0;
  }

  .simplelog :global(blockquote) {
    padding: 0.5rem 1.5rem;
    margin: 2rem 0;
    color: color-mix(in srgb, currentColor 80%, var(--bg-color));
    overflow: hidden;
    background-color: color-mix(in srgb, var(--main-color) 20%, var(--bg-color));
    border-left: 2px solid var(--main-color);
  }

  .simplelog :global(img) {
    display: block;
    object-fit: contain;
    width: auto;
    height: auto;
    max-width: clamp(0px, 100%, 500px);
    max-height: calc(0px, 100%, 500px);
    margin: 2.5rem auto;
    border-radius: 12px;
    box-shadow: 0 0 1rem color-mix(in srgb, var(--main-color) 40%, transparent);
  }

  .simplelog :global(table) {
    width: calc(100% - 1rem);
    display: table;
    border-collapse: collapse;
    white-space: nowrap;
    margin: 1.5rem 0.5rem;
  }

  .simplelog :global(th) {
    background: var(--main-color);
    padding: 0.8rem;
    color: var(--th-color);
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
    border: 1px solid var(--sub-color);
  }
  .simplelog :global(td:first-child) {
   border-left: none !important;
  }
  .simplelog :global(td:last-child) {
   border-right: none !important;
  }
</style>