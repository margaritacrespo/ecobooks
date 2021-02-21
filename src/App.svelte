<script>
  import Router from 'svelte-spa-router'
  import NavMenu from './NavMenu.svelte'
  // Pages
  import Home from './pages/Home.svelte'
  import Donate from './pages/Donate.svelte'
  import Book from './pages/Book.svelte'

  let menuOptions = [
    { route: '/', label: '', component: Home },
    { route: '/donate/', label: 'Donar Libros', component: Donate },
    { route: '/book/', label: 'Reservar Libros', component: Book }
  ]
  let routes = menuOptions
    .reduce((prev, curr) => {
      prev[curr.route] = curr.component
      return prev
    }, {})
</script>

<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Aula Ecobooks</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-4" id="navbarNav">
        <NavMenu {menuOptions} />
      </div>
    </div>
  </nav>
</header>
<main>
  <Router {routes} />
</main>

<style>
</style>