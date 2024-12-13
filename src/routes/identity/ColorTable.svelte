<script lang='ts'>
  let { colors } = $props();
</script>

<div class="table w-full table-auto">
  <div class="table-row text-xs">
    <div class="table-cell pb-2"></div>
    <div class="table-cell text-center">50</div>
    <div class="table-cell text-center">100</div>
    <div class="table-cell text-center">200</div>
    <div class="table-cell text-center">300</div>
    <div class="table-cell text-center">400</div>
    <div class="table-cell text-center font-bold">500 <div>▼</div></div>
    <div class="table-cell text-center">600</div>
    <div class="table-cell text-center">700</div>
    <div class="table-cell text-center">800</div>
    <div class="table-cell text-center">900</div>
    <div class="table-cell text-center">950</div>
  </div>
  {#each Object.keys(colors) as color}
    <div class="table-row">
      <div class="table-cell pb-2 pr-2 text-slate-400 text-sm align-middle">
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