<script lang="ts">
    export let width:number = 0;
    export let height:number = 0;
</script>

<svg width={width} height={height}>
    <slot />
</svg>