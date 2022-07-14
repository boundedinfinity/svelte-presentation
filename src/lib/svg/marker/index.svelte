<script lang="ts">
  export let h: number = 10;
  export let w: number = 10;
</script>

<marker
  id="triangle"
  viewBox="0 0 {w} {h}"
  refX={w}
  refY={h / 2}
  markerWidth={w}
  markerHeight={h}
  orient="auto-start-reverse"
>
  <slot />
</marker>
