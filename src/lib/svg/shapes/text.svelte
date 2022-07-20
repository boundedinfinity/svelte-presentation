<script lang="ts">
    import { onMount } from 'svelte';

    export let x: number = 0;
    export let y: number = 0;
    export let dx: number = 0;
    export let dy: number = 0;
    export let rotate: number = 0;

    let textEl: SVGTextElement;
    let width: number = 0;
    let height: number = 0;

    onMount(() => {
        const bbox = textEl.getBBox();
        width = bbox.height;
    })

</script>

<text bind:this={textEl} {x} {y} {dx} {dy} {rotate}>
    <slot />
</text>
