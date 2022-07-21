<script lang="ts">
  import { type Writable, type Readable, derived } from "svelte/store";
  import { htmlElements2Boxes, getGroupBox } from "$lib/svg/utils";
  import type { Box } from "$lib/svg/model";

  export let elements: Writable<HTMLElement[]>;
  export let em: number;
  
  const s: Readable<Box> = derived(elements, ($es) => {
    const box =  getGroupBox(htmlElements2Boxes($es));
    // console.log(box)
    // console.log(em)
    return box
  });

  const scaleFactor = .25
</script>

<div
  class="group"
  style:--left="{$s.l - em * scaleFactor}px"
  style:--top="{$s.t - em * scaleFactor}px"
  style:--width="{$s.w + em * 2 * scaleFactor}px"
  style:--height="{$s.h + em * 2 * scaleFactor}px"
/>

<style>
  .group {
    position: fixed;
    z-index: 99;
    left: var(--left);
    top: var(--top);
    width: var(--width);
    height: var(--height);
    @apply border-orange-500 border bg-orange-50 flex justify-center items-start rounded-sm;
  }
</style>
