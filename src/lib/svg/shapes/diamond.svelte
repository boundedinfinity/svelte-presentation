<script lang="ts">
    import Agon from './_agon.svelte'    

    export let size: number
    export let stroke: number
    export let direction: number
    export let fill: string
    export let outline: string
    export let x: number
    export let y: number
    export let debug: boolean
</script>

<Agon numberOfPoints={4} {size} {stroke} {direction} {fill} {outline} {x} {y} {debug} />