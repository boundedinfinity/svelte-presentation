<script lang="ts">
  import { TriangleMarker, CircleMarker, Polyline } from "$lib/svg";
</script>

<div>
  <svg width="600" height="800">
    <defs>
      <TriangleMarker size={20} fill="red" />
      <CircleMarker size={20} fill="green" />
    </defs>

    <Polyline
      fill="none"
      stroke="black"
      points={[
        { x: 71.98863410949707, y: 161.85368156433105 },
        { x: 289.3536767959595, y: 161.85368156433105 },
        { x: 289.3536767959595, y: 217.8480052947998 },
        { x: 496.7187194824219, y: 217.8480052947998 },
      ]}
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
