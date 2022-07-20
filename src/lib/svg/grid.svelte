<script lang="ts">
  export let rows: number = 0;
  export let cols: number = 0;
  export let debug: boolean = false;
  export let layout: string[][];

  interface Item {
    v?: string;
    c?: string;
    id: string;
  }

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

<main
  style="display: grid; grid-template-rows: repeat({rows}, 1fr); grid-template-columns: repeat({cols}, 1fr);"
>
  {#each data as rowArr}
    {#each rowArr as item}
      <article id={item.id} class={item.c}>{item.v}</article>
    {/each}
  {/each}
</main>

<style>
  main {
    @apply border-2 border-slate-700 gap-4 p-2;
  }

  article {
  }

  .val {
    @apply border-2 border-green-800 m-2 flex justify-center;
  }

  .no-val {
    @apply border-2 border-slate-100;
  }
</style>
