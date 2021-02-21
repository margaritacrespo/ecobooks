<script>
  export let options = []
  export let prompt = ''
  export let onInput = () => {}
  //TODO compute selected based on value property
</script>


<select class="form-select" on:input={onInput}>
  {#if prompt}
    <option selected disabled>{prompt}</option>
  {/if}
  {#each options as opt}
    {#if opt.optgroup}
      <optgroup label={opt.optgroup.label}>
        {#each opt.optgroup.options as {value, label}}
          <option value={value}>{label}</option>
        {/each}
      </optgroup>
    {:else}
      <option value={opt.value}>{opt.label}</option>
    {/if}
    
  {/each}
</select>
