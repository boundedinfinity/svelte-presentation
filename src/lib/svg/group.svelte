<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { Box } from "$lib/svg/model";

  export let box: Readable<Box>;
  export let em: number;

  const scaleFactor = 0.25;
</script>

<div
  class="group"
  style:--left="{$box.l - em * scaleFactor}px"
  style:--top="{$box.t - em * scaleFactor}px"
  style:--width="{$box.w + em * 2 * scaleFactor}px"
  style:--height="{$box.h + em * 2 * scaleFactor}px"
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
