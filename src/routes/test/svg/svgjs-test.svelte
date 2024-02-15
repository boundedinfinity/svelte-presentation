<script lang="ts">
    import { onMount } from "svelte";
    import { SVG, Svg } from "@svgdotjs/svg.js";

    let svgDiv: HTMLDivElement;    

    onMount(() => {
        let draw: Svg = SVG().addTo(svgDiv).size(300, 300)
        var box1 = draw.rect(100,100).move(50,50)
        var box2 = draw.rect(100,100).move(200,200)
        var box3 = box1.bbox().merge(box2.bbox())
        
        draw.rect(box3.height, box3.width).move(box3.x, box3.y).fill('none').stroke('green')
    })

</script>

<div bind:this={svgDiv} />
<div class="hidden"></div>
