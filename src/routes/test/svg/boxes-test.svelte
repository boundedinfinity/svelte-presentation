<script lang="ts">
    import {onMount} from 'svelte'
    import gsap from 'gsap'

    let box1:HTMLDivElement
    let box2:HTMLDivElement
    let group1:SVGGElement
    let text1:SVGTextElement
    let textLength:number = 0
    let textHeight:number = 0
    let svg1:SVGElement

    $: if(text1) {
        textLength = text1.getComputedTextLength()
        textHeight = text1.getBBox().height
    }
    
    let rect1:SVGRectElement
    

    onMount(async () => {
        gsap.to(box1, {
            x: 50,
            yoyo: true,
            repeat: -1,
        })

        gsap.to(box2, {
            x: 50,
            yoyo: true,
            repeat: -1,
        })

        gsap.to(svg1, {
            y: 50,
            yoyo: true,
            repeat: -1,
        })
    })
</script>

<div>
  <svg width="100%" height="200">
   
    <g transform="translate(50,50)">
        <rect rx="5" ry="5" width="200" height="100" stroke="green" fill="none" stroke-width="10"/>
        <svg width="200px" height="100px">
          <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">CORRECT BORDER CORRECT BORDER CORRECT BORDER</text>      
        </svg>
      </g>
  </svg>
</div>

<div bind:this={box1} class="box box1">box 1</div>
<div bind:this={box2} class="box box2">box 2</div>
<div class="box box3">box 3</div>

<style>
    text {
        @apply m-4 p-4;
    }
    div {
        @apply border-gray-200 border-2 w-11/12 m-2 p-2;
    }

    .box {
        @apply w-1/12;
    }
</style>
