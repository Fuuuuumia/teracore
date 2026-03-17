<script lang="ts">
  import { onMount } from 'svelte';
  import Pager from '$lib/components/Pager-556.svelte';
  import Title from '$lib/components/Title.svelte';

  let {children} = $props();

  onMount(() => {
    const tables = document.querySelectorAll('.simplelog .content table');
    
    tables.forEach(table => {
      if (table.parentElement?.classList.contains('table-outer')) return;

      const outer = document.createElement('div');
      outer.className = 'table-outer';
      table.parentNode?.insertBefore(outer, table);
      outer.appendChild(table);
    });
  });
</script>

<main class = "simplelog">
  <div class="bg"></div>
  <div class="content">
    <Title cat = {true}/>
    {@render children()}
  <hr>
  <Pager/>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Zen+Maru+Gothic:wght@500;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css');

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
    --font-size-p: calc(14rem / 16);
    }
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
    padding: 1rem 2rem 1rem;
    line-height: 1.75;
    color: var(--p-color);
  }

  .simplelog :global(.toc){
    background-color: var(--sub-color);
  }

  ::selection {
  background-color: color-mix(in srgb, transparent 80%, var(--main-color));
  }

  .simplelog :global(h1), .simplelog :global(h2), .simplelog :global(h3){
    scroll-margin-top: 80px;
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
    border-bottom: 1px solid var(--main-color);
  }
  .simplelog :global(.pager a) {
    background: var(--bg-color);
  }
  .simplelog :global(a:not(.pager a)) {
    padding: 0 2px;
  }
  .simplelog :global(a:hover) {
    background: var(--main-color);
    color: var(--th-color);
  }
  .simplelog :global(a:not(.pager a):hover) {
    border-radius: 0.25rem;
  }
  
  .simplelog :global(code) {
    font-size: calc(var(--font-size-p) * 0.9);
    padding: 0.2rem 0.3rem;
    background: var(--sub-color);
    border-radius: 0.25rem;
  }
  .simplelog :global(code:not(pre code)){
    margin: 0 0.2rem;
  }
  .simplelog :global(pre) {
    font-size: 0.9rem;
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

    /* 前述のCSS設定を適用 */
  .simplelog :global(.table-outer) {
    width: calc(100% - 1rem);
    overflow-x: auto;
    margin: 1.5rem 0.5rem;
    -webkit-overflow-scrolling: touch;
  }

  .simplelog :global(table) {
    display: table;
    border-collapse: collapse;
    width: calc(100% - 1rem);
    margin: 0;
    font-size: var(--font-size-p);
    white-space: nowrap;
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