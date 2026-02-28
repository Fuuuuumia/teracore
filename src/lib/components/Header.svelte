<script>
  import { resolve } from '$lib/utils/paths';
</script>

<header>
  <a href={resolve('/all')} class="teraCore">teraCore</a>
  <nav>
    <a href={resolve('/all')}>Articles</a>
    <a href={resolve('/categories')}>Categories</a>
    <a href={resolve('/about')}>About Us</a>
    <a href={resolve('/contact')}>Contact</a>
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
</style>