<script lang="ts">
    import { itemsRowAndCol, itemsNormalize, Triangle } from "$lib/svg";
    import { calcPoints } from "$lib/svg/shapes/path";
    import Diamond from "$lib/svg/shapes/diamond.svelte"
    import Hexagon from "$lib/svg/shapes/hexagon.svelte"
    import Pentagon from "$lib/svg/shapes/pentagon.svelte"

   
    let key: string;

    function handleEvent(event: KeyboardEvent) {
        key = event.key;
    }

    const tsize = 100;

    const rotations = [0, 90, 180, 270];
    const dy = 100;
    let y = 0;
    function getY() {
        y += dy;
        return y;
    }
</script>

<svelte:window on:keydown={handleEvent} />

<div>
    key: {key}
</div>

<div>
    <svg width="800" height="800">

        <Diamond fill="black"
        outline="red"
        stroke={2}
        size={tsize}
        
        x={200}
        y={100}/>

        <Hexagon fill="black"
        outline="red"
        stroke={2}
        size={tsize}

        x={300}
        y={100}/>

        <Pentagon fill="black"
        outline="red"
        stroke={2}
        size={tsize}

        x={400}
        y={100} />

        <line
            x1={50-tsize/2}
            y1={0}
            x2={50-tsize/2}
            y2={1000}
            stroke-width={2}
            stroke="black"
        />
        <line
            x1={50}
            y1={0}
            x2={50}
            y2={1000}
            stroke-width={2}
            stroke="black"
        />
        <line
            x1={50+tsize/2}
            y1={0}
            x2={50+tsize/2}
            y2={1000}
            stroke-width={2}
            stroke="black"
        />
        {#each rotations as rotation}
            <Triangle
                fill="black"
                outline="red"
                stroke={2}
                size={tsize}
                x={50}
                y={getY()}
            />
        {/each}
    </svg>

    <!-- <div class="grid" style="--grid-rows: {gridRows}; --grid-cols: {gridCols}">
        {#each diagram2 as col}
            {#each col as row}
                <div class="item" class:item-content={row !== undefined}>
                    {#if row !== undefined}
                        {row}
                    {/if}
                </div>
            {/each}
        {/each}
    </div> -->
</div>

<style>
    .grid {
        display: grid;
        grid-template-rows: repeat(var(--grid-rows), 1fr);
        grid-template-columns: repeat(var(--grid-cols), 1fr);
        gap: 1em;
        border-color: lightgray;
        border-width: 2px;
        width: 80vw;
        height: 40vh;
        margin: 1em;
        padding: 1em;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item-content {
        border-color: lightcoral;
        border-width: 2px;
    }
</style>
