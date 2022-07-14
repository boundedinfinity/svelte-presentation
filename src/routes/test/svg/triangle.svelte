<script lang="ts">
  import { Triangle } from "$lib/svg";
</script>

<div>
  <svg width="500" height="500">
    <Triangle />
  </svg>
</div>

<style>
  div {
    @apply p-24;
  }
  
  svg {
    @apply border-2 border-blue-300;
  }
</style>
