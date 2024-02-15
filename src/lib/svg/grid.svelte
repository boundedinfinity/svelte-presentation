<script lang="ts">
  import { onMount } from "svelte";
  import {
    type LayoutItemOrNull,
    em2Px,
    initItems,
    itemsRowAndCol,
    groupElements,
    Group,
  } from "$lib/svg";
  import type { ContextItem } from "./model";

  export let rows: number = 0;
  export let cols: number = 0;
  export let debug: boolean = false;
  export let layout: LayoutItemOrNull[][];

  [rows, cols] = itemsRowAndCol(layout);
  const table = initItems(layout);

  let gridEl: HTMLElement;
  let em = 0;

  onMount(() => {
    em = em2Px(gridEl);
  });

  function addGroup(el: HTMLElement, item: ContextItem) {
    groupElements.add(item, el);
  }

  function updateGroup() {
    groupElements.refresh();
  }

  updateGroup();
</script>

<svelte:window on:resize={updateGroup} />

{#each Array.from($groupElements.values()) as groupContainer}
  <Group {em} box={groupElements.box(groupContainer.name)} />
{/each}

<div class="wrapper">
  <div
    bind:this={gridEl}
    class="grid"
    style:--rows={rows}
    style:--cols={cols}
    style="display: grid;"
  >
    {#each table as items}
      {#each items as item}
        {#if item.layout}
          <div id={item.loc} class="val" use:addGroup={item}>{item.layout?.text}</div>
        {:else}
          <div id={item.loc} class:no-val={debug} />
        {/if}
      {/each}
    {/each}
  </div>
</div>

<style>
  .wrapper {
    @apply p-4 border-2 border-slate-700;
  }

  .grid {
    display: grid;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--cols), 1fr);
    z-index: 100;
    @apply gap-1 p-2 m-2 flex justify-center;
  }

  .val {
    z-index: 100;
    @apply border-2 border-green-800 flex justify-center align-middle;
  }

  .no-val {
    z-index: 98;
    @apply border-2 border-slate-100;
  }
</style>
