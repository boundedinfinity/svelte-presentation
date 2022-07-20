<script lang="ts">
  import { type Item } from "$lib/svg/model";
  export let rows: number = 0;
  export let cols: number = 0;
  export let debug: boolean = false;
  export let layout: string[][];

  if (rows < layout.length) {
    rows = layout.length;
  }

  if (!cols) {
    layout.forEach((r) => {
      if (cols < r.length) {
        cols = r.length;
      }
    });
  }

  let data: Item[][] = [];

  for (let row = 0; row < rows; row++) {
    data.push([]);
    for (let col = 0; col < cols; col++) {
      const id = `r${row}c${col}`;
      const v = layout?.[row]?.[col];
      if (v) {
        data[row].push({ id: id, v: v, c: "val" });
      } else {
        data[row].push({ id: id, v: "", c: debug ? "no-val" : "" });
      }
    }
  }
</script>

<div class="container">
  <div
    class="grid1 overlay common"
    style="display: grid; grid-template-rows: repeat({rows}, 1fr); grid-template-columns: repeat({cols}, 1fr);"
  >
    {#each data as rowArr}
      {#each rowArr as item}
        <article id={item.id} class={item.c}>{item.v}</article>
      {/each}
    {/each}
  </div>

  <div
    class="grid2 overlay  common"
    style="display: grid; grid-template-rows: repeat({rows}, 1fr); grid-template-columns: repeat({cols}, 1fr);"
  >
    {#each data as rowArr}
      {#each rowArr as item}
        <article class="no-val">XXXX</article>
      {/each}
    {/each}
  </div>
  
</div>

<style>
  .container {
    position: relative;
    width: 90vw;
  }

  .grid1 {
    z-index: 2;
  }

  .grid2 {
    z-index: 1;
  }

  .group1 {
  }

  .overlay {
    position: absolute;
    top:0;
    left:0;
  }

  .common {
    @apply border-2 border-slate-700 gap-1 p-2 m-2 flex justify-center;
  }

  .val {
    @apply border-2 border-green-800;
  }

  .no-val {
    @apply border-2 border-slate-100;
  }
</style>
