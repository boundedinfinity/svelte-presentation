<script lang="ts">
</script>

  <div class="grid gridx">
    
    <div class="group-b">group b</div>
    <div class="group-a">group a</div>

    <div class="grid-item" style="grid-row: 1/1; grid-column: 1/1;">1</div>
    <div class="grid-item" style="grid-row: 1/1; grid-column: 2/2;">2</div>
    <div class="grid-item" style="grid-row: 1/1; grid-column: 3/3;">3</div>
    <div class="grid-item" style="grid-row: 1/1; grid-column: 4/4;">4</div>

    <div class="grid-item" style="grid-row: 2/2; grid-column: 1/2;">1</div>
    <div class="grid-item" style="grid-row: 2/2; grid-column: 2/3;">2</div>
    <div class="grid-item" style="grid-row: 2/2; grid-column: 3/4;">3</div>
    <div class="grid-item" style="grid-row: 2/2; grid-column: 4/5;">4</div>

    <div class="grid-item" style="grid-row: 3/3; grid-column: 1/1;">1</div>
    <div class="grid-item" style="grid-row: 3/3; grid-column: 2/2;">2</div>
    <div class="grid-item" style="grid-row: 3/3; grid-column: 3/3;">3</div>
    <div class="grid-item" style="grid-row: 3/3; grid-column: 4/4;">4</div>
    
    <div class="grid-item" style="grid-row: 4/4; grid-column: 1/1;">1</div>
    <div class="grid-item" style="grid-row: 4/4; grid-column: 2/2;">2</div>
    <div class="grid-item" style="grid-row: 4/4; grid-column: 3/3;">3</div>
    <div class="grid-item" style="grid-row: 4/4; grid-column: 4/4;">4</div>
  </div>


<style>
  .grid {
    @apply m-16 p-4 border border-gray-700 bg-slate-50;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    /* grid-template-areas:
      ". . . ."
      ". . . ."
      "b b b b"
      "b b b b";
      grid-template-areas:
      ". . . ."
      ". . . ."
      ". . a a"
      ". . . ."; */
  }

  .grid-item {
    @apply m-2 bg-green-400 flex justify-center items-center;
  }

  .group-a {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 5;
    @apply m-2 p-2 bg-orange-400 flex justify-center items-center;
  }

  .group-b {
    grid-row: 3 / 5;
    grid-column: 1 / 5;
    @apply m-2 p-6 bg-red-400 flex justify-center items-center;
  }
</style>
