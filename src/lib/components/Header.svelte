<script>
  import { resolve } from '$lib/utils/paths';
  import { sidebarOpen } from '$lib/stores/sidebar';
  
  let mobileMenuOpen = false;

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMobileMenu = () => {
    mobileMenuOpen = false;
  };
</script>

<header>
  <a href={resolve('/all')} class="teraCore">teraCore</a>
  
  <button class="mobile-menu-btn" on:click={toggleMobileMenu} aria-label="Toggle menu">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>

  <nav class:open={mobileMenuOpen}>
    <a href={resolve('/all')} on:click={closeMobileMenu}>Articles</a>
    <a href={resolve('/categories')} on:click={closeMobileMenu}>Categories</a>
    <a href={resolve('/about')} on:click={closeMobileMenu}>About Us</a>
    <a href={resolve('/contact')} on:click={closeMobileMenu}>Contact</a>
  </nav>
</header>

<style>
header {
  position: fixed; 
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;     
  padding: 1rem;
  width: 100%;
  background: white;
  border-bottom: 0.1rem solid #003160 ;  
  box-sizing: border-box;
  height: 60px;
  z-index: 1000; 
}


.teraCore {
  position: absolute;     
  left: 3rem;           
  font-size: 1.5rem;
  font-weight: bold;
  color: #255982;
  text-decoration: none;
}


nav {
  display: flex;
  gap: 2rem;
}


nav a {
  color: #003160;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s;
}


nav a:hover {
  color: #ffcc00;
}

nav a:active,
nav a.active {
  color: #ff8800;
}

nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffcc00;
  transition: width 0.3s;
}

nav a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: #003160;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
}

.mobile-menu-btn svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  header {
    justify-content: space-between;
  }

  .teraCore {
    position: static;
    font-size: 1.2rem;
  }

  .mobile-menu-btn {
    display: flex;
  }

  nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: white;
    border-bottom: 0.1rem solid #003160;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  nav.open {
    max-height: 300px;
  }

  nav a {
    padding: 1rem;
    border-bottom: 0.1rem solid #f0f0f0;
  }

  nav a::after {
    display: none;
  }

  nav a:hover {
    background-color: #f5f5f5;
  }
}
</style>