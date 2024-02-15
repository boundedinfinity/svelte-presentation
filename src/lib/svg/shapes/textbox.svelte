<script lang="ts">
    import { onMount } from "svelte";
    export let text: string;
    export let strokeWidth: number = 2;
    export let strokeColor: string = 'black'
    export let fillColor: string = 'none'
    export let textColor: string = 'black'
    export let padding: number = 5
    export let cornerRadius: number = 2
    let textEl: SVGTextElement;
    let textLength: number = 0;
    let textHeight: number = 0;
    let textX: number = 0
    let textY: number = 0

    $: if (textEl) {
        textLength = textEl.getComputedTextLength();
        textHeight = textEl.getBBox().height;
        textX = (textLength + padding * 2) * .5
        textY = (textHeight + padding * 2) * .5
    }
</script>

{#if text}
    <g transform="translate(50,50)">
        <rect
            rx={cornerRadius}
            ry={cornerRadius}
            width={textLength + padding * 2}
            height={textHeight + padding * 2}
            stroke={strokeColor}
            fill={fillColor}
            stroke-width={strokeWidth}
        />
        <svg width={textLength + padding * 2} height={textHeight + padding * 2}>
            <text style="--text-color: {textColor}"
                bind:this={textEl}
                x={textX}
                y={textY}
                >{text}
            </text>
        </svg>
    </g>
{/if}

<style>
    rect {

    }

    text {
        fill: var(--text-color);
        alignment-baseline: middle;
        text-anchor: middle;
    }
</style>