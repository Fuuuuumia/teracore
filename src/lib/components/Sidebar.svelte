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

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      sidebarOpen.set(false);
    }
  };
</script>

<aside class:closed={!$sidebarOpen} class:mobile-overlay={$sidebarOpen}>
  <div class="sidebar-header">
    <button class="toggle-btn" on:click={toggleSidebar} aria-label="Toggle sidebar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  </div>

  {#if $sidebarOpen}

    {#each letters as letter}
      <div class="category-group">
        <h4>{letter}</h4>
        <ul>
          {#each grouped[letter] as cat}
            <li><a href={cat.path} on:click={closeSidebar}>{cat.name}</a></li>
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
  background: #ededf6; 
  height: calc(100vh - 60px); 
  border-right: 0.1rem solid #00316010 ;  
  border-bottom: 0.1rem solid #00316010 ;  
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  transition: width 0.3s ease, padding 0.3s ease;
  z-index: 100;
}

aside.closed {
  width: 60px;
  padding: 1rem 0.5rem;
  align-items: center;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.toggle-btn {
  width: 44px;
  height: 44px;
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
  display: block;
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
  padding: 0.5rem;
  transition: color 0.2s, background-color 0.2s;
  border-right: 0.25rem solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  display: block;
}

.category-group{
  color: #003160;
  font-weight: normal;
}

.category-group h4 {
  margin: 0.5rem 0 0.25rem 0;
  font-size: 0.9rem;
}

ul li a:hover {
  color: #ffbb00;
  background-color: rgba(0, 49, 96, 0.05);
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

@media (max-width: 768px) {
  aside {
    top: 60px;
    width: 100%;
    max-width: 250px;
    height: calc(100vh - 60px);
    transform: translateX(-100%);
    transition: transform 0.3s ease, width 0.3s ease, padding 0.3s ease;
  }

  aside.mobile-overlay {
    transform: translateX(0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  aside.closed {
    width: 100%;
    max-width: 250px;
    padding: 1rem;
    align-items: flex-start;
  }

  .toggle-btn {
    width: 44px;
    height: 44px;
  }

  .Categories {
    padding: 0.75rem;
    font-size: 1.1rem;
  }

  ul li a {
    padding: 0.75rem;
    white-space: normal;
    font-size: 1rem;
  }

  .category-group h4 {
    font-size: 1rem;
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  aside {
    max-width: 280px;
  }

  .Categories {
    font-size: 1rem;
  }

  ul li a {
    font-size: 0.95rem;
  }
}
</style>