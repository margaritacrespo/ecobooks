<script>
  import { onMount } from "svelte"

  export let menuOptions
  let activeRoute = getRoute()

  function getRoute() {
    return document.location.hash.substr(1)
  }

  onMount(
    () => window.addEventListener(
      'hashchange',
      () => activeRoute = getRoute() 
    )
  )
</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a
        class="nav-link" class:active={route == activeRoute}
        href="#{route}"        
      >
        {label}
      </a>
    </li>
  {/each}
</ul>
