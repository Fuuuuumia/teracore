<script>
  const categories = [
    { name: 'Tech', path: '/blog/tech' },
    { name: 'Life', path: '/blog/life' },
    { name: 'News', path: '/blog/news' }
  ];
</script>

<aside>
  <h3>Categories</h3>
  <ul>
    {#each categories as category}
      <li>
        <a href={category.path}>{category.name}</a>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    width: 200px;
    padding: 1rem;
    background: #f4f4f4;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
</style>