<script lang="ts">
  export let id: string
  export let minX: number = 0;
  export let minY: number = 0;
  export let h: number = 10;
  export let w: number = 10;
  export let orient: "auto" | "auto-start-reverse" = "auto";
</script>

<marker
  id={id}
  viewBox="{minX} {minY} {w} {h}"
  refX={w}
  refY={h / 2}
  markerWidth={w}
  markerHeight={h}
  orient={orient}
>
  <slot />
</marker>
