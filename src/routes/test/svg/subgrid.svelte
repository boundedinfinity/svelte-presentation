<script lang="ts">
  import { writable } from "svelte/store";
  import Wrapper from "./_wrapper.svelte";
  import type { Box } from "$lib/svg/model";
  import { emptyBox } from "$lib/svg/model";
  import { htmlElement2Box, getGroupBox, em2Px } from "$lib/svg/utils";
  import { onMount } from "svelte";

  let points: Box[] = [];
  const s = writable(emptyBox);
  let gridEl: HTMLElement;
  let emPx = 0;

  onMount(() => {
    emPx = em2Px(gridEl);
  });

  function getDims(el: HTMLElement) {
    points.push(htmlElement2Box(el));
    s.set(getGroupBox(points));
  }
</script>

<Wrapper>
  <div bind:this={gridEl} class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div id="r3c4" use:getDims class="grid-item">4</div>

    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div id="r4c4" use:getDims class="grid-item">4</div>
  </div>
</Wrapper>

<div
  class="group-a"
  style="left: {$s.l - emPx}px; top: {$s.t - 2 * emPx}px; width: {$s.w + 2 * emPx}px; height: {$s.h + 3 * emPx}px"
>
  group a
</div>

<table>
  <tr>
    <td> box.l:</td><td> {$s.l}</td>
  </tr>
  <tr>
    <td> box.t:</td><td> {$s.t}</td>
  </tr>
  <tr>
    <td> box.w:</td><td> {$s.w}</td>
  </tr>
  <tr>
    <td> box.h:</td><td> {$s.h}</td>
  </tr>
  <tr>
    <td> em px:</td><td> {emPx}</td>
  </tr>
</table>

<style>
  .grid {
    @apply m-2 p-2 border border-gray-700 bg-slate-50;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    /* grid-gap: 1em; */
  }

  .grid-item {
    margin: 1em;
    z-index: 1;
    /* padding: 1em; */
    @apply bg-green-400 flex justify-center items-center rounded-sm;
  }

  .group-a {
    position: absolute;
    z-index: 0;
    @apply border-orange-500 border bg-orange-50 flex justify-center items-start rounded-sm;
  }
</style>
