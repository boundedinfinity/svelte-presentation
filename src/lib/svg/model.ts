export interface ViewBox {
    minX: number
    minY: number
    w: number
    h: number
}

export interface Point {
    readonly x: number;
    readonly y: number;
}

export interface BoundingBox {
    readonly height: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
}