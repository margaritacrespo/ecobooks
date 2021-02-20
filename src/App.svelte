<script>
  import NavMenu from './NavMenu.svelte'

  let menuOptions = [
    { route: 'donate', label: 'Donar Libros' },
    { route: 'book', label: 'Reservar Libros' }
  ]
</script>

<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/">Aula Ecobooks</a>
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
  <!--
    For router support: https://github.com/ItalyPaleAle/svelte-spa-router
    Example: https://svelte.dev/repl/11e51e1ce65449c0b0db1af0906e206a?version=3.4.4
  -->
	<h1 class="m-4">ToDo</h1>
</main>

<style>
</style>