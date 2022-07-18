<script lang="ts">
  import { Marker } from "$lib/svg";
  import { Circle } from "$lib/svg/shapes";

  export let id: string = "circle";
  export let size: number = 5;
  export let fill: string = "black";
</script>

<Marker {id} h={size} w={size} orient="auto">
  <Circle cx={size / 2} cy={size / 2} r={size / 2} {fill} />
</Marker>
