<script lang="ts">
  import { onMount } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import Wrapper from "./_wrapper.svelte";
  import { em2Px, Group } from "$lib/svg";
  
  const elMap = new Map<string, Writable<HTMLElement[]>>();
  elMap.set('g1', writable([]))
  elMap.set('g2', writable([]))

  let gridEl: HTMLElement;
  let em = 0;

  onMount(() => {
    em = em2Px(gridEl);
  });

  function addEl(el: HTMLElement, group: string) {
    elMap.get(group)!.update((l) => {
      l.push(el);
      return l;
    });
  }

  function updateDims() {
    Array.from(elMap.values()).forEach((s) => s.update((s) => s));
  }

  function getStore(group:string): Writable<HTMLElement[]> {
    return elMap.get(group)!
  }
</script>

<svelte:window on:resize={updateDims} />

<Wrapper>
  <div bind:this={gridEl} class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div  use:addEl={"g2"} class="grid-item">2</div>
    <div use:addEl={"g2"} class="grid-item">3</div>
    <div use:addEl={"g2"}  class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div id="r3c4" use:addEl={"g1"} class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div id="r4c4" use:addEl={"g1"} class="grid-item">4</div>
  </div>
</Wrapper>

<Group {em} elements={getStore("g2")} />
<Group {em} elements={getStore("g1")} />

<style>
  .grid {
    @apply m-2 p-2 border border-gray-700 bg-slate-50;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    /* grid-gap: 1em; */
  }

  .grid-item {
    margin: 1em;
    z-index: 50;
    /* padding: 1em; */
    @apply bg-green-400 flex justify-center items-center rounded-sm;
  }
</style>
