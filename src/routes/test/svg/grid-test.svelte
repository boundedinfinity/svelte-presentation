<script lang="ts">
  import { Grid, type LayoutItemOrNull, type LayoutConnection } from "$lib/svg";
  import Wrapper from "./_wrapper.svelte";

  let gridW: number;
  let gridH: number;

  const layout: LayoutItemOrNull[][] = [
    [],
    [
      { text: "server1", group: "g1" },
      { text: "server2", group: "g1" },
    ],
    [],
    [null, { text: "app1" }, { text: "app2" }],
    [],
    [null, null, null, null, null, null, { text: "app3", group: "g2" }],
    [null, null, null, null, null, null, { text: "app4", group: "g2" }],
  ];

  
  const connections: LayoutConnection[] = [];
</script>

<Wrapper>
  <p>size: w: {gridW}px h: {gridH}px</p>
  <div bind:offsetWidth={gridW} bind:offsetHeight={gridH}>
    <Grid {layout} debug={false} />
  </div>
</Wrapper>

<style>
</style>
