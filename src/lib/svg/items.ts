import { type ContextItem, type ItemConnection, em2Px, type LayoutItemOrNull, htmlElements2Boxes, getGroupBox, emptyBox, itemsRowAndCol, type GroupContainer } from "$lib/svg";
import { derived, writable, type Writable, type Readable } from "svelte/store";

const itemMap = new Map<string, ContextItem>()

function initItems(layouts: LayoutItemOrNull[][]) {
    const itemTable: ContextItem[][] = []
    const [rows, cols] = itemsRowAndCol(layouts)

    for (let row = 0; row < rows; row++) {
        itemTable.push([])

        for (let col = 0; col < cols; col++) {
            const loc = `r${row}c${col}`
            let layout: LayoutItemOrNull

            try {
                layout = layouts[row][col]
            } catch {
                layout = null
            }

            const context: ContextItem = {
                loc: loc,
                layout: layout,
            }

            itemTable[row].push(context)
            itemMap.set(context.loc, context)
        }
    }

    return itemTable
}



function createGroupElements() {
    const groupMapStore = writable(new Map<string, GroupContainer>())

    return {
        subscribe: groupMapStore.subscribe,

        add: (item: ContextItem, el: HTMLElement) => groupMapStore.update(m => {
            if (item.layout?.group && el) {
                let gc = m.get(item.layout.group)

                if (!gc) {
                    gc = {
                        name: item.layout.group,
                        elements: []
                    }
                }

                if (!gc.elements.find(el2 => el.id == el2.id)) {
                    gc.elements.push(el)
                }

                m.set(item.layout.group, gc)
            }

            return m
        }),

        box: (group: string) => derived(groupElements, function ($groupElements) {
            const gc = $groupElements.get(group)!
            let box = emptyBox
            if (gc && gc.elements) box = getGroupBox(htmlElements2Boxes(gc.elements))
            return box
        }),

        refresh: () => groupMapStore.update(m => m)
    }
}

const groupElements = createGroupElements()

export {
    initItems,
    groupElements,
}



