<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { onMount } from "svelte";
  import { type LayoutItem, type Item, em2Px, Group } from "$lib/svg";

  export let rows: number = 0;
  export let cols: number = 0;
  export let debug: boolean = false;
  export let layout: LayoutItem[][];

  const elMap = new Map<string, Writable<HTMLElement[]>>();
  let gridEl: HTMLElement;
  let em = 0;

  onMount(() => {
    em = em2Px(gridEl);
  });

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
      const item = layout?.[row]?.[col];
      if (item) {
        data[row].push({
          id: id,
          text: item.text,
          class: "val",
          group: item.group,
        });
        if (item.group) {
          elMap.set(item.group, writable([]));
        }
      } else {
        data[row].push({ id: id, text: "", class: debug ? "no-val" : "" });
      }
    }
  }

  function addEl(el: HTMLElement, group: string) {
    elMap.get(group)!.update((l) => {
      l.push(el);
      return l;
    });
  }

  function updateDims() {
    Array.from(elMap.values()).forEach((s) => s.update((s) => s));
  }

  updateDims();
</script>

<svelte:window on:resize={updateDims} />

{#each Array.from(elMap.values()) as elements}
  <Group {em} {elements} />
{/each}

<div
  bind:this={gridEl}
  class="grid"
  style:--rows={rows}
  style:--cols={cols}
  style="display: grid;"
>
  {#each data as rowArr}
    {#each rowArr as item}
      {#if item.group}
        <div use:addEl={item.group} id={item.id} class={item.class}>
          {item.text}
        </div>
      {:else}
        <div id={item.id} class={item.class}>{item.text}</div>
      {/if}
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--cols), 1fr);
    z-index: 100;
    @apply border-2 border-slate-700 gap-1 p-2 m-2 flex justify-center;
  }

  .val {
    z-index: 100;
    @apply border-2 border-green-800 flex justify-center align-middle;
  }

  .no-val {
    z-index: 98;
    /* @apply border-2 border-slate-100; */
  }
</style>
