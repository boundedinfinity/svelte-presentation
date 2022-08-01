export interface DiagramInput {
    layout?: {
        id?: string,
        text?: string
    }[][],
    groups?: {
        id?: string,
        text?: string,
        items: string[]
    }[],
    connections?: {
        id?: string,
        text?: string,
        from: string,
        to: string
    },
}

export class Diagram {
    layout: DiagramBox[][] = []
    groups?: DiagramGroup[] = []
    connections?: DiagramConnection[] = []

    rows(): number {
        return this.layout ? this.layout.length : 0;
    }

    cols(): number {
        return this.layout
            ? this.layout.reduce((p, c) => c.length > p ? c.length : p, 0)
            : 0
    }
}

export class DiagramBox {
    id?: string
    text?: string
    row: number = 0
    col: number = 0

    location(): string {
        return `r${this.row}c${this.col}`
    }
}

export class DiagramGroup {
    name?: string
    items: DiagramBox[] = []
}

export enum DiagramBoxPoint {
    tl = "Top Left",
    tm = "Top Middle",
    tr = "Top Right",
    bl = "Bottom Left",
    bm = "Bottom Middle",
    br = "Bottom Right",
    lm = "Left Middle",
    rm = "Right Middle",
}

export enum DiagramConnectionMarker {
    none = "None",
    dot = "Dot",
    arrow = "Arrow",
}

export class ConnectionDescription {
    item?: DiagramBox
    marker: DiagramConnectionMarker = DiagramConnectionMarker.none
    point?: DiagramBoxPoint
}

export class DiagramConnection {
    from?: ConnectionDescription
    to?: ConnectionDescription
}