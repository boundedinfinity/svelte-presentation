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

<table>
    <tr>
        <td>Mouse x</td><td>{m.x}</td>
        <td>Mouse y</td><td>{m.y}</td>
    </tr>
    <tr>
        <td>WH</td><td>{wh}</td>
        <td>WW</td><td>{ww}</td>
    </tr>
    <tr>
        <td>clientH</td><td>{clientH}</td>
        <td>clientW</td><td>{clientW}</td>
    </tr>
    <tr>
        <td>offsetH</td><td>{offsetH}</td>
        <td>offsetW</td><td>{offsetW}</td>
    </tr>
</table>

<div
    on:mousemove={handleMousemove}
    bind:clientHeight={clientH}
    bind:clientWidth={clientW}
    bind:offsetHeight={offsetH}
    bind:offsetWidth={offsetW}
>
    <slot />
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