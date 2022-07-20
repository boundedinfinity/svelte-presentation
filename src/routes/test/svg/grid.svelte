<script lang="ts">
  import { Grid } from "$lib/svg";

  const rows = 10;
  const cols = 20;
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

<!-- <div class="xx">
  <Grid {layout} {rows} {cols} debug={true} />
</div> -->

<div class="wrapper">
  <div class="wrapper2">
    <div class="grid gridy overlay">
      <div class="group a">group a</div>
    </div>
    <div class="grid gridz overlay">
      <div class="group b">group a</div>
    </div>

    <div class="grid gridx overlay">
      <div class="itemx">1</div>
      <div class="itemx">2</div>
      <div class="itemx">3</div>
      <div class="itemx">4</div>
      <div class="itemx">5</div>
      <div class="itemx">6</div>
      <div class="itemx">7</div>
      <div class="itemx">8</div>
      <div class="itemx">9</div>
      <div class="itemx">10</div>
      <div class="itemx">11</div>
      <div class="itemx">12</div>
      <div class="itemx">13</div>
      <div class="itemx">14</div>
      <div class="itemx">15</div>
      <div class="itemx">16</div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    @apply m-16 p-8 border border-gray-700 bg-slate-50;
  }

  .wrapper2 {
    position: relative;
    
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
    height: 500px;
    width: 500px;
  }

  .gridx {
    z-index: 99;
  }

  .gridy {
    z-index: 1;
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . a a"
      ". . . .";
  }

  .gridz {
    z-index: 0;
    grid-template-areas:
      ". . . ."
      ". . . ."
      "a a a a"
      "a a a a";
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
  }

  .itemx {
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    row-gap: 0;
    @apply m-2 bg-green-400 flex justify-center items-center;
  }

  .group {
    @apply p-2 flex justify-center;
  }

  .a {
    @apply bg-red-200;
    grid-area: a;
  }

  .b {
    @apply bg-orange-200;
    grid-area: a;
  }

  .xx {
    @apply m-4;
  }
</style>
