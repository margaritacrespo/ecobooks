<script>
  import active from 'svelte-spa-router/active'
  export let menuOptions

</script>

<ul class="navbar-nav">
  {#each menuOptions as { route, label }}
    <li class="nav-item">
      <a href="#{route}" class="nav-link" use:active>{label}</a>
    </li>
  {/each}
</ul>
