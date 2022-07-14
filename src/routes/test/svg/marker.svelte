<script lang="ts">
  import { Marker, Polyline, Triangle } from "$lib/svg";
  let h: number = 10;
  let w: number = 10;
</script>

<div>
  <svg width="600" height="800">
    <defs>
      <Marker {h} {w}>
        <Triangle {h} {w} />
      </Marker>
    </defs>

    <Polyline />
    <polyline
      points="71.98863410949707,161.85368156433105 289.3536767959595,161.85368156433105 289.3536767959595,217.8480052947998 496.7187194824219,217.8480052947998"
      stroke="black"
      fill="none"
      marker-start="url(#triangle)"
      marker-end="url(#triangle)"
    />
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
