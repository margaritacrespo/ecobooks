<script>
  export let menuOptions
  let selectedRoute = null

  function getSelected(route) {
    return route == selectedRoute ? 'selected' : ''
  }

  function routeClicked(route) {
    selectedRoute = route
  }
</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a
        class="nav-link {getSelected(route)}"
        href="#/{route}/"
        on:click={() => routeClicked(route)}
      >
        {label}
      </a>
    </li>
  {/each}
</ul>
