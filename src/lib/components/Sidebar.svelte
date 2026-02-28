<script>
  import { resolve } from '$lib/utils/paths';
  import { categories } from '$lib/data';
  import { sidebarOpen } from '$lib/stores/sidebar';
  
  let grouped = {};

  categories.forEach(cat => {
    const first = cat.name[0].toUpperCase();
    if (!grouped[first]) grouped[first] = [];
    grouped[first].push({
      name: cat.name,
      path: resolve(cat.path)
    });
  });

  const letters = Object.keys(grouped).sort();

  const toggleSidebar = () => {
    sidebarOpen.update(value => !value);
  };
</script>

<aside class:closed={!$sidebarOpen}>
  <button class="toggle-btn" on:click={toggleSidebar} aria-label="Toggle sidebar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>

  {#if $sidebarOpen}

    {#each letters as letter}
      <div class="category-group">
        <h4>{letter}</h4>
        <ul>
          {#each grouped[letter] as cat}
            <li><a href={cat.path}>{cat.name}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  {/if}
</aside>

<style>

aside {
  position: fixed;
  top: 60px;       
  left: 0;
  width: 200px;
  padding: 1rem;
  background: #ededed; 
  height: calc(100vh - 60px); 
  border-right: 0.1rem solid #00316010 ;  
  border-bottom: 0.1rem solid #00316010 ;  
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  transition: width 0.3s ease, padding 0.3s ease;
}

aside.closed {
  width: 60px;
  padding: 1rem 0.5rem;
  align-items: center;
}

.toggle-btn {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background: none;
  color: #003160;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.toggle-btn:hover {
  background-color: rgba(0, 49, 96, 0.1);
}

.toggle-btn svg {
  width: 20px;
  height: 20px;
}

aside::-webkit-scrollbar {
  width: 0px;
}


.Categories {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #003160;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.Categories:hover {
  background-color: rgba(0, 49, 96, 0.1);
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

ul li a {
  text-decoration: none;
  color: #255982;            
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0.5rem;
  transition: color 0s, background-color 0.2s;
  border-right: 0.25rem solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

.category-group{
  color: #003160;
  font-weight: normal;
}


ul li a:hover {
  color: #ffbb00;   
}

ul li a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffbb00;
  transition: width 0.3s;
}

ul li a:hover::after {
  width: 100%;
}


ul li a.active {
  color: #ff9900;            
  border-right: 0.25rem solid #ff9900;
}
</style>