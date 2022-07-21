<script lang="ts">
    let clientH: number;
    let clientW: number;
    let offsetH: number;
    let offsetW: number;
    let wh: number;
    let ww: number;
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<svelte:window bind:innerHeight={wh} bind:innerWidth={ww} />

<div on:mousemove={handleMousemove}>

<table>
    <tr>
        <td>Mouse x</td><td>{m.x}</td>
        <td>Mouse y</td><td>{m.y}</td>
    </tr>
    <tr>
        <td>Window Height</td><td>{wh}</td>
        <td>Window Width</td><td>{ww}</td>
    </tr>
</table>

<div
    bind:clientHeight={clientH}
    bind:clientWidth={clientW}
    bind:offsetHeight={offsetH}
    bind:offsetWidth={offsetW}
>
    <slot />
</div>
</div>

<style>
    div {
        @apply m-2 border-2 border-blue-300;
    }

    table {
        @apply m-2;
    }

    td {
        @apply border border-green-500 p-2;
    }
  </style>