export interface Point {
    x: number
    y: number
}

export function calcPoints(numberOfPoints: number, size: number): Point[] {
    const points: Point[] = []
    const radius = size / 2
    const angleD = 360 / numberOfPoints
    let angleC = 0    

    for (let i = 0; i < numberOfPoints; i++) {
        const angleR = angleC * Math.PI / 180
        const point: Point = {
            x: radius * Math.cos(angleR),
            y: radius * Math.sin(angleR),
        }
        points.push(point)
        angleC += angleD
    }

    return points
}