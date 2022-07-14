<script lang="ts">
  interface Point {
    x: number;
    y: number;
  }

  export let points: Point[] = [];
  export let stroke: string = "black";
  export let fill: string = "none";
  export let markerStart: string = "circle";
  export let markerEnd: string = "triangle";

  let ps: string = points.map((p) => `${p.x},${p.y}`).join(" ");
</script>

<polyline
  points={ps}
  {stroke}
  {fill}
  marker-start="url(#{markerStart})"
  marker-end="url(#{markerEnd})"
/>
