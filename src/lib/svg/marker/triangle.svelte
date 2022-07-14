<script lang="ts">
  import { Marker, Triangle } from "$lib/svg";
  export let h: number = 10;
  export let w: number = 10;
  export let fill: string = "black";
</script>

<Marker {h} {w}>
  <Triangle {h} {w} {fill} />
</Marker>
