<script lang="ts">
  import { Grid } from "$lib/svg";

  const rows = 10;
  const cols = 10;
  const layout: string[][] = [
    [],
    [undefined, "server1", "server2"],
    [],
    [null, null, "app1", "app2"],
    [],
    [],
    [null, null, null, null, null, null, null, "app3", "app4"],
  ];
</script>

<div>
  <Grid {layout} {rows} {cols} debug={true} />
</div>

<style>
  div {
    @apply m-4;
  }
</style>
