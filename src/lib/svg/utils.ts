import { emptyBox, type Box } from './model'



export function em2Px(el: HTMLElement): number {
    // https://stackoverflow.com/questions/4571813/why-is-this-javascript-function-so-slow-on-firefox
    return parseFloat(getComputedStyle(el, "").fontSize)
}

export function htmlElements2Boxes(els: HTMLElement[]): Box[] {
    return els.map(el => htmlElement2Box(el))
}

export function htmlElement2Box(el: HTMLElement): Box {
    const rect = el.getBoundingClientRect()
    const vmid: number = (rect.bottom - rect.top) / 2 + rect.top
    const hmid: number = (rect.right - rect.left) / 2 + rect.left

    return {
        tl: { x: rect.left, y: rect.top },
        tm: { x: hmid, y: rect.top },
        tr: { x: rect.right, y: rect.top },
        bl: { x: rect.left, y: rect.bottom },
        bm: { x: hmid, y: rect.bottom },
        br: { x: rect.right, y: rect.bottom },
        ml: { x: rect.left, y: vmid },
        mr: { x: rect.right, y: vmid },
        l: rect.left,
        r: rect.right,
        t: rect.top,
        b: rect.bottom,
        w: rect.width,
        h: rect.height,
    }
}

export function getGroupBox(boxes: Box[]): Box {
    if (!boxes || boxes.length <= 0) {
        return emptyBox;
    }
    
    let top: number = Number.MAX_VALUE
    let bottom: number = 0
    let left: number = Number.MAX_VALUE;
    let right: number = 0;

    boxes.forEach(box => {
        if (box.tl.x < left) left = box.tl.x
        if (box.tl.y < top) top = box.tl.y
        if (box.br.x > right) right = box.br.x
        if (box.br.y > bottom) bottom = box.br.y

    })

    const vmid: number = (bottom - top) / 2 + top
    const hmid: number = (right - left) / 2 + left
    const width: number = right - left;
    const height: number = bottom - top;

    return {
        tl: { x: left, y: top },
        tm: { x: hmid, y: top },
        tr: { x: right, y: top },
        bl: { x: left, y: bottom },
        bm: { x: hmid, y: bottom },
        br: { x: right, y: bottom },
        ml: { x: left, y: vmid },
        mr: { x: right, y: vmid },
        t: top,
        b: bottom,
        l: left,
        r: right,
        w: width,
        h: height,
    }
}