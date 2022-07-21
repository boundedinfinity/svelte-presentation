<script lang="ts">
  import { Svg, TriangleMarker, CircleMarker, Polyline, Text } from "$lib/svg";
  import Wrapper from "./_wrapper.svelte";
</script>

<Wrapper>
  <Svg width={600} height={800}>
    <defs>
      <TriangleMarker size={20} fill="red" />
      <CircleMarker size={20} fill="green" />
    </defs>

    <Polyline
      fill="none"
      stroke="black"
      points={[
        { x: 71.98863410949707, y: 161.85368156433105 },
        { x: 289.3536767959595, y: 161.85368156433105 },
        { x: 289.3536767959595, y: 217.8480052947998 },
        { x: 496.7187194824219, y: 217.8480052947998 },
      ]}
    />

    <Text dx={5} dy={5}>This is some text</Text>
  </Svg>
</Wrapper>

<style>
  svg {
    @apply border-2 border-red-300;
  }
</style>
