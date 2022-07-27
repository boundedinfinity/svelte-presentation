export class Diagram {
    layout: DiagramItem[][] = []
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

export class DiagramItem {
    id?: string
    text?: string
    location: DiagramLocation = new DiagramLocation()
}

export class DiagramLocation {
    row: number = 0
    col: number = 0

    id(): string {
        return `r${this.row}c${this.col}`
    }
}

export class DiagramGroup {
    name?: string
    items: DiagramItem[] = []
}

export enum ItemPoint {
    tl = "Top Left",
    tm = "Top Middle",
    tr = "Top Right",
    bl = "Bottom Left",
    bm = "Bottom Middle",
    br = "Bottom Right",
    lm = "Left Middle",
    rm = "Right Middle",
}

export enum ConnectionMarker {
    none = "None",
    dot = "Dot",
    arrow = "Arrow",
}

export class ConnectionDescription {
    item?: DiagramItem
    marker: ConnectionMarker = ConnectionMarker.none
    point?: ItemPoint
}

export class DiagramConnection {
    from?: ConnectionDescription
    to?: ConnectionDescription
}