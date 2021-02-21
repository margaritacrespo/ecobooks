<script>
  export let menuOptions
  let activeRoute = getInitialRoute()

  function getInitialRoute() {
    let hash = document.location.hash
    if (hash.length < 4) return null
    let m = hash.match(/^#\/([^/]+)\//)
    return m && m[1]
  }

  function routeClicked(route) {
    activeRoute = route
    console.log('routeClicked:', activeRoute)
  }
</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a
        class="nav-link" class:active={route == activeRoute}
        href="#/{route}/"
        on:click={() => routeClicked(route)}
      >
        {label}
      </a>
    </li>
  {/each}
</ul>
