<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { TextBox } from "$lib/svg";

    let box1: HTMLDivElement;
    let box2: HTMLDivElement;
    let group1: SVGGElement;
    let text1: SVGTextElement;
    let textLength: number = 0;
    let textHeight: number = 0;
    let svg1: SVGElement;

    $: if (text1) {
        textLength = text1.getComputedTextLength();
        textHeight = text1.getBBox().height;
    }

    let rect1: SVGRectElement;

    onMount(async () => {
        gsap.to(box1, {
            x: 50,
            yoyo: true,
            repeat: -1,
        });

        gsap.to(box2, {
            x: 50,
            yoyo: true,
            repeat: -1,
        });

        gsap.to(svg1, {
            y: 50,
            yoyo: true,
            repeat: -1,
        });
    });
</script>

<div class="wrapper">
    <svg width="100%" height="200">
        <TextBox text="CORRECT BORDER CORRECT BORDER CORRECT BORDER" />
    </svg>
</div>

    <div class="textbox">
        CORRECT BORDER CORRECT BORDER CORRECT BORDER
    </div>


<div bind:this={box1} class="box box1">box 1</div>
<div bind:this={box2} class="box box2">box 2</div>
<div class="box box3">box 3</div>

<style>
    .textbox {
        margin: 2px;
        padding: 4px;
        border-width: 25px;
        border-color: darkgrey;
        border-radius: 3px;
        width: fit-content;
        /* @apply border-2 border-slate-50; */
    }

    .wrapper {
        @apply border-gray-200 border-2 w-11/12 m-2 p-2;
    }

    .box {
        @apply w-1/12;
    }
</style>
