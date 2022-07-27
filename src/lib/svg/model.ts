export interface Box {
    tl: Point
    tm: Point
    tr: Point
    ml: Point
    mr: Point
    bl: Point
    bm: Point
    br: Point
    t: number
    l: number
    r: number
    b: number
    w: number
    h: number
}

export const emptyPoint: Point = { x: 0, y: 0 }

export const emptyBox: Box = {
    tl: emptyPoint,
    tm: emptyPoint,
    tr: emptyPoint,
    bl: emptyPoint,
    bm: emptyPoint,
    br: emptyPoint,
    ml: emptyPoint,
    mr: emptyPoint,
    t: 0,
    b: 0,
    l: 0,
    r: 0,
    w: 0,
    h: 0,
}

export interface Point {
    readonly x: number;
    readonly y: number;
}

export type ContextItemOrNull = ContextItem | null;

export interface ContextItem {
    loc: string
    el?: HTMLElement
    layout?: LayoutItemOrNull
    connections?: ItemConnection[]
}

export interface ItemConnection {
    start: Point
    end: Point
}

export type LayoutItemOrNull = LayoutItem | null

export interface LayoutItem {
    text: string;
    id?: string;
    group?: string;
}

export interface LayoutConnection {
    start: string;
    end: string;
}

export interface GroupContainer {
    name: string
    elements: HTMLElement[]
}

