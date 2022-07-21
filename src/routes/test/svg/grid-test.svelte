<script lang="ts">
  import { Grid, type LayoutItem, type LayoutConnection } from "$lib/svg";
  import Wrapper from "./_wrapper.svelte";

  const rows = 0;
  const cols = 0;
  let gridW: number;
  let gridH: number;

  const layout: LayoutItem[][] = [
    [],
    [
      null,
      { text: "the server 1", group: "g1" },
      { text: "server2", group: "g1" },
    ],
    [],
    [null, null, { text: "app1" }, { text: "app2" }],
    [],
    [null, null, null, null, null, null, null, { text: "app3", group: "g2" }],
    [null, null, null, null, null, null, null, { text: "app4", group: "g2" }],
  ];

  const connections: LayoutConnection[] = [{ start: "server2", end: "the server 1" }];
</script>

<Wrapper>
  <p>size: w: {gridW}px h: {gridH}px</p>
  <div bind:offsetWidth={gridW} bind:offsetHeight={gridH}>
    <Grid {layout} {rows} {cols} debug={true} />
  </div>
</Wrapper>

<style>
</style>
