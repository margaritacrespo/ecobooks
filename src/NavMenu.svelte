<script>
  export let menuOptions
  $: activeRoute = null

  function routeClicked(route) {
    activeRoute = route
    console.log('routeClicked:', activeRoute)
  }
</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a
        class="nav-link {route == activeRoute ? 'active' : ''}"
        href="#/{route}/"
        on:click={() => routeClicked(route)}
      >
        {label}
      </a>
    </li>
  {/each}
</ul>
