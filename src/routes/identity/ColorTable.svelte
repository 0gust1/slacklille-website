<script lang='ts'>
  let { colors } = $props();
</script>

<div class="table w-full table-auto">
  <div class="table-row text-xs">
    <div class="table-cell pb-2"></div>
    <div class="table-cell">50</div>
    <div class="table-cell">100</div>
    <div class="table-cell">200</div>
    <div class="table-cell">300</div>
    <div class="table-cell">400</div>
    <div class="table-cell font-bold">500 <div>▼</div></div>
    <div class="table-cell">600</div>
    <div class="table-cell">700</div>
    <div class="table-cell">800</div>
    <div class="table-cell">900</div>
    <div class="table-cell">950</div>
  </div>
  {#each Object.keys(colors) as color}
    <div class="table-row">
      <div class="table-cell pb-2 pr-2 text-slate-400 align-middle">
        <span>{color}</span>
      </div>

      {#each Object.keys(colors[color]) as colorStop}
        {@const colorValue = colors[color][colorStop]}
        <div class="table-cell max-w-20 pb-2">
          <div class="h-8 w-auto" title="{color}-{colorStop}" style:background-color={colorValue}></div>
          <div class="px-2 text-xs">
            <div><code>{colorValue}</code></div>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>