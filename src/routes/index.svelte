<script lang="ts">
  import { onMount } from "svelte";
  import {Triangle} from '../lib/svg'
  import SvgCircle from './_circle.svelte'
 
  let clientH: number;
  let clientW: number;
  let offsetH: number;
  let offsetW: number;
  let wh: number;
  let ww: number;
  let main: HTMLElement;
  let svg: SVGElement;
  let m = { x: 0, y: 0 };

  let first: HTMLElement;
  let last: HTMLElement;

  onMount(() => {
    const firstB = getBox(first);
    const lastB = getBox(last);
    const path = getPath(firstB.mr, lastB.ml);

    drawPolyline(path);
    // drawCircle(firstB.mr, "green", 10);
    // drawCircle(lastB.ml, "red", 10);
  });

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function drawCircle(point: Point, fill: string, radius: number = 5) {
    const svgns = "http://www.w3.org/2000/svg";
    const el = document.createElementNS(svgns, "circle");
    el.setAttribute("cx", point.x.toString());
    el.setAttribute("cy", point.y.toString());
    el.setAttribute("r", radius.toString());
    el.setAttribute("fill", fill);
    svg.appendChild(el);
  }

  function drawPolyline(
    points: Point[],
    fill: string = "none",
    stroke: string = "black"
  ) {
    const svgns = "http://www.w3.org/2000/svg";
    const el = document.createElementNS(svgns, "polyline");
    const ps: string[] = points.map((p) => `${p.x},${p.y}`).join(" ");

    el.setAttribute("points", ps);
    el.setAttribute("stroke", stroke);
    el.setAttribute("fill", fill);
    el.setAttribute("marker-start", `url(#circle)`);
    el.setAttribute("marker-end", `url(#triangle)`);
    svg.appendChild(el);
  }

  function getPath(startP: Point, endPoint: Point): Point[] {
    const path: Point[] = [];
    path.push(startP);

    const middleX = startP.x + (endPoint.x - startP.x) / 2;
    const m1: Point = { x: middleX, y: startP.y };
    const m2: Point = { x: middleX, y: endPoint.y };
    const m3: Point = { x: endPoint.x - 10, y: endPoint.y };

    path.push(m1);
    path.push(m2);
    path.push(m3);
    return path;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface Box {
    ct: Point;
    cb: Point;
    mr: Point;
    ml: Point;
  }

  function getBox(el: HTMLElement): Box {
    const bb: DOMRect = el.getBoundingClientRect();
    console.log(`bb: ${JSON.stringify(bb)}`);
    const middle = bb.bottom - (bb.bottom - bb.top) / 2;
    const center = bb.left + (bb.right - bb.left) / 2;

    var box: Box = {
      ct: {
        x: center,
        y: bb.top,
      },
      cb: {
        x: center,
        y: bb.bottom,
      },
      ml: {
        x: bb.left,
        y: middle,
      },
      mr: {
        x: bb.right,
        y: middle,
      },
    };

    return box;
  }
</script>

<svelte:window bind:innerHeight={wh} bind:innerWidth={ww} />

<div
  id="wrapper"
  on:mousemove={handleMousemove}
  bind:clientHeight={clientH}
  bind:clientWidth={clientW}
  bind:offsetHeight={offsetH}
  bind:offsetWidth={offsetW}
>
  <table>
    <tr>
      <td>Mouse x</td><td>{m.x}</td>
      <td>Mouse y</td><td>{m.y}</td>
    </tr>
    <tr>
      <td>WH</td><td>{wh}</td>
      <td>WW</td><td>{ww}</td>
    </tr>
    <tr>
      <td>clientH</td><td>{clientH}</td>
      <td>clientW</td><td>{clientW}</td>
    </tr>
    <tr>
      <td>offsetH</td><td>{offsetH}</td>
      <td>offsetW</td><td>{offsetW}</td>
    </tr>
  </table>

  <main bind:this={main}>
    <article bind:this={first}>01</article>
    <article>02</article>
    <article>03</article>
    <article>04</article>
    <article bind:this={last}>05</article>
    <article>06</article>
    <article>07</article>
    <article>08</article>
    <article>09</article>
    <article>10</article>
    <article>11</article>
    <article>12</article>
  </main>

  <svg width={clientW} height={clientH} bind:this={svg}>
    <defs>
      <marker
        id="triangle"
        viewBox="0 0 10 10"
        refX="5"
        refY="10"
        markerWidth="10"
        markerHeight="10"
        orient="90deg"
      >
        <Triangle fill="red" />
      </marker>
      <marker
        id="circle"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="5"
        markerHeight="5"
      >
        <SvgCircle fill="red" />
      </marker>
    </defs>
  </svg>
</div>

<style>
  #wrapper {
  }

  svg {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    @apply border-2 border-blue-300;
  }

  table {
    @apply border-2;
  }

  td {
    @apply border-2 p-[1px];
  }

  main {
    /* @apply border-2 border-green-300; */
    @apply grid grid-cols-3 gap-2 p-6 z-10;
    z-index: 1;
  }

  article {
    @apply border-[1px] bg-slate-50 border-slate-300 h-12 w-12 flex justify-center items-center;
  }
</style>
