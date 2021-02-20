<script>
  export let menuOptions

  console.log(menuOptions)
</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a class="nav-link" href="#/{route}/">{label}</a>
    </li>
  {/each}
</ul>
