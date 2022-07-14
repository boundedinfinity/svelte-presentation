<script lang="ts">
    export let h: number = 10;
    export let w: number  = 10;
    export let fill: string = 'black'
</script>

<path d="M 0 0 L 0 {h} L {w} {h / 2} z" fill={fill} />