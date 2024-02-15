<script lang="ts">
    import { calcPoints } from "./path";

    const oddOffSet: number = 270
    export let numberOfPoints: number = 3;
    export let size: number = 10;
    export let stroke: number = 1;
    export let direction: number = 0;
    export let fill: string = "none";
    export let outline: string = "black";
    export let x: number = 0;
    export let y: number = 0;
    export let debug: boolean = false;

    if(numberOfPoints % 2 != 0) {
        direction += oddOffSet
    }    

    const h: number = size;
    const w: number = size;
    const points = calcPoints(numberOfPoints, size);
    const output = points.map((p) => `${p.x},${p.y}`).join(" ");
</script>

{#if debug}
    <circle cx={x} cy={y} r={size / 2} fill="lightgrey" stroke="darkgrey" />
{/if}

<polygon
    points={output}
    stroke-width={stroke}
    stroke={outline}
    {fill}
    transform="translate({x} {y}) rotate({direction})"
/>