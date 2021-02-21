<script>
  export let options = []
  export let value = null
  export let prompt = ''
</script>


<select class="form-select" class:text-black-50={!value} bind:value>
  {#if prompt && !value}
    <option selected disabled hidden>{prompt}</option>
  {/if}
  {#each options as opt}
    {#if opt.optgroup}
      <optgroup label={opt.optgroup.label}>
        {#each opt.optgroup.options as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </optgroup>
    {:else}
      <option value={opt.value}>{opt.label}</option>
    {/if}
    
  {/each}
</select>
