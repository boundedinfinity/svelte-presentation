import { type Diagram, type DiagramBox, ConnectionDescription } from './model2'
import YAML from 'js-yaml'

function parseYaml(config: string): Diagram {
    const diagram = YAML.load(config) as Diagram
    return diagram
}

function parseDrawing(drawing: string, config: string): Diagram {
    const diagram = parseYaml(config)
    return diagram
}

function closestPoint(from: DiagramBox, to: DiagramBox): [ConnectionDescription, ConnectionDescription] {
    const fd = new ConnectionDescription()
    const td = new ConnectionDescription()
    
    if(from.location?.row == to.location?.row && from.location?.col < to.location?.col) {
        
    }

    return [fd, td]
}

export default {
    parseYaml,
    parseDrawing,
}
