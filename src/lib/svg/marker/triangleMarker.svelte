<script lang="ts">
  import { Marker } from "$lib/svg";
  import { Triangle } from "$lib/svg/shapes";

  export let id: string = "triangle";
  export let size: number = 5;
  export let fill: string = "black";
</script>

<Marker {id} h={size} w={size} orient="auto-start-reverse">
  <Triangle h={size} w={size} {fill} />
</Marker>
