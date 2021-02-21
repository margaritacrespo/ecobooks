<script>
  export let options = []
  export let value = null
  export let prompt = ''
  export let onInput = () => {}
</script>


<select class="form-select" bind:value on:input={onInput}>
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
